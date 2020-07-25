import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background: #eee;
`;
export const Header = styled.View`
  width: 100%;
  background: #eee;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #f4f4f6;

  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text`
  margin-left: 150px;
  font-size: 18px;
  font-weight: bold;
`;
export const Text = styled.Text`
  margin-left: 40px;
  font-size: 18px;
  color: #38cd91;
`;

export const Body = styled.View`
  flex: 1;
  background: #fff;
`;

export const ScrollView = styled.ScrollView``;

export const Card = styled.View`
  width: 100%;
  padding: 15px;
  border-bottom-width: 2px;
  border-bottom-color: #f4f4f6;
`;
export const CardTitle = styled.Text`
  font-size: 16px;
`;
export const Date = styled.Text`
  color: grey;
  margin-top: 13px;
`;
export const Hr = styled.View``;
