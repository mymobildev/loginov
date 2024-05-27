import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export type Orderan2Type = {
  agustus2021?: string;

  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Orderan2 = memo(({ agustus2021, propTop }: Orderan2Type) => {
  const orderan1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.orderan1, styles.orderan1Position, orderan1Style]}>
      <Text style={[styles.agustus2021, styles.textFlexBox]}>
        {agustus2021}
      </Text>
      <View style={[styles.orderan1Child, styles.orderan1Position]} />
      <View style={styles.name}>
        <Text style={[styles.mcdonalds, styles.textFlexBox]}>McDonald’s</Text>
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
  orderan1Position: {
    height: 50,
    top: 0,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
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
  orderan1Child: {
    left: 145,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    width: 50,
    height: 50,
    top: 0,
  },
  mcdonalds: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
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
    width: 70,
    height: 37,
    position: "absolute",
  },
  chevronRightIcon: {
    left: 312,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  orderan1: {
    width: 332,
    left: 0,
    height: 50,
    top: 0,
  },
});

export default Orderan2;
