import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Profil = memo(() => {
  return (
    <View style={styles.profil}>
      <View style={styles.poster}>
        <View style={[styles.posterChild, styles.posterPosition]} />
        <Image
          style={[styles.posterItem, styles.posterPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-371.png")}
        />
      </View>
      <Image
        style={styles.profilChild}
        resizeMode="cover"
        source={require("../assets/rectangle-51.png")}
      />
      <View style={styles.text}>
        <Text style={[styles.agusSetiawan, styles.usdPosition]}>
          Agus Setiawan
        </Text>
        <Text style={[styles.usd, styles.usdPosition]}>$ 977.00 (USD)</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  posterPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    width: 354,
    position: "absolute",
  },
  usdPosition: {
    color: Color.colorWhite,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    left: 0,
    position: "absolute",
  },
  posterChild: {
    backgroundColor: Color.colorMediumseagreen_100,
    height: 120,
  },
  posterItem: {
    height: 92,
  },
  poster: {
    left: 0,
    top: 0,
    height: 120,
    width: 354,
    position: "absolute",
  },
  profilChild: {
    top: 30,
    left: 33,
    borderRadius: Border.br_3xs,
    width: 60,
    height: 60,
    position: "absolute",
  },
  agusSetiawan: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    top: 0,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  usd: {
    top: 32,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
  },
  text: {
    top: 34,
    left: 110,
    width: 130,
    height: 53,
    position: "absolute",
  },
  profil: {
    top: 99,
    left: 30,
    height: 120,
    width: 354,
    position: "absolute",
  },
});

export default Profil;
