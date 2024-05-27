import React, { memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Pilihan = memo(() => {
  return (
    <View style={styles.pilihan}>
      <Text style={[styles.topUpDetail, styles.textTypo]}>Top Up Detail</Text>
      <View style={styles.scroll}>
        <View style={[styles.visa, styles.visaLayout]}>
          <View style={[styles.visaChild, styles.childLayout]} />
          <View style={[styles.view, styles.viewLayout]}>
            <Text style={[styles.text, styles.textTypo]}>50</Text>
            <Image
              style={[styles.diamond1Icon, styles.viewLayout]}
              resizeMode="cover"
              source={require("../assets/diamond-1.png")}
            />
          </View>
        </View>
        <View style={[styles.gpay, styles.visaLayout]}>
          <View style={[styles.gpayChild, styles.childLayout]} />
          <View style={[styles.view1, styles.viewLayout]}>
            <Text style={[styles.text, styles.textTypo]}>100</Text>
            <Image
              style={[styles.diamond1Icon, styles.viewLayout]}
              resizeMode="cover"
              source={require("../assets/diamond-1.png")}
            />
          </View>
        </View>
        <View style={[styles.paypal, styles.visaLayout]}>
          <View style={[styles.gpayChild, styles.childLayout]} />
          <View style={[styles.view2, styles.viewLayout]}>
            <Text style={[styles.text, styles.textTypo]}>200</Text>
            <Image
              style={[styles.diamond1Icon, styles.viewLayout]}
              resizeMode="cover"
              source={require("../assets/diamond-1.png")}
            />
          </View>
        </View>
        <View style={[styles.apay, styles.visaLayout]}>
          <View style={[styles.gpayChild, styles.childLayout]} />
          <View style={[styles.view3, styles.viewLayout]}>
            <Text style={[styles.text, styles.textTypo]}>400</Text>
            <Image
              style={[styles.diamond1Icon, styles.viewLayout]}
              resizeMode="cover"
              source={require("../assets/diamond-1.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.userId, styles.text4Typo]}>User ID</Text>
      <Text style={[styles.diamond, styles.text4Typo]}>Diamond</Text>
      <Text style={[styles.text4, styles.text4Typo]}>6327688(7763)</Text>
      <Image
        style={styles.pilihanChild}
        resizeMode="cover"
        source={require("../assets/vector-10.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  visaLayout: {
    width: 100,
    height: 58,
    top: 0,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_xl,
    width: 100,
    height: 58,
    left: 0,
    top: 0,
    position: "absolute",
  },
  viewLayout: {
    height: 30,
    position: "absolute",
  },
  text4Typo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  topUpDetail: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    left: 0,
    top: 0,
  },
  visaChild: {
    backgroundColor: Color.colorMediumseagreen_300,
  },
  text: {
    top: 1,
    left: 35,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  diamond1Icon: {
    width: 30,
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  view: {
    left: 21,
    width: 59,
    top: 14,
    height: 30,
  },
  visa: {
    left: 0,
  },
  gpayChild: {
    backgroundColor: Color.colorWhitesmoke,
  },
  view1: {
    left: 18,
    width: 65,
    top: 14,
    height: 30,
  },
  gpay: {
    left: 125,
  },
  view2: {
    left: 16,
    width: 69,
    top: 14,
    height: 30,
  },
  paypal: {
    left: 250,
  },
  view3: {
    left: 15,
    width: 71,
    top: 14,
    height: 30,
  },
  apay: {
    left: 375,
  },
  scroll: {
    top: 148,
    height: 58,
    left: 0,
    width: 475,
    position: "absolute",
  },
  userId: {
    top: 47,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
  },
  diamond: {
    top: 112,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
  },
  text4: {
    top: 73,
    fontSize: FontSize.size_xs,
  },
  pilihanChild: {
    top: 92,
    maxHeight: "100%",
    width: 354,
    left: 0,
    position: "absolute",
  },
  pilihan: {
    top: 282,
    left: 30,
    height: 206,
    width: 475,
    position: "absolute",
  },
});

export default Pilihan;
