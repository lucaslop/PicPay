import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign
} from "react-native-vector-icons/";

import creditCard from "../../../assets/credit-card.png";
import { Switch } from "react-native";
import {
  Container,
  Header,
  Title,
  BalanceContainer,
  Value,
  Bold,
  HeaderContainer,
  EyeButton,
  Info,
  ButtonContainer,
  Action,
  Label,
  UseBalance,
  UseBalanceTitle,
  PaymentMehtods,
  PayTitle,
  PayCard,
  CardBody,
  CardDetails,
  CardInfo,
  CardTitle,
  CardImage,
  AddButton,
  AddLabel,
  CupomArea,
  CupomLabel
} from "./styles";

const Wallet = () => {
  const [Visible, setVisible] = useState(false);
  const [ChangeSwitch, setChangeSwitch] = useState(true);

  function handleToggleVisibile() {
    setVisible(!Visible);
  }

  function handleToggleSwitch() {
    setChangeSwitch(!ChangeSwitch);
  }
  return (
    <Container>
      <Header
        colors={ChangeSwitch ? ["#52E78C", "#1AB563"] : ["#D3D3D3", "#868686"]}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{Visible ? "0,00" : "----"}</Bold>
            </Value>

            <EyeButton onPress={handleToggleVisibile}>
              <Feather
                name={Visible ? "eye" : "eye-off"}
                size={28}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu Rendimento está rendendo 100% do CDI</Info>

          {/* buttons */}
          <ButtonContainer>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <Label>Adicionar</Label>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <Label>Retirar</Label>
            </Action>
          </ButtonContainer>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch value={ChangeSwitch} onValueChange={handleToggleSwitch} />
      </UseBalance>

      <PaymentMehtods>
        <PayTitle>Formas de Pagamento</PayTitle>
      </PaymentMehtods>

      <PayCard>
        <CardBody>
          <CardDetails>
            <CardTitle>Cadastre seu cartão de crédito</CardTitle>

            <CardInfo>
              Cadastre um cartão de crédito para poder fazer pagamentos mesmo
              quando não tiver saldo no seu PicPay
            </CardInfo>
          </CardDetails>

          <CardImage source={creditCard} resizeMode="contain" />
        </CardBody>

        <AddButton>
          <AntDesign name="pluscircleo" size={30} color="#0db060" />
          <AddLabel> Adicionar Cartão de Crédito</AddLabel>
        </AddButton>
      </PayCard>

      <CupomArea>
        <MaterialCommunityIcons
          name="ticket-outline"
          color="#0db060"
          size={25}
        />
        <CupomLabel>Usar código promocional</CupomLabel>
      </CupomArea>
    </Container>
  );
};
Wallet.navigationOptions = {
  tabBarLabel: "Carteira",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="creditcard" size={20} color={tintColor} />
  )
};
export default Wallet;
