import React, {useState} from 'react';
import Modal, {ModalProps} from 'react-native-modal';

const useModalHandler = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const openCustomModal = () => {
    setModalVisible(true);
  };
  const closeCustomModal = () => {
    setModalVisible(false);
  };
  const CustomModal = ({...props}: any) => (
    <Modal
      {...props}
      avoidKeyboard
      isVisible={isModalVisible}
      onDismiss={closeCustomModal}
      backdropColor="transparent"
      backdropOpacity={0.7}
      swipeDirection="down"
      onBackdropPress={closeCustomModal}
      animationIn="fadeInUp"
      animationOut={'fadeInDown'}
      animationInTiming={600}
      animationOutTiming={600}
      style={{margin: 5, justifyContent: 'flex-end'}}></Modal>
  );
  return {openCustomModal, closeCustomModal, CustomModal};
};

export default useModalHandler;
