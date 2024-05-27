import React, { memo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Kpad = memo(() => {
  return (
    <View style={[styles.kpad, styles.kpadLayout]}>
      <View style={[styles.kpadChild, styles.kpadLayout]} />
      <View style={[styles.hehe, styles.heheLayout]}>
        <View style={[styles.button, styles.heheLayout]}>
          <View style={[styles.buttonChild, styles.buttonLayout]} />
          <View style={[styles.buttonItem, styles.buttonLayout]} />
          <View style={[styles.buttonInner, styles.buttonLayout]} />
          <View style={[styles.rectangleView, styles.buttonChildLayout1]} />
          <View style={[styles.buttonChild1, styles.buttonChildLayout1]} />
          <View style={[styles.buttonChild2, styles.buttonChildLayout1]} />
          <View style={[styles.buttonChild3, styles.buttonChildLayout1]} />
          <View style={[styles.buttonChild4, styles.buttonChildLayout]} />
          <View style={[styles.buttonChild5, styles.buttonChildLayout]} />
          <View style={[styles.buttonChild6, styles.buttonChildLayout]} />
        </View>
        <View style={styles.number}>
          <Text style={[styles.text, styles.textTypo2]}>1</Text>
          <Text style={[styles.text1, styles.textTypo2]}>4</Text>
          <Text style={[styles.text2, styles.textTypo2]}>7</Text>
          <Text style={[styles.text3, styles.textTypo1]}>2</Text>
          <Text style={[styles.text4, styles.textTypo1]}>5</Text>
          <Text style={[styles.text5, styles.textTypo1]}>8</Text>
          <Text style={[styles.text6, styles.textTypo1]}>0</Text>
          <Text style={[styles.text7, styles.textTypo]}>3</Text>
          <Text style={[styles.text8, styles.textTypo]}>6</Text>
          <Text style={[styles.text9, styles.textTypo]}>9</Text>
        </View>
        <Image
          style={styles.deleteIcon}
          resizeMode="cover"
          source={require("../assets/delete.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  kpadLayout: {
    height: 361,
    width: 414,
    left: 0,
    position: "absolute",
  },
  heheLayout: {
    height: 250,
    width: 386,
    position: "absolute",
  },
  buttonLayout: {
    height: 54,
    width: 117,
    backgroundColor: Color.colorMediumseagreen_200,
    borderRadius: Border.br_11xl,
    left: 0,
    position: "absolute",
  },
  buttonChildLayout1: {
    width: 119,
    left: 134,
    height: 54,
    backgroundColor: Color.colorMediumseagreen_200,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  buttonChildLayout: {
    left: 270,
    height: 54,
    width: 117,
    backgroundColor: Color.colorMediumseagreen_200,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  textTypo2: {
    height: 35,
    width: 18,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_11xl,
    left: 0,
    position: "absolute",
  },
  textTypo1: {
    left: 133,
    height: 35,
    width: 18,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  textTypo: {
    left: 266,
    height: 35,
    width: 18,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  kpadChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen_100,
    top: 0,
  },
  buttonChild: {
    top: 0,
  },
  buttonItem: {
    top: 65,
  },
  buttonInner: {
    top: 131,
  },
  rectangleView: {
    top: 0,
  },
  buttonChild1: {
    top: 65,
  },
  buttonChild2: {
    top: 131,
  },
  buttonChild3: {
    top: 196,
  },
  buttonChild4: {
    top: 0,
  },
  buttonChild5: {
    top: 65,
  },
  buttonChild6: {
    top: 131,
  },
  button: {
    top: 0,
    left: 0,
    height: 250,
    width: 386,
  },
  text: {
    top: 0,
  },
  text1: {
    top: 65,
  },
  text2: {
    top: 130,
  },
  text3: {
    top: 0,
  },
  text4: {
    top: 65,
  },
  text5: {
    top: 130,
  },
  text6: {
    top: 195,
  },
  text7: {
    top: 0,
  },
  text8: {
    top: 65,
  },
  text9: {
    top: 130,
  },
  number: {
    top: 10,
    left: 51,
    width: 284,
    height: 230,
    position: "absolute",
  },
  deleteIcon: {
    top: 208,
    left: 311,
    width: 30,
    height: 30,
    overflow: "hidden",
    position: "absolute",
  },
  hehe: {
    top: 11,
    left: 14,
  },
  kpad: {
    top: 535,
  },
});

export default Kpad;
