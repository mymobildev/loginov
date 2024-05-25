import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const First = () => {
  return (
    <View style={styles.first}>
      <View style={styles.slide}>
        <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome</Text>
        <View style={[styles.last, styles.lastPosition]}>
          <Image
            style={[styles.illustrationfinancesIcon, styles.lastPosition]}
            contentFit="cover"
            source={require("../assets/illustrationfinances.png")}
          />
          <Text
            style={[styles.letsTrySewa, styles.timeClr]}
          >{`Let's try SEWA now!
And get the best solution`}</Text>
        </View>
        <View style={[styles.mid, styles.midPosition]}>
          <Image
            style={[styles.illustrationfinancesIcon, styles.lastPosition]}
            contentFit="cover"
            source={require("../assets/illustrationlocked--security.png")}
          />
          <Text style={[styles.letsTrySewa, styles.timeClr]}>
            Easy and safe in saving money
          </Text>
        </View>
        <View style={[styles.beginning, styles.midPosition]}>
          <Image
            style={[styles.illustrationfinancesIcon, styles.lastPosition]}
            contentFit="cover"
            source={require("../assets/illustrationecommerce.png")}
          />
          <Text
            style={[styles.makeYourOnline, styles.timeClr]}
          >{`Make your online shopping
easy`}</Text>
        </View>
      </View>
      <Image
        style={styles.oIcon}
        contentFit="cover"
        source={require("../assets/3-o.png")}
      />
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.systemPosition]} />
        <Text style={[styles.getStarted, styles.welcomeTypo]}>Get Started</Text>
      </View>
      <View style={[styles.systemDarkStatusBarD, styles.systemPosition]}>
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
      <View style={[styles.systemDarkHomeIndicator, styles.systemPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    position: "absolute",
  },
  lastPosition: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  timeClr: {
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
  },
  midPosition: {
    bottom: "0%",
    top: "16.97%",
    height: "83.03%",
    position: "absolute",
    width: "100%",
  },
  buttonLayout: {
    height: 50,
    width: 354,
  },
  systemPosition: {
    left: 0,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  welcome: {
    left: 63,
    fontSize: FontSize.size_17xl,
    color: Color.colorMediumseagreen_100,
    top: 0,
  },
  illustrationfinancesIcon: {
    height: "82.87%",
    top: "17.13%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  letsTrySewa: {
    left: 69,
    width: 162,
    height: 32,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  last: {
    top: "16.97%",
    height: "83.03%",
    left: "0%",
    right: "0%",
  },
  mid: {
    right: "119%",
    left: "-119%",
  },
  makeYourOnline: {
    left: 68,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  beginning: {
    right: "238%",
    left: "-238%",
  },
  slide: {
    top: 99,
    left: 57,
    width: 300,
    height: 436,
    position: "absolute",
    overflow: "hidden",
  },
  oIcon: {
    top: 565,
    left: 187,
    width: 40,
    height: 10,
    position: "absolute",
  },
  buttonChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen_100,
    height: 50,
    width: 354,
    top: 0,
  },
  getStarted: {
    top: 12,
    left: 126,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
  },
  button: {
    top: 675,
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
    width: 18,
    height: 7,
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
    bottom: 0,
    height: 37,
    right: 0,
  },
  first: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default First;
