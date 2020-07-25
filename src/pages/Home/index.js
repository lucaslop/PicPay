import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Suggestions from "../../components/Suggestions";
import Activities from "../../components/Activitites";
import Tips from "../../components/Tips";
import {
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  BalanceValue,
  ScrollView
} from "./styles";

const Home = () => {
  return (
    <Container>
      <ScrollView>
        <Header>
          <Icon name="qrcode" size={30} color="#18c860" />
          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <BalanceValue>R$ 0,00</BalanceValue>
          </BalanceContainer>
          <Icon name="gift" size={30} color="#18c860" />
        </Header>

        <Suggestions />

        <Activities />

        <Tips />
      </ScrollView>
    </Container>
  );
};

Home.navigationOptions = {
  tabBarLabel: "Início",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={20} color={tintColor} />
  )
};

export default Home;
