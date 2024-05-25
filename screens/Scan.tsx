import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Scan = () => {
  return (
    <View style={styles.scan}>
      <Image
        style={[styles.fingerprintScan1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/fingerprintscan-1.png")}
      />
      <View style={styles.down}>
        <Text style={[styles.text, styles.textPosition]}>100%</Text>
        <Text style={[styles.scanSource, styles.scanSourceTypo]}>
          scan source
        </Text>
      </View>
      <View style={styles.textUp}>
        <Text style={[styles.placeYourFinger, styles.timeTypo]}>
          Place Your Finger
        </Text>
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
          contentFit="cover"
          source={require("../assets/arrowleft1.png")}
        />
      </View>
      <View style={[styles.systemDarkStatusBarD, styles.systemPosition]}>
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={[styles.capIcon, styles.systemPosition]}
            contentFit="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection1.png")}
        />
      </View>
      <View style={[styles.systemDarkHomeIndicator, styles.systemPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.continue, styles.timeFlexBox]}>Continue</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
    color: Color.colorWhite,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
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
  timeTypo: {
    fontWeight: "600",
    color: Color.colorWhite,
  },
  continueTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  systemPosition: {
    right: 0,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
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
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    textAlign: "left",
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
    letterSpacing: 0,
    top: 0,
    position: "absolute",
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
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    width: 54,
    top: "50%",
    fontWeight: "600",
    color: Color.colorWhite,
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: "50%",
    position: "absolute",
  },
  capIcon: {
    marginTop: -1.95,
    width: 1,
    height: 4,
    opacity: 0.4,
    top: "50%",
  },
  capacity: {
    marginTop: -3.65,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
    backgroundColor: Color.colorWhite,
    top: "50%",
    position: "absolute",
  },
  battery: {
    marginTop: -4.2,
    right: 14,
    width: 24,
    height: 11,
    top: "50%",
    position: "absolute",
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
    left: 0,
    top: 0,
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
    left: 0,
  },
  buttonChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
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
