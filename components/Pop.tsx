import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Pop = memo(() => {
  return (
    <View style={styles.pop}>
      <Text style={styles.popularGame}>Popular Game</Text>
      <View style={[styles.kotakEntah, styles.kotakLayout1]}>
        <Image
          style={[styles.kotakEntahChild, styles.kotakLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-62.png")}
        />
        <Image
          style={[styles.kotakEntahItem, styles.kotakLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-63.png")}
        />
        <Image
          style={[styles.kotakEntahInner, styles.kotakLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-64.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.kotakLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-65.png")}
        />
      </View>
      <Text style={[styles.aov, styles.mobileTypo]}>AOV</Text>
      <Text style={[styles.toramOnline, styles.mobileTypo]}>{`Toram
Online`}</Text>
      <Text style={[styles.blackDesert, styles.mobileTypo]}>{`Black
Desert`}</Text>
      <Text style={[styles.genshinImpact, styles.mobileTypo]}>{`Genshin
Impact`}</Text>
      <View style={styles.text}>
        <Text style={[styles.codMobile, styles.mobileTypo]}>CoD Mobile</Text>
        <Text style={[styles.mlbb, styles.mobileTypo]}>MLBB</Text>
        <Text style={[styles.pubgMobile, styles.mobileTypo]}>PUBG Mobile</Text>
        <Text style={[styles.smc, styles.mobileTypo]}>SMC</Text>
      </View>
      <View style={[styles.kotakEntah1, styles.kotakLayout1]}>
        <Image
          style={[styles.kotakEntahChild, styles.kotakLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-621.png")}
        />
        <Image
          style={[styles.kotakEntahItem, styles.kotakLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-631.png")}
        />
        <Image
          style={[styles.kotakEntahInner, styles.kotakLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-641.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.kotakLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-651.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  kotakLayout1: {
    height: 75,
    width: 345,
    left: 5,
    position: "absolute",
  },
  kotakLayout: {
    width: 75,
    borderRadius: Border.br_3xs,
    height: 75,
    top: 0,
    position: "absolute",
  },
  mobileTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  popularGame: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "500",
    letterSpacing: 0,
    left: 0,
    top: 0,
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
  },
  aov: {
    left: 29,
    top: 243,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
  },
  toramOnline: {
    left: 114,
    top: 243,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
  },
  blackDesert: {
    left: 202,
    top: 243,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
  },
  genshinImpact: {
    left: 287,
    top: 243,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
  },
  codMobile: {
    left: 0,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    top: 0,
  },
  mlbb: {
    left: 107,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    top: 0,
  },
  pubgMobile: {
    left: 174,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    top: 0,
  },
  smc: {
    left: 290,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    top: 0,
  },
  text: {
    top: 127,
    left: 8,
    width: 320,
    height: 16,
    position: "absolute",
  },
  kotakEntah1: {
    top: 163,
  },
  pop: {
    top: 358,
    left: 30,
    width: 350,
    height: 275,
    position: "absolute",
  },
});

export default Pop;
