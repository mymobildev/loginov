import React, { useMemo, memo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

export type LeftType = {
  rectangle75?: ImageSourcePropType;
  lancelot?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  propLeft?: number | string;
  propBackgroundColor?: string;
  propLeft1?: number | string;
  propLeft2?: number | string;
  propLeft3?: number | string;
  propColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Left = memo(
  ({
    rectangle75,
    lancelot,
    prop,
    prop1,
    propLeft,
    propBackgroundColor,
    propLeft1,
    propLeft2,
    propLeft3,
    propColor,
  }: LeftType) => {
    const leftStyle = useMemo(() => {
      return {
        ...getStyleValue("left", propLeft),
      };
    }, [propLeft]);

    const rectangleView1Style = useMemo(() => {
      return {
        ...getStyleValue("backgroundColor", propBackgroundColor),
      };
    }, [propBackgroundColor]);

    const lancelotStyle = useMemo(() => {
      return {
        ...getStyleValue("left", propLeft1),
      };
    }, [propLeft1]);

    const text1Style = useMemo(() => {
      return {
        ...getStyleValue("left", propLeft2),
      };
    }, [propLeft2]);

    const text2Style = useMemo(() => {
      return {
        ...getStyleValue("left", propLeft3),
        ...getStyleValue("color", propColor),
      };
    }, [propLeft3, propColor]);

    return (
      <View style={[styles.left, styles.leftLayout, leftStyle]}>
        <View
          style={[styles.leftChild, styles.childPosition, rectangleView1Style]}
        />
        <Image
          style={styles.leftItem}
          resizeMode="cover"
          source={rectangle75}
        />
        <Text style={[styles.lancelot, styles.textFlexBox, lancelotStyle]}>
          {lancelot}
        </Text>
        <Text style={[styles.text, styles.textTypo, text1Style]}>{prop}</Text>
        <View style={[styles.tiud, styles.tiudLayout]}>
          <View style={[styles.tiudChild, styles.tiudLayout]} />
          <Text style={[styles.text1, styles.textFlexBox, text2Style]}>
            <Text style={styles.text2}>{`$ `}</Text>
            <Text style={styles.textTypo}>{prop1}</Text>
          </Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  leftLayout: {
    height: 207,
    width: 167,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  tiudLayout: {
    height: 26,
    width: 67,
    position: "absolute",
  },
  leftChild: {
    backgroundColor: Color.colorMediumseagreen_300,
    height: 207,
    width: 167,
    position: "absolute",
  },
  leftItem: {
    top: 17,
    left: 59,
    borderRadius: Border.br_3xs,
    width: 50,
    height: 50,
    position: "absolute",
  },
  lancelot: {
    top: 87,
    left: 57,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
  },
  text: {
    top: 108,
    left: 23,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
    color: Color.colorBlack,
  },
  tiudChild: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  text2: {
    fontFamily: FontFamily.robotoRegular,
  },
  text1: {
    top: 3,
    left: 12,
    color: Color.colorMediumseagreen_100,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  tiud: {
    top: 155,
    left: 50,
  },
  left: {
    top: 565,
    left: 30,
  },
});

export default Left;
