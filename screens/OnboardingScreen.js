import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? '#ff2156' : '#808080'
  return (
    <View
      style={{
        height: 5,
        width: 5,
        marginHorizontal: 3,
        backgroundColor
      }}
    />
  )
}

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginRight: 12
    }}
    {...props}
  >
    <Text style={{ color: "#ff2156" }}>Done</Text>
  </TouchableOpacity>
)

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('Login')}
      onDone={() => navigation.navigate('Login')}
      DotComponent={Dots}
      DoneButtonComponent={Done}
      bottomBarColor='#ffffff'
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/onb1.png')} />,
          title: 'Thoát nạn thu chi',
          subtitle: 'Quản lý thu chi một cách thông minh và tiện lợi. Một người bạn đáng tin cậy giúp bạn tiết kiệm thời gian và tiền bạc một cách tốt nhất',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/onb2.png')} />,
          title: 'Theo dõi dòng tiền',
          subtitle: 'Công cụ giúp hiểu rõ hơn tình hình tài chính, từ thu chi hàng ngày đến xu hướng thu nhập. Bắt đầu quản lý tài chính thông minh ngay từ bước đầu',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/onb3.png')} />,
          title: 'Quản lý tài chính',
          subtitle: 'Đây là một giải pháp tuyệt vời để theo dõi chi phí, tiền tiết kiệm và nguồn tiền bản thân',
        },
      ]}
    />
  )
}

export default OnboardingScreen