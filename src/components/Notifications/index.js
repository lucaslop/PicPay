import React from "react";
import { View } from "react-native";

import {
  Container,
  Header,
  Title,
  Text,
  Body,
  ScrollView,
  Card,
  CardTitle,
  Date,
  Hr
} from "./styles";

const items = [
  {
    key: String(Math.random()),
    info:
      "Pague o que quiser com o PicPay hoje e ganhe 20% de volta de até R$50. Sabia mais",
    date: "Ontem ás 18:12"
  },
  {
    key: String(Math.random()),
    info:
      "Pague o que quiser com o PicPay hoje e ganhe 20% de volta de até R$50. Sabia mais",
    date: "23 de jul ás 18:12"
  },
  {
    key: String(Math.random()),
    info:
      "Pague o que quiser com o PicPay hoje e ganhe 20% de volta de até R$50. Sabia mais",
    date: "23 de jul ás 18:12"
  },
  {
    key: String(Math.random()),
    info:
      "Pague o que quiser com o PicPay hoje e ganhe 20% de volta de até R$50. Sabia mais",
    date: "23 de maio ás 18:12"
  },
  {
    key: String(Math.random()),
    info:
      "Pague o que quiser com o PicPay hoje e ganhe 20% de volta de até R$50. Sabia mais",
    date: "03 de maio ás 18:12"
  },
  {
    key: String(Math.random()),
    info:
      "Pague o que quiser com o PicPay hoje e ganhe 20% de volta de até R$50. Sabia mais",
    date: "10 de jan ás 15:30"
  },
  {
    key: String(Math.random()),
    info:
      "Pague o que quiser com o PicPay hoje e ganhe 20% de volta de até R$50. Sabia mais",
    date: "10 de fev ás 18:12"
  },
  {
    key: String(Math.random()),
    info:
      "Pague o que quiser com o PicPay hoje e ganhe 20% de volta de até R$50. Sabia mais",
    date: "Ontem ás 18:12"
  }
];

const Notifications = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>Notificações</Title>
          <Text>Configurar</Text>
        </Header>
      </Container>
      <Body>
        <ScrollView>
          {items.map(item => (
            <Card key={item.key}>
              <CardTitle>{item.info}</CardTitle>
              <Date>{item.date}</Date>
              <Hr />
            </Card>
          ))}
        </ScrollView>
      </Body>
    </>
  );
};

export default Notifications;
