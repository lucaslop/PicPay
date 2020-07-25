import React from "react";
import {
  Feather,
  MaterialCommunityIcons,
  AntDesign
} from "react-native-vector-icons/";
import avatar from "../../../assets/avatar.png";
import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Hr,
  Label,
  Footer,
  Action,
  LabelFooter
} from "./styles";

const Activitites = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@lucaslop</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Lucas Lopes</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$: 20,00</Value>
            <Hr />
            <Feather name="lock" size={14} color="#eeee" />
            <Label>há 3 anos atrás</Label>
          </Details>

          <Footer>
            <Action>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="#eee"
              />
              <LabelFooter>0</LabelFooter>
            </Action>

            <Action>
              <AntDesign name="hearto" size={14} color="#eee" />
              <LabelFooter>0</LabelFooter>
            </Action>
          </Footer>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activitites;
