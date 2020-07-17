import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// import { Container } from './styles';

const Config = () => {
  return <View />;
};

Config.navigationOptions = {
  tabBarLabel: 'Ajustes',
  tabBarIcon: ({tintColor}) => (
    <Icon name="setting" size={20} color={tintColor} />
  ),
};

export default Config;
