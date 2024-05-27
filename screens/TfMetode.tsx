import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import WtW from "../components/WtW";
import Left from "../components/Left";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TfMetode = () => {
  return (
    <View style={styles.tfMetode}>
      <WtW
        walletToWallet="Wallet to Wallet"
        wallet={require("../assets/wallet.png")}
      />
      <WtW
        walletToWallet="Wallet to Bank"
        wallet={require("../assets/wallet1.png")}
        rectangleViewTop={358}
        textBackgroundColor="rgba(46, 204, 113, 0.2)"
        transferYourMoneyWidth={153}
      />
      <View style={styles.back}>
        <Text style={[styles.transfer, styles.transferFlexBox]}>Transfer</Text>
        <Image
          style={styles.arrowLeftIcon}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
      </View>
      <Left
        rectangle75={require("../assets/rectangle-75.png")}
        lancelot="Lancelot"
        prop="****13784892"
        prop1="12.22"
      />
      <Left
        rectangle75={require("../assets/rectangle-751.png")}
        lancelot="Odette"
        prop="****13784891"
        prop1="12.23"
        propLeft={217}
        propBackgroundColor="rgba(231, 76, 60, 0.2)"
        propLeft1={63}
        propLeft2={25}
        propLeft3={11}
        propColor="#e74c3c"
      />
      <Text style={[styles.recentTransaction, styles.chooseYourGameClr]}>
        Recent Transaction
      </Text>
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
      <View style={styles.up}>
        <Text style={[styles.chooseYourGame, styles.chooseYourGameClr]}>
          Choose Your Game
        </Text>
        <Image
          style={styles.searchBIcon}
          resizeMode="cover"
          source={require("../assets/search-b.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transferFlexBox: {
    textAlign: "left",
    top: 0,
  },
  chooseYourGameClr: {
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  transfer: {
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: 30,
    letterSpacing: 0,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  arrowLeftIcon: {
    top: 4,
    width: 20,
    height: 20,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  back: {
    top: 75,
    width: 106,
    height: 27,
    left: 30,
    position: "absolute",
  },
  recentTransaction: {
    top: 508,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: 30,
    color: Color.colorBlack,
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
  chooseYourGame: {
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    left: 0,
    textAlign: "left",
    top: 0,
    color: Color.colorBlack,
  },
  searchBIcon: {
    top: 3,
    left: 322,
    width: 30,
    height: 30,
    position: "absolute",
  },
  up: {
    top: 132,
    left: 32,
    width: 352,
    height: 36,
    position: "absolute",
  },
  tfMetode: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default TfMetode;
