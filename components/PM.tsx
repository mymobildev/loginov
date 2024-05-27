import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PM = memo(() => {
  return (
    <View style={[styles.pm, styles.pmLayout]}>
      <View style={[styles.pmChild, styles.pmLayout]} />
      <View style={[styles.pnParent, styles.pnLayout]}>
        <View style={[styles.pn, styles.pnLayout]}>
          <View style={styles.phonePosition}>
            <View style={[styles.phoneChild, styles.phonePosition]} />
            <Image
              style={styles.phone1Icon}
              resizeMode="cover"
              source={require("../assets/phone-12.png")}
            />
          </View>
          <Text style={styles.phoneNumber}>Phone Number</Text>
        </View>
        <View style={[styles.bq, styles.pnLayout]}>
          <Image
            style={styles.phonePosition}
            resizeMode="cover"
            source={require("../assets/barcode.png")}
          />
          <Text style={styles.phoneNumber}>Barcode</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  pmLayout: {
    height: 211,
    width: 414,
    left: 0,
    position: "absolute",
  },
  pnLayout: {
    height: 40,
    position: "absolute",
  },
  phonePosition: {
    width: 40,
    height: 40,
    top: 0,
    left: 0,
    position: "absolute",
  },
  pmChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  phoneChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
  },
  phone1Icon: {
    top: 5,
    left: 5,
    width: 30,
    height: 30,
    overflow: "hidden",
    position: "absolute",
  },
  phoneNumber: {
    top: 9,
    left: 50,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  pn: {
    width: 152,
    top: 0,
    left: 0,
    height: 40,
  },
  bq: {
    left: 172,
    width: 108,
    top: 0,
  },
  pnParent: {
    top: 76,
    left: 45,
    width: 280,
  },
  pm: {
    top: 633,
  },
});

export default PM;
