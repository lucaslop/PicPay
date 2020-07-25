import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// import { Container } from './styles';
import Notifications from "../../components/Notifications";
const Notification = () => {
  return <Notifications />;
};
Notification.navigationOptions = {
  tabBarLabel: "Notificações",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-notifications-outline" size={20} color={tintColor} />
  )
};
export default Notification;
