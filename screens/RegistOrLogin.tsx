import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RegistOrLogin = () => {
  return (
    <View style={styles.registOrLogin}>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={styles.continue}>Continue</Text>
      </View>
      <View style={[styles.pass, styles.buttonLayout]}>
        <Text style={styles.password}>Password</Text>
        <Text style={[styles.enterNewPassword, styles.enterTypo]}>
          Enter New Password
        </Text>
        <Image
          style={[styles.passChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={styles.eyeIcon}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
      </View>
      <View style={[styles.pn, styles.buttonLayout]}>
        <Text style={styles.password}>Phone Number</Text>
        <Text style={[styles.id62, styles.id62Typo]}>ID +62</Text>
        <Text style={[styles.enterPhoneNumber, styles.pnChildPosition]}>
          Enter Phone Number
        </Text>
        <Image
          style={[styles.pnChild, styles.pnChildPosition]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Image
          style={[styles.pnItem, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Image
          style={styles.chevronDownIcon}
          contentFit="cover"
          source={require("../assets/chevrondown.png")}
        />
      </View>
      <View style={[styles.name, styles.buttonLayout]}>
        <Text style={styles.password}>Full Name</Text>
        <Text style={[styles.robetBinUdin, styles.id62Typo]}>
          Robet Bin Udin
        </Text>
        <Image
          style={[styles.passChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
      <Image
        style={styles.xmlid1378Icon}
        contentFit="cover"
        source={require("../assets/xmlid-1378.png")}
      />
      <View style={[styles.keyboard, styles.keyboardLayout]}>
        <View style={[styles.keyboardChild, styles.image1IconPosition]} />
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
      <View style={[styles.systemDarkStatusBarD, styles.buttonChildPosition]}>
        <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        <View style={[styles.battery, styles.timePosition]}>
          <View style={[styles.border, styles.timePosition]} />
          <Image
            style={[styles.capIcon, styles.timePosition]}
            contentFit="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={[styles.capacity, styles.timePosition]} />
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
      <View style={styles.systemDarkHomeIndicator}>
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
    top: 0,
    left: 0,
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
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  buttonChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    left: 0,
    height: 50,
    width: 354,
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
    left: 30,
    height: 50,
    position: "absolute",
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
    left: 30,
    height: 50,
    position: "absolute",
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
    height: 15,
    width: 15,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  pn: {
    top: 279,
    left: 30,
    height: 50,
    position: "absolute",
  },
  robetBinUdin: {
    left: 0,
  },
  name: {
    top: 209,
    left: 30,
    height: 50,
    position: "absolute",
  },
  xmlid1378Icon: {
    top: 79,
    left: 116,
    width: 181,
    height: 80,
    position: "absolute",
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
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    color: Color.colorWhite,
    top: "50%",
    textAlign: "center",
    letterSpacing: 0,
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
    width: 18,
    height: 7,
    backgroundColor: Color.colorWhite,
  },
  battery: {
    marginTop: -4.2,
    right: 14,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    height: 11,
    width: 15,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  systemDarkStatusBarD: {
    height: 49,
    right: 0,
    left: 0,
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
