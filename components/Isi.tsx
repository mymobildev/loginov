import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Isi = memo(() => {
  return (
    <View style={styles.isi}>
      <View style={styles.isiChild} />
      <View style={styles.choose}>
        <View style={[styles.ini, styles.iniLayout1]}>
          <LinearGradient
            style={[styles.iniChild, styles.iniLayout]}
            locations={[0, 1]}
            colors={["rgba(192, 192, 192, 0.1)", "#c0c0c0"]}
            useAngle={true}
            angle={180}
          />
          <Image
            style={[styles.photoCameraInterfaceSymbolIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/photocamerainterfacesymbolforbutton-1.png")}
          />
          <Image
            style={styles.iniLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-80.png")}
          />
        </View>
        <View style={[styles.itu, styles.iniLayout1]}>
          <LinearGradient
            style={[styles.iniChild, styles.iniLayout]}
            locations={[0, 1]}
            colors={["rgba(192, 192, 192, 0.1)", "#c0c0c0"]}
            useAngle={true}
            angle={180}
          />
          <Image
            style={styles.iniLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-801.png")}
          />
          <Image
            style={[styles.photoCameraInterfaceSymbolIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/insertpictureicon-1.png")}
          />
        </View>
      </View>
      <Text style={styles.choosePhoto}>Choose Photo</Text>
      <Image
        style={[styles.xIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/x.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  iniLayout1: {
    width: 50,
    height: 50,
    top: 0,
    position: "absolute",
  },
  iniLayout: {
    borderRadius: Border.br_8xs,
    width: 50,
    height: 50,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  isiChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    height: 172,
    width: 232,
    position: "absolute",
  },
  iniChild: {
    backgroundColor: "transparent",
    display: "none",
  },
  photoCameraInterfaceSymbolIcon: {
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    display: "none",
  },
  ini: {
    left: 0,
  },
  itu: {
    left: 68,
  },
  choose: {
    top: 76,
    left: 57,
    width: 118,
    height: 50,
    position: "absolute",
  },
  choosePhoto: {
    top: 32,
    left: 54,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  xIcon: {
    top: 13,
    left: 197,
    width: 20,
    height: 20,
  },
  isi: {
    top: 301,
    left: 91,
    height: 172,
    width: 232,
    position: "absolute",
  },
});

export default Isi;
