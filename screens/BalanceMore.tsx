import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import ContainerBox from "../components/ContainerBox";
import Isi1 from "../components/Isi1";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const BalanceMore = () => {
  return (
    <View style={styles.balanceMore}>
      <ContainerBox />
      <View style={[styles.back, styles.backPosition]}>
        <Text style={[styles.moneyHistory, styles.backPosition]}>
          Money History
        </Text>
        <Image
          style={[styles.arrowLeftIcon, styles.arrowLeftIconPosition]}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
      </View>
      <Isi1 />
      <SystemDarkStatusBarD
        dimensionCode={require("../assets/cap.png")}
        dimensionCodeText={require("../assets/wifi.png")}
        dimensionCodeValue={require("../assets/cellular-connection.png")}
        propColor="#000"
        propBorderColor="#000"
        propBackgroundColor="#000"
      />
      <View
        style={[styles.systemDarkHomeIndicator, styles.arrowLeftIconPosition]}
      >
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backPosition: {
    left: 30,
    position: "absolute",
  },
  arrowLeftIconPosition: {
    left: 0,
    position: "absolute",
  },
  moneyHistory: {
    top: 0,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMediumseagreen_100,
    textAlign: "left",
  },
  arrowLeftIcon: {
    top: 4,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  back: {
    top: 75,
    width: 160,
    height: 27,
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
  },
  balanceMore: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default BalanceMore;
