import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FG = memo(() => {
  return (
    <View style={styles.fg}>
      <Text style={[styles.valorant, styles.lolTypo]}>Valorant</Text>
      <Text style={[styles.lol, styles.lolTypo]}>LoL</Text>
      <Text style={[styles.lifeAfter, styles.lolTypo]}>Life After</Text>
      <Text style={[styles.getrich, styles.lolTypo]}>GetRich</Text>
      <Text style={styles.flashGame}>Flash Game</Text>
      <View style={styles.kotakEntah}>
        <Image
          style={[styles.kotakEntahChild, styles.kotakLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-622.png")}
        />
        <Image
          style={[styles.kotakEntahItem, styles.kotakLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-632.png")}
        />
        <Image
          style={[styles.kotakEntahInner, styles.kotakLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-642.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.kotakLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-652.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  lolTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    top: 127,
    position: "absolute",
  },
  kotakLayout: {
    width: 75,
    borderRadius: Border.br_3xs,
    height: 75,
    top: 0,
    position: "absolute",
  },
  valorant: {
    left: 17,
  },
  lol: {
    left: 121,
  },
  lifeAfter: {
    left: 194,
  },
  getrich: {
    left: 289,
  },
  flashGame: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    left: 0,
    top: 0,
    color: Color.colorBlack,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  kotakEntahChild: {
    left: 0,
  },
  kotakEntahItem: {
    left: 90,
  },
  kotakEntahInner: {
    left: 180,
  },
  rectangleIcon: {
    left: 270,
  },
  kotakEntah: {
    top: 47,
    left: 5,
    width: 345,
    height: 75,
    position: "absolute",
  },
  fg: {
    top: 663,
    left: 30,
    width: 350,
    height: 143,
    position: "absolute",
  },
});

export default FG;
