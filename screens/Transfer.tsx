import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Transfer = () => {
  return (
    <View style={styles.transfer}>
      <View style={styles.groupParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
        <View style={[styles.dol, styles.amountLayout]}>
          <Text style={[styles.text, styles.textFlexBox1]}>
            <Text style={styles.textTypo1}>$</Text>
            <Text style={styles.text2Typo}> 20.00</Text>
          </Text>
          <Text style={[styles.totalBalance, styles.text9Typo]}>
            Total Balance $ 155.00
          </Text>
        </View>
      </View>
      <View style={styles.back}>
        <Text style={[styles.transfer1, styles.continueTypo]}>Transfer</Text>
        <Image
          style={[styles.arrowLeftIcon, styles.targetChildLayout]}
          contentFit="cover"
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
      <View style={styles.kotakEntah}>
        <View style={[styles.kotakEntahChild, styles.kotakLayout]} />
        <Text style={[styles.text5, styles.textTypo]}>$ 20</Text>
        <View style={[styles.kotakEntahItem, styles.kotakLayout]} />
        <Text style={[styles.text6, styles.textFlexBox]}>$ 50</Text>
        <View style={[styles.kotakEntahInner, styles.kotakLayout]} />
        <Text style={[styles.text7, styles.textFlexBox]}>$ 100</Text>
        <View style={[styles.rectangleView, styles.kotakLayout]} />
        <Text style={[styles.text8, styles.textFlexBox]}>$ 200</Text>
      </View>
      <View style={styles.ukuran}>
        <Image
          style={[styles.ukuranChild, styles.ukuranPosition]}
          contentFit="cover"
          source={require("../assets/vector-6.png")}
        />
        <Image
          style={[styles.ukuranItem, styles.ukuranPosition]}
          contentFit="cover"
          source={require("../assets/vector-7.png")}
        />
        <View style={[styles.target, styles.targetPosition]}>
          <Image
            style={[styles.targetChild, styles.targetChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-19.png")}
          />
          <View style={[styles.targetItem, styles.targetPosition]} />
          <Text style={[styles.text9, styles.text9Typo]}>20</Text>
        </View>
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
      <View style={styles.scroll}>
        <Image
          style={[styles.visaIcon, styles.gpayIconLayout]}
          contentFit="cover"
          source={require("../assets/visa.png")}
        />
        <View style={[styles.gpay, styles.gpayIconLayout]}>
          <View style={[styles.gpayChild, styles.gpayIconLayout]} />
          <View style={[styles.gpay1, styles.gpay1Layout]}>
            <Image
              style={[styles.search1Icon, styles.gpay1Layout]}
              contentFit="cover"
              source={require("../assets/search-1.png")}
            />
            <Text style={[styles.pay, styles.payTypo]}>Pay</Text>
          </View>
        </View>
        <Image
          style={[styles.paypalIcon, styles.gpayIconLayout]}
          contentFit="cover"
          source={require("../assets/paypal.png")}
        />
        <View style={[styles.apay, styles.gpayIconLayout]}>
          <View style={[styles.gpayChild, styles.gpayIconLayout]} />
          <View style={[styles.gpay1, styles.gpay1Layout]}>
            <Image
              style={[styles.search1Icon, styles.gpay1Layout]}
              contentFit="cover"
              source={require("../assets/apple-1.png")}
            />
            <Text style={[styles.pay1, styles.payTypo]}>Pay</Text>
          </View>
        </View>
      </View>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.continue, styles.textFlexBox]}>Continue</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amountLayout: {
    height: 68,
    position: "absolute",
  },
  textFlexBox1: {
    textAlign: "left",
    letterSpacing: 0,
  },
  text9Typo: {
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
    position: "absolute",
  },
  targetChildLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  text3Typo: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  kotakLayout: {
    width: 75,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumseagreen_100,
    height: 75,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_5xl,
    top: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
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
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  gpayIconLayout: {
    width: 100,
    height: 58,
    top: 0,
    position: "absolute",
  },
  gpay1Layout: {
    height: 30,
    position: "absolute",
  },
  payTypo: {
    top: 2,
    left: 35,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    letterSpacing: 0,
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
  textTypo1: {
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
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
    top: 0,
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
    letterSpacing: 0,
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
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
  },
  text3: {
    top: 47,
    color: Color.colorBlack,
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
  kotakEntahChild: {
    left: 0,
  },
  text5: {
    left: 12,
    textAlign: "left",
    letterSpacing: 0,
  },
  kotakEntahItem: {
    left: 90,
  },
  text6: {
    left: 102,
    fontSize: FontSize.size_5xl,
    top: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    position: "absolute",
  },
  kotakEntahInner: {
    left: 180,
  },
  text7: {
    left: 188,
    fontSize: FontSize.size_5xl,
    top: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleView: {
    left: 270,
  },
  text8: {
    left: 275,
    fontSize: FontSize.size_5xl,
    top: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    position: "absolute",
  },
  kotakEntah: {
    top: 380,
    width: 345,
    height: 75,
    left: 35,
    position: "absolute",
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
    height: 14,
    backgroundColor: Color.colorMediumseagreen_100,
    width: 26,
    left: 0,
  },
  text9: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    top: 0,
  },
  target: {
    height: 44,
    left: 12,
  },
  ukuran: {
    top: 485,
    height: 44,
    width: 354,
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
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorBlack,
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
    left: 0,
    top: 0,
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
    bottom: 0,
    height: 37,
    right: 0,
    left: 0,
    position: "absolute",
  },
  visaIcon: {
    left: 0,
  },
  gpayChild: {
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
    borderRadius: Border.br_xl,
  },
  search1Icon: {
    width: 30,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  pay: {
    color: "#518ef8",
  },
  gpay1: {
    top: 14,
    left: 15,
    width: 70,
  },
  gpay: {
    left: 125,
  },
  paypalIcon: {
    left: 250,
  },
  pay1: {
    color: Color.colorBlack,
  },
  apay: {
    left: 375,
  },
  scroll: {
    top: 657,
    width: 475,
    height: 58,
    left: 30,
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
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
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
