import React, { useEffect } from 'react';
import WebView from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { h, w } from 'values/Dimensions';
import { View } from 'react-native';

const PayModal = ({
  closeModal,
  CustomModal,
  url,
  refNum,
}: {
  closeModal?: any;
  CustomModal?: any;
  url: string;
  refNum?: any;
}) => {
  const navigation = useNavigation<any>();
  const webViewRef = React.useRef<any>();
  const [paymentInfo, setPaymentInfo] = React.useState<{
    error_occured?: boolean;
    success?: boolean;
    message?: string;
    done?: boolean;
    type?: string;
  }>();

  return (
    <CustomModal>
      <View style={{ height: h * 0.8, borderRadius: 80, width: w }}>
        <WebView
          ref={webViewRef}
          source={{
            uri: url,
          }}
          style={{
            flex: 1,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
          startInLoadingState={true}
          onNavigationStateChange={state => {
            if (state?.url?.length > 0) {
              const url = state.url;
              const regex = /[?&]([^=#]+)=([^&#]*)/g;
              const params: any = {};
              let match: any;
              while ((match = regex.exec(url))) {
                params[match[1]] = match[2];
              }
              console.log(params);

              if (params?.statusCode !== undefined) {
                navigation.navigate('paymentResult', {
                  statues: params?.statusCode === '200' ? 'success' : 'failed',
                  refNum: params?.merchantRefNumber || refNum,
                });
              }
            }
          }}
        />
      </View>
    </CustomModal>
  );
};

export default PayModal;
