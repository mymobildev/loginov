import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import XMLID1378Icon from "../components/XMLID1378Icon";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RegistOrLogin = () => {
  return (
    <View style={styles.registOrLogin}>
      <View style={[styles.button, styles.pnLayout]}>
        <View style={styles.buttonChild} />
        <Text style={styles.continue}>Continue</Text>
      </View>
      <View style={[styles.pass, styles.pnLayout]}>
        <Text style={styles.password}>Password</Text>
        <Text style={[styles.enterNewPassword, styles.enterTypo]}>
          Enter New Password
        </Text>
        <Image
          style={[styles.passChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={styles.eyeIcon}
          resizeMode="cover"
          source={require("../assets/eye.png")}
        />
      </View>
      <View style={[styles.pn, styles.pnLayout]}>
        <Text style={styles.password}>Phone Number</Text>
        <Text style={[styles.id62, styles.id62Typo]}>ID +62</Text>
        <Text style={[styles.enterPhoneNumber, styles.pnChildPosition]}>
          Enter Phone Number
        </Text>
        <Image
          style={[styles.pnChild, styles.pnChildPosition]}
          resizeMode="cover"
          source={require("../assets/vector-11.png")}
        />
        <Image
          style={[styles.pnItem, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/vector-2.png")}
        />
        <Image
          style={styles.chevronDownIcon}
          resizeMode="cover"
          source={require("../assets/chevrondown.png")}
        />
      </View>
      <View style={[styles.name, styles.pnLayout]}>
        <Text style={styles.password}>Full Name</Text>
        <Text style={[styles.robetBinUdin, styles.id62Typo]}>
          Robet Bin Udin
        </Text>
        <Image
          style={[styles.passChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
      <XMLID1378Icon />
      <View style={[styles.keyboard, styles.keyboardLayout]}>
        <View style={[styles.keyboardChild, styles.image1IconPosition]} />
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  pnLayout: {
    height: 50,
    left: 30,
    width: 354,
    position: "absolute",
  },
  enterTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 24,
    textAlign: "left",
    letterSpacing: 0,
  },
  childLayout: {
    maxHeight: "100%",
    top: 50,
  },
  id62Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 24,
    textAlign: "left",
    color: Color.colorWhite,
    letterSpacing: 0,
    position: "absolute",
  },
  pnChildPosition: {
    left: 105,
    position: "absolute",
  },
  keyboardLayout: {
    height: 311,
    width: 414,
    left: 0,
  },
  image1IconPosition: {
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  buttonChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    height: 50,
    width: 354,
    position: "absolute",
  },
  continue: {
    top: 12,
    left: 135,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMediumseagreen_100,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  button: {
    top: 429,
  },
  password: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.colorWhite,
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  enterNewPassword: {
    left: 0,
    position: "absolute",
  },
  passChild: {
    left: 0,
    width: 354,
    top: 50,
    position: "absolute",
  },
  eyeIcon: {
    left: 334,
    width: 20,
    height: 20,
    top: 24,
    position: "absolute",
    overflow: "hidden",
  },
  pass: {
    top: 349,
  },
  id62: {
    left: 19,
  },
  enterPhoneNumber: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 24,
    textAlign: "left",
    letterSpacing: 0,
  },
  pnChild: {
    width: 249,
    maxHeight: "100%",
    top: 50,
  },
  pnItem: {
    width: 62,
    left: 0,
    position: "absolute",
  },
  chevronDownIcon: {
    top: 27,
    width: 15,
    height: 15,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  pn: {
    top: 279,
  },
  robetBinUdin: {
    left: 0,
  },
  name: {
    top: 209,
  },
  keyboardChild: {
    backgroundColor: "#d1d6db",
    height: 311,
    width: 414,
    left: 0,
  },
  image1Icon: {
    left: 8,
    width: 398,
    height: 267,
  },
  keyboard: {
    top: 585,
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
  registOrLogin: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorMediumseagreen_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default RegistOrLogin;
