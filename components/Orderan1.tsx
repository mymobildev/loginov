import React, { memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Orderan1 = memo(() => {
  return (
    <View style={styles.orderan2}>
      <Text style={[styles.agustus2021, styles.gameFlexBox]}>
        17 Agustus 2021
      </Text>
      <View style={[styles.orderan2Child, styles.gamePosition]} />
      <View style={styles.name}>
        <Text style={[styles.game, styles.gamePosition]}>Game</Text>
        <Text style={[styles.text, styles.gameFlexBox]}>$ 10.00</Text>
      </View>
      <Image
        style={[styles.chevronRightIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/chevronright.png")}
      />
      <Image
        style={[styles.gamepad1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/gamepad-12.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  gameFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
  },
  gamePosition: {
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  agustus2021: {
    top: 17,
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  orderan2Child: {
    left: 145,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    width: 50,
    height: 50,
  },
  game: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
    top: 0,
    fontSize: FontSize.size_sm,
  },
  text: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    top: 16,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  name: {
    top: 7,
    left: 207,
    width: 59,
    height: 37,
    position: "absolute",
  },
  chevronRightIcon: {
    left: 312,
    width: 20,
    height: 20,
    top: 16,
  },
  gamepad1Icon: {
    top: 10,
    left: 155,
    width: 30,
    height: 30,
  },
  orderan2: {
    top: 70,
    width: 332,
    height: 50,
    left: 0,
    position: "absolute",
  },
});

export default Orderan1;
