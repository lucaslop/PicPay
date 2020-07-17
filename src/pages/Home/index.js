import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {View} from 'react-native';
import Background from '../../components/Background';
import {Container} from './styles';

const Home = () => {
  return (
    <Background>
      <Container>
        <View />
      </Container>
    </Background>
  );
};

Home.navigationOptions = {
  tabBarLabel: 'Início',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor} />,
};

export default Home;
