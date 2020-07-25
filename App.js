import React from "react";
import Routes from "./src/index";
import { StatusBar } from "react-native";
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </>
  );
}
