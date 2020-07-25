import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

// header
export const Header = styled.View`
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

// section card
export const Card = styled.View`
  background: #1e222b;
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.Image``;

export const Description = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

// Card Body
export const CardBody = styled.View`
  margin-top: 20px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 18px;
`;

// card footer

export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;
export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Value = styled.Text`
  color: #f75175;
  font-size: 14px;
  font-weight: bold;
`;

export const Hr = styled.View`
  width: 2px;
  height: 13px;
  background: rgba(255, 255, 255, 0.3);
  margin: 0 15px;
`;

export const Label = styled.Text`
  color: #eee;
  margin-left: 10px;
`;

export const Footer = styled.View`
  flex-direction: row;
`;
export const Action = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
`;
export const LabelFooter = styled.Text`
  color: #eee;
  margin-left: 10px;
`;
