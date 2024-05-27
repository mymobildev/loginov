import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Scan = () => {
  return (
    <View style={styles.scan}>
      <Image
        style={[styles.fingerprintScan1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/fingerprintscan-1.png")}
      />
      <View style={styles.down}>
        <Text style={[styles.text, styles.textFlexBox]}>100%</Text>
        <Text style={[styles.scanSource, styles.scanSourceTypo]}>
          scan source
        </Text>
      </View>
      <View style={styles.textUp}>
        <Text style={styles.placeYourFinger}>Place Your Finger</Text>
        <Text style={[styles.pleaseUseYour, styles.scanSourceTypo]}>
          please use your fingerprint for verification
        </Text>
      </View>
      <View style={styles.back}>
        <Text style={[styles.fingerScan, styles.continueTypo]}>
          Finger Scan
        </Text>
        <Image
          style={[styles.arrowLeftIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/arrowleft1.png")}
        />
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
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    top: 0,
  },
  scanSourceTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    left: 0,
    textAlign: "left",
    color: Color.colorWhite,
    letterSpacing: 0,
    position: "absolute",
  },
  continueTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    position: "absolute",
  },
  buttonLayout: {
    width: 354,
    height: 50,
    position: "absolute",
  },
  fingerprintScan1Icon: {
    top: 273,
    left: 92,
    width: 229,
    height: 229,
  },
  text: {
    left: 2,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  scanSource: {
    top: 36,
  },
  down: {
    top: 552,
    left: 176,
    width: 62,
    height: 50,
    position: "absolute",
  },
  placeYourFinger: {
    left: 28,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  pleaseUseYour: {
    top: 37,
  },
  textUp: {
    top: 172,
    left: 102,
    width: 209,
    height: 51,
    position: "absolute",
  },
  fingerScan: {
    left: 30,
    textAlign: "left",
    color: Color.colorWhite,
    top: 0,
  },
  arrowLeftIcon: {
    top: 4,
    width: 20,
    height: 20,
    left: 0,
  },
  back: {
    top: 75,
    width: 136,
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
  buttonChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    width: 354,
  },
  continue: {
    top: 12,
    left: 135,
    color: Color.colorMediumseagreen_100,
    textAlign: "center",
  },
  button: {
    top: 702,
    left: 30,
  },
  scan: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorMediumseagreen_100,
    flex: 1,
    width: "100%",
    height: 896,
  },
});

export default Scan;
