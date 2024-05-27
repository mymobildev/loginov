import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const KotakEntah = memo(() => {
  return (
    <View style={styles.kotakEntah}>
      <View style={[styles.kotakEntahChild, styles.kotakLayout]} />
      <Text style={styles.text}>$ 20</Text>
      <View style={[styles.kotakEntahItem, styles.kotakLayout]} />
      <Text style={[styles.text1, styles.textTypo]}>$ 50</Text>
      <View style={[styles.kotakEntahInner, styles.kotakLayout]} />
      <Text style={[styles.text2, styles.textTypo]}>$ 100</Text>
      <View style={[styles.rectangleView, styles.kotakLayout]} />
      <Text style={[styles.text3, styles.textTypo]}>$ 200</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  kotakLayout: {
    width: 75,
    backgroundColor: Color.colorMediumseagreen_100,
    borderRadius: Border.br_3xs,
    top: 0,
    height: 75,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    top: 20,
    position: "absolute",
  },
  kotakEntahChild: {
    left: 0,
  },
  text: {
    left: 12,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    top: 20,
    position: "absolute",
  },
  kotakEntahItem: {
    left: 90,
  },
  text1: {
    left: 102,
  },
  kotakEntahInner: {
    left: 180,
  },
  text2: {
    left: 188,
  },
  rectangleView: {
    left: 270,
  },
  text3: {
    left: 275,
  },
  kotakEntah: {
    top: 380,
    left: 35,
    width: 345,
    height: 75,
    position: "absolute",
  },
});

export default KotakEntah;
