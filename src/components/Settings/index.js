import React from "react";
import { View } from "react-native";
import { Container, Image, UserName, Name, Link } from "./styles";
import avatar from "../../../assets/avatar.png";
const Settings = () => {
  return (
    <Container>
      <Image source={avatar} />
      <UserName>@LucasLop</UserName>
      <Name>Lucas Lopes</Name>
      <Link>Ver meu perfil ></Link>
    </Container>
  );
};

export default Settings;
