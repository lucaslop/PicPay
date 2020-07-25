import styled from "styled-components/native";
export const Container = styled.SafeAreaView`
  background: #eee;
  flex: 1;
`;
export const ScrollView = styled.ScrollView``;
export const Header = styled.View`
  background: #eee;
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  margin-left: 43%;
  color: #7c7c7c;
  font-weight: bold;
  font-size: 17px;
`;

export const Text = styled.Text`
  color: #38cd91;
  font-size: 16px;
`;
