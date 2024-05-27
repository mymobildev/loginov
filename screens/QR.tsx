import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import PM from "../components/PM";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const QR = () => {
  return (
    <View style={styles.qr}>
      <View style={styles.pict}>
        <View style={styles.pictChild} />
        <Image
          style={styles.image7Icon}
          resizeMode="cover"
          source={require("../assets/image-7.png")}
        />
        <Image
          style={styles.pngitem17474241Icon}
          resizeMode="cover"
          source={require("../assets/pngitem-1747424-11.png")}
        />
      </View>
      <PM />
      <Text style={styles.anotherPaymentMethods}>Another Payment Methods</Text>
      <Image
        style={styles.buttonNavigationIcon}
        resizeMode="cover"
        source={require("../assets/button-navigation2.png")}
      />
      <View style={styles.qrChild} />
      <View style={styles.up}>
        <View style={[styles.info, styles.infoLayout]}>
          <Image
            style={[styles.infoChild, styles.infoLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-18.png")}
          />
          <Image
            style={styles.infoItem}
            resizeMode="cover"
            source={require("../assets/ellipse-17.png")}
          />
          <Text style={[styles.i, styles.iTypo]}>i</Text>
        </View>
        <Text style={[styles.scanForPayment, styles.iTypo]}>
          Scan For Payment
        </Text>
      </View>
      <SystemDarkStatusBarD
        dimensionCode={require("../assets/cap1.png")}
        dimensionCodeText={require("../assets/wifi1.png")}
        dimensionCodeValue={require("../assets/cellular-connection1.png")}
        propColor="#fff"
        propBorderColor="#fff"
        propBackgroundColor="#fff"
      />
      <View style={styles.systemDarkHomeIndicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoLayout: {
    width: 40,
    height: 40,
    top: 0,
    position: "absolute",
  },
  iTypo: {
    color: Color.colorWhite,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  pictChild: {
    left: 42,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    width: 192,
    height: 398,
    top: 10,
    position: "absolute",
  },
  image7Icon: {
    top: 116,
    left: 58,
    width: 166,
    height: 164,
    position: "absolute",
  },
  pngitem17474241Icon: {
    left: 0,
    top: 0,
    height: 514,
    width: 451,
    position: "absolute",
  },
  pict: {
    top: 143,
    left: 69,
    height: 514,
    width: 451,
    position: "absolute",
  },
  anotherPaymentMethods: {
    top: 657,
    left: 30,
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    position: "absolute",
  },
  buttonNavigationIcon: {
    top: 774,
    width: 414,
    height: 122,
    left: 0,
    position: "absolute",
  },
  qrChild: {
    top: 186,
    left: 52,
    borderStyle: "dashed",
    borderColor: Color.colorWhite,
    borderWidth: 5,
    width: 311,
    height: 311,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  infoChild: {
    left: 0,
  },
  infoItem: {
    top: 5,
    left: 5,
    width: 30,
    height: 30,
    position: "absolute",
  },
  i: {
    left: 18,
    fontFamily: FontFamily.comicNeueBold,
    fontWeight: "700",
    color: Color.colorWhite,
    top: 10,
  },
  info: {
    left: 194,
  },
  scanForPayment: {
    top: 9,
    fontFamily: FontFamily.robotoRegular,
    left: 0,
  },
  up: {
    top: 85,
    left: 136,
    width: 234,
    height: 40,
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
  qr: {
    backgroundColor: Color.colorMediumseagreen_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default QR;
