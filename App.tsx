const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import ProfilePc from "./screens/ProfilePc";
import First from "./screens/First";
import RegistOrLogin from "./screens/RegistOrLogin";
import OTP from "./screens/OTP";
import PopUp from "./screens/PopUp";
import Account from "./screens/Account";
import Balance from "./screens/Balance";
import BalanceMore from "./screens/BalanceMore";
import QR from "./screens/QR";
import Scan from "./screens/Scan";
import Transfer from "./screens/Transfer";
import Transaction from "./screens/Transaction";
import Game from "./screens/Game";
import TopUpGames from "./screens/TopUpGames";
import TfMetode from "./screens/TfMetode";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePc"
              component={ProfilePc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="First"
              component={First}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegistOrLogin"
              component={RegistOrLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTP"
              component={OTP}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PopUp"
              component={PopUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account"
              component={Account}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Balance"
              component={Balance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BalanceMore"
              component={BalanceMore}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QR"
              component={QR}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Scan"
              component={Scan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Transfer"
              component={Transfer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Transaction"
              component={Transaction}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Game"
              component={Game}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TopUpGames"
              component={TopUpGames}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TfMetode"
              component={TfMetode}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
