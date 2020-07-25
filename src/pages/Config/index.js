import React from "react";
import Settings from "../../components/Settings";
import Icon from "react-native-vector-icons/AntDesign";
import { Container, Header, Title, Text, ScrollView } from "./styles";

const Config = () => {
  return (
    <Container>
      <Header>
        <Title>Ajustes</Title>
        <Text>Ajuda</Text>
      </Header>
      <ScrollView>
        <Settings />
      </ScrollView>
    </Container>
  );
};

Config.navigationOptions = {
  tabBarLabel: "Ajustes",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="setting" size={20} color={tintColor} />
  )
};

export default Config;
