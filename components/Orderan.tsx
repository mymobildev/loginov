import React, { memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Orderan = memo(() => {
  return (
    <View style={styles.orderan3}>
      <Text style={[styles.agustus2021, styles.textFlexBox]}>
        17 Agustus 2021
      </Text>
      <View style={[styles.orderan3Child, styles.creditQuotaPosition]} />
      <Image
        style={styles.phone1Icon}
        resizeMode="cover"
        source={require("../assets/phone-12.png")}
      />
      <View style={styles.name}>
        <Text
          style={[styles.creditQuota, styles.creditQuotaPosition]}
        >{`Credit & Quota`}</Text>
        <Text style={[styles.text, styles.textPosition]}>$ 34.00</Text>
      </View>
      <Image
        style={[styles.chevronRightIcon, styles.textPosition]}
        resizeMode="cover"
        source={require("../assets/chevronright.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
  },
  creditQuotaPosition: {
    top: 0,
    position: "absolute",
  },
  textPosition: {
    top: 16,
    position: "absolute",
  },
  agustus2021: {
    top: 17,
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  orderan3Child: {
    left: 145,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    width: 50,
    height: 50,
  },
  phone1Icon: {
    top: 10,
    left: 155,
    width: 30,
    height: 30,
    overflow: "hidden",
    position: "absolute",
  },
  creditQuota: {
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
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  name: {
    top: 7,
    left: 207,
    width: 87,
    height: 37,
    position: "absolute",
  },
  chevronRightIcon: {
    left: 312,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  orderan3: {
    top: 140,
    width: 332,
    height: 50,
    left: 0,
    position: "absolute",
  },
});

export default Orderan;
