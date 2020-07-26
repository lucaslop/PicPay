import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
export const Container = styled.View`
  background: #eee;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 38px;
  color: #fff;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 25px;
  justify-content: center;
  margin: 0 10px;
`;

export const Label = styled.Text`
  font-size: 10px;
  color: #fff;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  background: #fff;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMehtods = styled.View`
  margin-top: 20px;
  padding: 0 16px;
`;

export const PayTitle = styled.Text`
  color: #000;
  text-transform: uppercase;
`;

export const PayCard = styled.View`
  background: #fff;
  padding: 20px;
  border-radius: 8px;

  margin: 15px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const CardInfo = styled.Text`
  font-size: 14px;
  color: #000;
  margin-top: 15px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const CardImage = styled.Image`
  width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;
export const AddLabel = styled.Text`
  color: #0db060;
  font-weight: bold;
  margin-left: 5px;
`;

export const CupomArea = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const CupomLabel = styled.Text`
  color: #0db060;
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
  text-decoration-line: underline;
`;
