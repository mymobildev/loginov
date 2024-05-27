import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Slide from "../components/Slide";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const First = () => {
  return (
    <View style={styles.first}>
      <Slide />
      <Image
        style={styles.oIcon}
        resizeMode="cover"
        source={require("../assets/3-o.png")}
      />
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={styles.getStarted}>Get Started</Text>
      </View>
      <SystemDarkStatusBarD
        dimensionCode={require("../assets/cap.png")}
        dimensionCodeText={require("../assets/wifi.png")}
        dimensionCodeValue={require("../assets/cellular-connection.png")}
        propColor="#000"
        propBorderColor="#000"
        propBackgroundColor="#000"
      />
      <View
        style={[styles.systemDarkHomeIndicator, styles.buttonChildPosition]}
      >
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 50,
    width: 354,
  },
  buttonChildPosition: {
    left: 0,
    position: "absolute",
  },
  oIcon: {
    top: 565,
    left: 187,
    width: 40,
    height: 10,
    position: "absolute",
  },
  buttonChild: {
    top: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen_100,
    height: 50,
    width: 354,
  },
  getStarted: {
    top: 12,
    left: 126,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  button: {
    top: 675,
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
  },
  first: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default First;
