import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Kpad from "../components/Kpad";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const OTP = () => {
  return (
    <View style={styles.otp}>
      <Kpad />
      <View style={styles.batang}>
        <View style={[styles.batangChild, styles.batangLayout]} />
        <View style={[styles.batangItem, styles.batangLayout]} />
        <View style={[styles.batangInner, styles.batangLayout]} />
        <View style={[styles.rectangleView, styles.batangLayout]} />
        <View style={styles.otp1}>
          <Text style={styles.text}>6</Text>
          <Image
            style={[styles.otpChild, styles.otpLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Image
            style={[styles.otpItem, styles.otpLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Image
            style={[styles.otpInner, styles.otpLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
        </View>
      </View>
      <Text style={[styles.pleaseEnterOtp, styles.otpPosition]}>{`Please Enter
OTP Verification`}</Text>
      <View style={styles.up}>
        <Image
          style={styles.arrowLeftIcon}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
        <Text style={[styles.otpVerification, styles.otpClr]}>
          OTP Verification
        </Text>
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
      <Text style={[styles.resendOtp, styles.otpClr]}>Resend OTP</Text>
      <Text style={[styles.resendOtpAgainContainer, styles.otpPosition]}>
        <Text style={styles.resendOtpAgain}>{`Resend OTP Again in `}</Text>
        <Text style={styles.text1}>00:30</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  batangLayout: {
    width: 50,
    backgroundColor: Color.colorSilver,
    borderRadius: Border.br_3xs,
    top: 0,
    height: 50,
    position: "absolute",
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
  batangChild: {
    left: 0,
  },
  batangItem: {
    left: 65,
  },
  batangInner: {
    left: 130,
  },
  rectangleView: {
    left: 195,
  },
  text: {
    left: 190,
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
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
    color: Color.colorMediumseagreen_100,
  },
  up: {
    top: 76,
    width: 249,
    height: 27,
    left: 30,
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
    right: 0,
    bottom: 0,
    height: 37,
    left: 0,
    position: "absolute",
  },
  resendOtp: {
    top: 335,
    left: 169,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },
  resendOtpAgain: {
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorTomato_100,
  },
  resendOtpAgainContainer: {
    top: 211,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  otp: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default OTP;
