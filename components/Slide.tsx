import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import IllustrationFinancesIcon from "./IllustrationFinancesIcon";
import IllustrationLockedSecurity from "./IllustrationLockedSecurity";
import IllustrationECommerceIcon from "./IllustrationECommerceIcon";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Slide = memo(() => {
  return (
    <View style={styles.slide}>
      <Text style={styles.welcome}>Welcome</Text>
      <View style={[styles.last, styles.midPosition]}>
        <IllustrationFinancesIcon />
        <Text
          style={[styles.letsTrySewa, styles.letsTrySewaTypo]}
        >{`Let's try SEWA now!
And get the best solution`}</Text>
      </View>
      <View style={[styles.mid, styles.midPosition]}>
        <IllustrationLockedSecurity />
        <Text style={[styles.letsTrySewa, styles.letsTrySewaTypo]}>
          Easy and safe in saving money
        </Text>
      </View>
      <View style={[styles.beginning, styles.midPosition]}>
        <IllustrationECommerceIcon />
        <Text
          style={[styles.makeYourOnline, styles.letsTrySewaTypo]}
        >{`Make your online shopping
easy`}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  midPosition: {
    bottom: "0%",
    top: "16.97%",
    width: "100%",
    height: "83.03%",
    position: "absolute",
  },
  letsTrySewaTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  welcome: {
    left: 63,
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMediumseagreen_100,
    textAlign: "center",
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  letsTrySewa: {
    left: 69,
    width: 162,
    height: 32,
  },
  last: {
    right: "0%",
    left: "0%",
  },
  mid: {
    right: "119%",
    left: "-119%",
  },
  makeYourOnline: {
    left: 68,
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
    overflow: "hidden",
    position: "absolute",
  },
});

export default Slide;
