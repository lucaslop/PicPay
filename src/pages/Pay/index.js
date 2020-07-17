import React from 'react';
import {View} from 'react-native';
import Background from '../../components/Background';
import PayButton from '../../components/PayButton';
// import { Container } from './styles';

const Pay = () => {
  return (
    <Background>
      <View />
    </Background>
  );
};
Pay.navigationOptions = {
  tabBarIcon: <PayButton />,
};
export default Pay;
