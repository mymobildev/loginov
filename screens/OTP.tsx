import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const OTP = () => {
  return (
    <View style={styles.otp}>
      <View style={[styles.kpad, styles.kpadLayout]}>
        <View style={[styles.kpadChild, styles.kpadLayout]} />
        <View style={[styles.hehe, styles.heheLayout]}>
          <View style={[styles.button, styles.heheLayout]}>
            <View style={[styles.buttonChild, styles.buttonLayout]} />
            <View style={[styles.buttonItem, styles.buttonLayout]} />
            <View style={[styles.buttonInner, styles.buttonLayout]} />
            <View style={[styles.rectangleView, styles.buttonChildLayout1]} />
            <View style={[styles.buttonChild1, styles.buttonChildLayout1]} />
            <View style={[styles.buttonChild2, styles.buttonChildLayout1]} />
            <View style={[styles.buttonChild3, styles.buttonChildLayout1]} />
            <View style={[styles.buttonChild4, styles.buttonChildLayout]} />
            <View style={[styles.buttonChild5, styles.buttonChildLayout]} />
            <View style={[styles.buttonChild6, styles.buttonChildLayout]} />
          </View>
          <View style={styles.number}>
            <Text style={[styles.text, styles.textTypo2]}>1</Text>
            <Text style={[styles.text1, styles.textTypo2]}>4</Text>
            <Text style={[styles.text2, styles.textTypo2]}>7</Text>
            <Text style={[styles.text3, styles.textTypo1]}>2</Text>
            <Text style={[styles.text4, styles.textTypo1]}>5</Text>
            <Text style={[styles.text5, styles.textTypo1]}>8</Text>
            <Text style={[styles.text6, styles.textTypo1]}>0</Text>
            <Text style={[styles.text7, styles.textTypo]}>3</Text>
            <Text style={[styles.text8, styles.textTypo]}>6</Text>
            <Text style={[styles.text9, styles.textTypo]}>9</Text>
          </View>
          <Image
            style={styles.deleteIcon}
            contentFit="cover"
            source={require("../assets/delete.png")}
          />
        </View>
      </View>
      <View style={styles.batang}>
        <View style={[styles.batangChild, styles.batangChildLayout]} />
        <View style={[styles.batangItem, styles.batangChildLayout]} />
        <View style={[styles.batangInner, styles.batangChildLayout]} />
        <View style={[styles.batangChild1, styles.batangChildLayout]} />
        <View style={styles.otp1}>
          <Text style={[styles.text10, styles.otpTypo]}>6</Text>
          <Image
            style={[styles.otpChild, styles.otpLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Image
            style={[styles.otpItem, styles.otpLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Image
            style={[styles.otpInner, styles.otpLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
        </View>
      </View>
      <Text style={[styles.pleaseEnterOtp, styles.otpPosition]}>{`Please Enter
OTP Verification`}</Text>
      <View style={styles.up}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrowleft.png")}
        />
        <Text style={[styles.otpVerification, styles.otpClr]}>
          OTP Verification
        </Text>
      </View>
      <View style={styles.systemDarkStatusBarD}>
        <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        <View style={[styles.battery, styles.timePosition]}>
          <View style={[styles.border, styles.timePosition]} />
          <Image
            style={[styles.capIcon, styles.timePosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.timePosition]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
      </View>
      <View style={styles.systemDarkHomeIndicator}>
        <View style={styles.homeIndicator} />
      </View>
      <Text style={[styles.resendOtp, styles.otpClr]}>Resend OTP</Text>
      <Text style={[styles.resendOtpAgainContainer, styles.otpPosition]}>
        <Text style={styles.resendOtpAgain}>{`Resend OTP Again in `}</Text>
        <Text style={styles.text11}>00:30</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  kpadLayout: {
    height: 361,
    width: 414,
    left: 0,
    position: "absolute",
  },
  heheLayout: {
    height: 250,
    width: 386,
    position: "absolute",
  },
  buttonLayout: {
    height: 54,
    width: 117,
    backgroundColor: Color.colorMediumseagreen_200,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  buttonChildLayout1: {
    width: 119,
    left: 134,
    height: 54,
    backgroundColor: Color.colorMediumseagreen_200,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  buttonChildLayout: {
    left: 270,
    height: 54,
    width: 117,
    backgroundColor: Color.colorMediumseagreen_200,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  textTypo2: {
    height: 35,
    color: Color.colorWhite,
    width: 18,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_11xl,
    left: 0,
    position: "absolute",
  },
  textTypo1: {
    left: 133,
    height: 35,
    width: 18,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  textTypo: {
    left: 266,
    height: 35,
    width: 18,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  batangChildLayout: {
    width: 50,
    backgroundColor: Color.colorSilver,
    borderRadius: Border.br_3xs,
    height: 50,
    top: 0,
    position: "absolute",
  },
  otpTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  otpLayout: {
    height: 10,
    width: 10,
    top: 18,
    position: "absolute",
  },
  otpPosition: {
    textAlign: "left",
    left: 30,
    position: "absolute",
  },
  otpClr: {
    color: Color.colorMediumseagreen_100,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  kpadChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen_100,
    top: 0,
  },
  buttonChild: {
    top: 0,
  },
  buttonItem: {
    top: 65,
  },
  buttonInner: {
    top: 131,
  },
  rectangleView: {
    top: 0,
  },
  buttonChild1: {
    top: 65,
  },
  buttonChild2: {
    top: 131,
  },
  buttonChild3: {
    top: 196,
  },
  buttonChild4: {
    top: 0,
  },
  buttonChild5: {
    top: 65,
  },
  buttonChild6: {
    top: 131,
  },
  button: {
    top: 0,
    left: 0,
  },
  text: {
    top: 0,
  },
  text1: {
    top: 65,
  },
  text2: {
    top: 130,
  },
  text3: {
    top: 0,
  },
  text4: {
    top: 65,
  },
  text5: {
    top: 130,
  },
  text6: {
    top: 195,
  },
  text7: {
    top: 0,
  },
  text8: {
    top: 65,
  },
  text9: {
    top: 130,
  },
  number: {
    top: 10,
    left: 51,
    width: 284,
    height: 230,
    position: "absolute",
  },
  deleteIcon: {
    top: 208,
    left: 311,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  hehe: {
    top: 11,
    left: 14,
  },
  kpad: {
    top: 535,
  },
  batangChild: {
    left: 0,
  },
  batangItem: {
    left: 65,
  },
  batangInner: {
    left: 130,
  },
  batangChild1: {
    left: 195,
  },
  text10: {
    left: 190,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  otpChild: {
    left: 130,
  },
  otpItem: {
    left: 65,
  },
  otpInner: {
    left: 0,
  },
  otp1: {
    top: 2,
    left: 20,
    width: 210,
    height: 45,
    position: "absolute",
  },
  batang: {
    top: 255,
    left: 85,
    width: 245,
    height: 50,
    position: "absolute",
  },
  pleaseEnterOtp: {
    top: 129,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
  },
  arrowLeftIcon: {
    top: 3,
    width: 20,
    height: 20,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  otpVerification: {
    left: 105,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: 0,
  },
  up: {
    top: 76,
    width: 249,
    height: 27,
    left: 30,
    position: "absolute",
  },
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    marginTop: -1.95,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
  },
  capacity: {
    marginTop: -3.65,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorBlack,
    height: 7,
    width: 18,
    top: "50%",
  },
  battery: {
    marginTop: -4.2,
    right: 14,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  systemDarkStatusBarD: {
    height: 49,
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_100,
    width: 134,
    height: 5,
    position: "absolute",
  },
  systemDarkHomeIndicator: {
    bottom: 0,
    height: 37,
    right: 0,
    left: 0,
    position: "absolute",
  },
  resendOtp: {
    top: 335,
    left: 169,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.colorMediumseagreen_100,
  },
  resendOtpAgain: {
    color: Color.colorBlack,
  },
  text11: {
    color: Color.colorTomato_100,
  },
  resendOtpAgainContainer: {
    top: 211,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  otp: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default OTP;
