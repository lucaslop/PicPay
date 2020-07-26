import React from "react";
import { View } from "react-native";
import {
  Container,
  Image,
  UserName,
  Name,
  Link,
  MenuTitle,
  Menu,
  Item,
  Title,
  Label
} from "./styles";
import avatar from "../../../assets/avatar.png";
const Settings = () => {
  return (
    <>
      <Container>
        <Image source={avatar} />
        <UserName>@LucasLop</UserName>
        <Name>Lucas Lopes</Name>
        <Link>Ver meu perfil ></Link>
      </Container>

      <MenuTitle>Minha Conta</MenuTitle>

      <Menu>
        <Item>
          <Title>Meu PicPay</Title>
          <Label> @lucaslop ></Label>
        </Item>
        <Item>
          <Title>Meu Número</Title>
          <Label>(61) 000-00000 ></Label>
        </Item>
        <Item>
          <Title>Meu Email</Title>
          <Label>lucas@gmail.com ></Label>
        </Item>
        <Item>
          <Title>Conta Bancária</Title>
          <Label>></Label>
        </Item>
        <Item>
          <Title>Taxas e Limites</Title>
          <Label>></Label>
        </Item>

        <Item>
          <Title>Meus Endereços</Title>
          <Label>></Label>
        </Item>
        <Item>
          <Title>Meus Favoritos</Title>
          <Label>></Label>
        </Item>
        <Item>
          <Title>Validar Identidade</Title>
          <Label>Verificado ></Label>
        </Item>
      </Menu>
    </>
  );
};

export default Settings;
