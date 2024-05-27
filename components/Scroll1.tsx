import React, { memo } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Scroll1 = memo(() => {
  return (
    <View style={styles.scroll}>
      <Image
        style={[styles.visaIcon, styles.gpayIconLayout]}
        resizeMode="cover"
        source={require("../assets/visa.png")}
      />
      <View style={[styles.gpay, styles.gpayIconLayout]}>
        <View style={[styles.gpayChild, styles.gpayIconLayout]} />
        <View style={[styles.gpay1, styles.gpay1Layout]}>
          <Image
            style={[styles.search1Icon, styles.gpay1Layout]}
            resizeMode="cover"
            source={require("../assets/search-1.png")}
          />
          <Text style={[styles.pay, styles.payTypo]}>Pay</Text>
        </View>
      </View>
      <Image
        style={[styles.paypalIcon, styles.gpayIconLayout]}
        resizeMode="cover"
        source={require("../assets/paypal.png")}
      />
      <View style={[styles.apay, styles.gpayIconLayout]}>
        <View style={[styles.gpayChild, styles.gpayIconLayout]} />
        <View style={[styles.gpay1, styles.gpay1Layout]}>
          <Image
            style={[styles.search1Icon, styles.gpay1Layout]}
            resizeMode="cover"
            source={require("../assets/apple-1.png")}
          />
          <Text style={[styles.pay1, styles.payTypo]}>Pay</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  gpayIconLayout: {
    width: 100,
    top: 0,
    height: 58,
    position: "absolute",
  },
  gpay1Layout: {
    height: 30,
    position: "absolute",
  },
  payTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    left: 35,
    top: 2,
    position: "absolute",
  },
  visaIcon: {
    left: 0,
  },
  gpayChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
  },
  search1Icon: {
    width: 30,
    overflow: "hidden",
    left: 0,
    top: 0,
    height: 30,
  },
  pay: {
    color: Color.colorDodgerblue,
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
    left: 30,
    width: 475,
    height: 58,
    position: "absolute",
  },
});

export default Scroll1;
