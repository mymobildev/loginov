const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import First from "./screens/First";
import RegistOrLogin from "./screens/RegistOrLogin";
import OTP from "./screens/OTP";
import PopUp from "./screens/PopUp";
import Account from "./screens/Account";
import ProfilePc from "./screens/ProfilePc";
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

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "ComicNeue-Regular": require("./assets/fonts/ComicNeue-Regular.ttf"),
    "ComicNeue-Bold": require("./assets/fonts/ComicNeue-Bold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

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
              name="ProfilePc"
              component={ProfilePc}
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
