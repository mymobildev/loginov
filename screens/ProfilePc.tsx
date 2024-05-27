import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Profil from "../components/Profil";
import Feature from "../components/Feature";
import SignOut from "../components/SignOut";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import Isi from "../components/Isi";
import { Color, Border } from "../GlobalStyles";

const ProfilePc = () => {
  return (
    <View style={styles.profilePc}>
      <Profil />
      <Image
        style={[styles.buttonNavigationIcon, styles.profilePcChildLayout]}
        resizeMode="cover"
        source={require("../assets/button-navigation1.png")}
      />
      <Image
        style={styles.opsiButtonIcon}
        resizeMode="cover"
        source={require("../assets/opsi-button.png")}
      />
      <Feature
        fingerprint1={require("../assets/fingerprint-11.png")}
        email1={require("../assets/email-11.png")}
      />
      <SignOut />
      <SystemDarkStatusBarD
        dimensionCode={require("../assets/cap.png")}
        dimensionCodeText={require("../assets/wifi.png")}
        dimensionCodeValue={require("../assets/cellular-connection.png")}
      />
      <View style={styles.systemDarkHomeIndicator}>
        <View style={[styles.homeIndicator, styles.homeIndicatorBg]} />
      </View>
      <View style={[styles.profilePcChild, styles.homeIndicatorBg]} />
      <Isi />
    </View>
  );
};

const styles = StyleSheet.create({
  profilePcChildLayout: {
    width: 414,
    left: 0,
  },
  homeIndicatorBg: {
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  buttonNavigationIcon: {
    top: 774,
    height: 122,
    position: "absolute",
  },
  opsiButtonIcon: {
    top: 115,
    left: 365,
    width: 6,
    height: 23,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
  },
  systemDarkHomeIndicator: {
    right: 0,
    bottom: 0,
    height: 37,
    left: 0,
    position: "absolute",
  },
  profilePcChild: {
    top: 0,
    width: 414,
    left: 0,
    height: 896,
  },
  profilePc: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 896,
  },
});

export default ProfilePc;
