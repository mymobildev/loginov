import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import KotakEntah from "../components/KotakEntah";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import Scroll1 from "../components/Scroll1";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Transfer = () => {
  return (
    <View style={styles.transfer}>
      <View style={styles.groupParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-4.png")}
        />
        <View style={[styles.dol, styles.amountLayout]}>
          <Text style={[styles.text, styles.textFlexBox]}>
            <Text style={styles.textTypo}>$</Text>
            <Text style={styles.text2Typo}> 20.00</Text>
          </Text>
          <Text style={[styles.totalBalance, styles.text5Typo]}>
            Total Balance $ 155.00
          </Text>
        </View>
      </View>
      <View style={styles.back}>
        <Text style={[styles.transfer1, styles.continueTypo]}>Transfer</Text>
        <Image
          style={[styles.arrowLeftIcon, styles.targetChildLayout]}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
      </View>
      <View style={[styles.amount, styles.amountLayout]}>
        <Text style={[styles.amount1, styles.text3Typo]}>Amount</Text>
        <Text style={[styles.text3, styles.text3Typo]}>20.00</Text>
      </View>
      <View style={[styles.amount2, styles.amountLayout]}>
        <Text style={[styles.amount1, styles.text3Typo]}>Money History</Text>
        <Text style={[styles.text3, styles.text3Typo]}>20.00</Text>
      </View>
      <KotakEntah />
      <View style={styles.ukuran}>
        <Image
          style={[styles.ukuranChild, styles.ukuranPosition]}
          resizeMode="cover"
          source={require("../assets/vector-6.png")}
        />
        <Image
          style={[styles.ukuranItem, styles.ukuranPosition]}
          resizeMode="cover"
          source={require("../assets/vector-7.png")}
        />
        <View style={[styles.target, styles.targetPosition]}>
          <Image
            style={[styles.targetChild, styles.targetChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-19.png")}
          />
          <View style={[styles.targetItem, styles.targetPosition]} />
          <Text style={[styles.text5, styles.text5Typo]}>20</Text>
        </View>
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
      <Scroll1 />
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amountLayout: {
    height: 68,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    top: 0,
  },
  text5Typo: {
    fontSize: FontSize.size_xs,
    left: 6,
    textAlign: "left",
    color: Color.colorWhite,
    letterSpacing: 0,
    position: "absolute",
  },
  continueTypo: {
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    position: "absolute",
  },
  targetChildLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  text3Typo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  ukuranPosition: {
    top: 34,
    left: 0,
    maxHeight: "100%",
    position: "absolute",
  },
  targetPosition: {
    width: 26,
    top: 0,
    position: "absolute",
  },
  buttonLayout: {
    height: 50,
    width: 354,
    position: "absolute",
  },
  frameChild: {
    height: "144.75%",
    width: "127.29%",
    top: "-25%",
    right: "-13.73%",
    bottom: "-19.75%",
    left: "-13.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
  },
  text2Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text: {
    fontSize: FontSize.size_17xl,
    color: Color.colorWhite,
    letterSpacing: 0,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  totalBalance: {
    top: 54,
    fontFamily: FontFamily.robotoRegular,
  },
  dol: {
    top: 26,
    left: 114,
    width: 127,
  },
  groupParent: {
    top: 132,
    height: 120,
    width: 354,
    borderRadius: Border.br_xl,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  transfer1: {
    textAlign: "left",
    top: 0,
    left: 30,
  },
  arrowLeftIcon: {
    top: 4,
    left: 0,
    overflow: "hidden",
  },
  back: {
    top: 75,
    width: 106,
    height: 27,
    left: 30,
    position: "absolute",
  },
  amount1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
  },
  text3: {
    top: 47,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
  },
  amount: {
    top: 282,
    width: 72,
    left: 30,
  },
  amount2: {
    top: 559,
    width: 125,
    left: 30,
  },
  ukuranChild: {
    width: 354,
  },
  ukuranItem: {
    width: 25,
  },
  targetChild: {
    top: 24,
    left: 3,
  },
  targetItem: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumseagreen_100,
    height: 14,
    left: 0,
  },
  text5: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    top: 0,
  },
  target: {
    left: 12,
    height: 44,
  },
  ukuran: {
    top: 485,
    height: 44,
    width: 354,
    left: 30,
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
  buttonChild: {
    backgroundColor: Color.colorMediumseagreen_300,
    left: 0,
    top: 0,
    borderRadius: Border.br_xl,
  },
  continue: {
    top: 12,
    left: 135,
    textAlign: "center",
  },
  button: {
    top: 755,
    left: 30,
  },
  transfer: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Transfer;
