import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Profil from "../components/Profil";
import Feature from "../components/Feature";
import SignOut from "../components/SignOut";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { Border, Color } from "../GlobalStyles";

const Account = () => {
  return (
    <View style={styles.account}>
      <Profil />
      <Image
        style={[
          styles.buttonNavigationIcon,
          styles.buttonNavigationIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/button-navigation1.png")}
      />
      <Image
        style={styles.opsiButtonIcon}
        resizeMode="cover"
        source={require("../assets/opsi-button.png")}
      />
      <Feature
        fingerprint1={require("../assets/fingerprint-1.png")}
        email1={require("../assets/email-1.png")}
        padlock1IconHeight={286}
        chevronRightIconTop={51}
        chevronRightIconTop1={102}
        aguskurn14w4ngmailcomTop={163}
        duitIconTop={214}
        chevronRightIconTop2={265}
      />
      <SignOut propTop={605} />
      <SystemDarkStatusBarD
        dimensionCode={require("../assets/cap.png")}
        dimensionCodeText={require("../assets/wifi.png")}
        dimensionCodeValue={require("../assets/cellular-connection.png")}
        propColor="#000"
        propBorderColor="#000"
        propBackgroundColor="#000"
      />
      <View
        style={[
          styles.systemDarkHomeIndicator,
          styles.buttonNavigationIconPosition,
        ]}
      >
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonNavigationIconPosition: {
    left: 0,
    position: "absolute",
  },
  buttonNavigationIcon: {
    top: 774,
    width: 414,
    height: 122,
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
  account: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Account;
