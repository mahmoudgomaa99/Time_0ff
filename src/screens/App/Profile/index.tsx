import { Image, Platform, ScrollView } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { selectLanguage } from 'redux/language';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import Top from './Components/Top';
import ImageSection from './Components/ImageSection';
import Contents from './Components/Contents';
import { selectIsDarkMode } from 'redux/DarkMode';
import User, { selectCurrentUser } from 'redux/user';
import useLibraryPermission from 'hooks/useLibraryPermission';
import ActionSheet from 'components/molecules/ActionSheet';
import languages from 'values/languages';
import { images } from 'src/assets/images';
import { useLoadingSelector } from 'redux/selectors';
import useModalHandler from 'hooks/Modal';

const Profile = () => {
  const dispatch = useAppDispatch();
  const { source, pick } = useLibraryPermission(1);
  const isLoading = useLoadingSelector(User.thunks.doGetUser);
  const currnetUser = useSelector(selectCurrentUser);
  const isDarkMode = useSelector(selectIsDarkMode);
  const lang = useSelector(selectLanguage);
  const [actionSheet, setActionSheet] = useState(false);
  const closeActionSheet = () => setActionSheet(false);
  const { openCustomModal, closeCustomModal, CustomModal } = useModalHandler({
    isCenter: false,
  });

  const actionItems = [
    {
      id: 1,
      label: 'Male Avatar',
      onPress: () => {
        const body = new FormData();
        body.append('type', 'male');
        dispatch(User.thunks.doUpdateImage(body))
          .then(() => {
            dispatch(User.thunks.doGetUser({}));
            closeActionSheet();
          })
          .catch(err => {
            closeActionSheet();
          });
      },
    },
    {
      id: 2,
      label: 'Female Avatar',
      onPress: () => {
        const body = new FormData();
        body.append('type', 'female');
        dispatch(User.thunks.doUpdateImage(body))
          .then(() => {
            dispatch(User.thunks.doGetUser({}));
            closeActionSheet();
          })
          .catch(err => {
            closeActionSheet();
          });
      },
    },
    {
      id: 3,
      label: languages[lang].select_image,
      onPress: () => {
        pick();
        closeActionSheet();
      },
    },
  ];

  useEffect(() => {
    const body = new FormData();
    if (source?.assets?.length > 0) {
      body.append('image', {
        uri:
          Platform.OS === 'android'
            ? source?.assets[0]?.uri
            : source?.assets[0]?.uri.replace('file://', ''),
        name: source?.assets[0]?.fileName,
        type: source?.assets[0]?.type,
      });

      dispatch(User.thunks.doUpdateImage(body))
        .then(() => {
          dispatch(User.thunks.doGetUser({}));
        })
        .catch(err => {});
    }
  }, [source]);

  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
      <ImageSection
        openActionSheet={() => {
          if (!currnetUser) {
            openCustomModal();
          } else {
            pick();
          }
        }}
        user={currnetUser}
        isDarkMode={isDarkMode}
        lang={lang}
        isLoading={isLoading}
      />
      <ScrollView>
        <Contents
          currentUser={currnetUser}
          isDarkMode={isDarkMode}
          lang={lang}
          openCustomModal={openCustomModal}
          closeCustomModal={closeCustomModal}
          CustomModal={CustomModal}
        />
      </ScrollView>

      {/* {actionSheet && (
        <ActionSheet actionItems={actionItems} onCancel={closeActionSheet} />
      )} */}
    </SafeAreaView>
  );
};

export default Profile;
