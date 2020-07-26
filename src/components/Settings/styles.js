import styled from "styled-components/native";

export const Container = styled.View`
  margin: 35px auto;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  align-self: center;
`;

export const UserName = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin-top: 10px;
`;

export const Name = styled.Text`
  color: grey;
  align-self: center;
  margin-top: 5px;
`;

export const Link = styled.Text`
  align-self: center;
  margin-top: 5px;
  color: #38cd91;
`;

export const MenuTitle = styled.Text`
  color: grey;
  font-size: 15px;
  margin-left: 10px;
  text-transform: uppercase;
`;
export const Menu = styled.View`
  flex: 1;
  margin-top: 10px;
`;
export const Item = styled.TouchableOpacity`
  background: #faf7f7;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #eee;
  height: 40px;
`;
export const Title = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;
export const Label = styled.Text`
  color: grey;
  font-size: 16px;
`;
