import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Pilihan from "../components/Pilihan";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const TopUpGames = () => {
  return (
    <View style={styles.topUpGames}>
      <Pilihan />
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.childPosition]} />
        <Text style={[styles.continue, styles.continueFlexBox]}>Continue</Text>
      </View>
      <View style={[styles.balance, styles.balanceLayout]}>
        <View style={[styles.balanceChild, styles.balanceLayout]} />
        <View style={styles.text}>
          <Text style={[styles.balance1, styles.text1Clr]}>Balance</Text>
          <Text style={[styles.text1, styles.usd1FlexBox]}>$ 155.00</Text>
          <Image
            style={[styles.eyeIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/eye1.png")}
          />
        </View>
        <View style={[styles.mataUang, styles.mataLayout]}>
          <View style={[styles.mataUangChild, styles.mataLayout]} />
          <View style={[styles.usd, styles.usdLayout]}>
            <Text style={[styles.usd1, styles.usd1FlexBox]}>USD</Text>
            <Image
              style={[styles.chevronDownIcon, styles.usdLayout]}
              resizeMode="cover"
              source={require("../assets/chevrondown.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.back}>
        <Text style={[styles.topUpGame, styles.usd1FlexBox]}>Top Up Game</Text>
        <Image
          style={[styles.arrowLeftIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
      </View>
      <SystemDarkStatusBarD
        dimensionCode={require("../assets/cap.png")}
        dimensionCodeText={require("../assets/wifi.png")}
        dimensionCodeValue={require("../assets/cellular-connection.png")}
        propColor="#000"
        propBorderColor="#000"
        propBackgroundColor="#000"
      />
      <View style={styles.systemDarkHomeIndicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 50,
    width: 354,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  continueFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  balanceLayout: {
    height: 120,
    width: 354,
    position: "absolute",
  },
  text1Clr: {
    color: Color.colorBlack,
    left: 0,
  },
  usd1FlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  mataLayout: {
    width: 54,
    height: 20,
    position: "absolute",
  },
  usdLayout: {
    height: 15,
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorMediumseagreen_300,
    height: 50,
    width: 354,
    position: "absolute",
  },
  continue: {
    top: 12,
    left: 135,
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  button: {
    top: 755,
    left: 30,
  },
  balanceChild: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  balance1: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
    top: 0,
  },
  text1: {
    top: 21,
    fontSize: FontSize.size_5xl,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorBlack,
    left: 0,
  },
  eyeIcon: {
    top: 25,
    left: 105,
  },
  text: {
    top: 36,
    left: 35,
    width: 125,
    height: 49,
    position: "absolute",
  },
  mataUangChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumseagreen_100,
    left: 0,
    top: 0,
  },
  usd1: {
    top: 1,
    left: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
  },
  chevronDownIcon: {
    width: 15,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  usd: {
    top: 3,
    left: 6,
    width: 43,
  },
  mataUang: {
    top: 61,
    left: 272,
  },
  balance: {
    top: 132,
    left: 30,
  },
  topUpGame: {
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    top: 0,
    left: 30,
  },
  arrowLeftIcon: {
    top: 4,
    left: 0,
  },
  back: {
    top: 75,
    width: 150,
    height: 27,
    left: 30,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
    position: "absolute",
  },
  systemDarkHomeIndicator: {
    right: 0,
    bottom: 0,
    height: 37,
    left: 0,
    position: "absolute",
  },
  topUpGames: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default TopUpGames;
