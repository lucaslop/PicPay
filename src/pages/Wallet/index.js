import React from 'react';
import {View} from 'react-native';
import Background from '../../components/Background';
import Icon from 'react-native-vector-icons/AntDesign';
// import { Container } from './styles';

const Wallet = () => {
  return (
    <Background>
      <View />
    </Background>
  );
};
Wallet.navigationOptions = {
  tabBarLabel: 'Carteira',
  tabBarIcon: ({tintColor}) => (
    <Icon name="creditcard" size={20} color={tintColor} />
  ),
};
export default Wallet;
