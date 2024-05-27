import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Poster = memo(() => {
  return (
    <View style={styles.poster}>
      <View style={[styles.posterChild, styles.posterPosition]} />
      <Image
        style={[styles.posterItem, styles.posterPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-37.png")}
      />
      <View style={[styles.pict, styles.pictLayout]}>
        <Image
          style={styles.registOrLogin1}
          resizeMode="cover"
          source={require("../assets/regist-or-login-1.png")}
        />
        <Image
          style={[styles.pngitem17474241Icon, styles.pictLayout]}
          resizeMode="cover"
          source={require("../assets/pngitem-1747424-1.png")}
        />
      </View>
      <View style={styles.text}>
        <Text style={[styles.goPremium, styles.premiumPosition]}>
          Go Premium
        </Text>
        <Text
          style={[styles.upgradeToPremium, styles.premiumPosition]}
        >{`Upgrade to premium,
get more profit now!`}</Text>
      </View>
      <View style={styles.hias}>
        <Text style={[styles.x, styles.xTypo]}>X</Text>
        <Text style={[styles.x1, styles.xTypo]}>X</Text>
        <Text style={[styles.o, styles.xTypo]}>o</Text>
        <Text style={[styles.o1, styles.xTypo]}>o</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  posterPosition: {
    borderRadius: Border.br_xl,
    top: 6,
    left: 0,
    width: 354,
    position: "absolute",
  },
  pictLayout: {
    width: 93,
    top: 0,
    height: 106,
    position: "absolute",
  },
  premiumPosition: {
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  xTypo: {
    fontFamily: FontFamily.comicNeueRegular,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
    position: "absolute",
  },
  posterChild: {
    backgroundColor: Color.colorMediumseagreen_100,
    height: 100,
  },
  posterItem: {
    height: 77,
  },
  registOrLogin1: {
    top: 2,
    left: 10,
    width: 38,
    height: 82,
    position: "absolute",
  },
  pngitem17474241Icon: {
    left: 0,
  },
  pict: {
    left: 238,
  },
  goPremium: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    top: 0,
  },
  upgradeToPremium: {
    top: 27,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
  },
  text: {
    top: 26,
    left: 26,
    width: 125,
    height: 59,
    position: "absolute",
  },
  x: {
    top: 5,
    left: 87,
    fontSize: FontSize.size_sm,
  },
  x1: {
    left: 4,
    fontSize: FontSize.size_9xs,
    top: 0,
  },
  o: {
    top: 55,
    fontSize: FontSize.size_5xl,
    left: 0,
  },
  o1: {
    top: 48,
    left: 97,
    fontSize: FontSize.size_4xs,
  },
  hias: {
    top: 16,
    left: 217,
    width: 102,
    height: 83,
    position: "absolute",
  },
  poster: {
    top: 157,
    left: 30,
    height: 106,
    width: 354,
    position: "absolute",
  },
});

export default Poster;
