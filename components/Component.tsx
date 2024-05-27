import React, { useMemo, memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

export type ComponentType = {
  /** Style props */
  propColor?: string;
  propColor1?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component = memo(({ propColor, propColor1 }: ComponentType) => {
  const bonusCashback40Style = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const makeAnyPaymentStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  return (
    <View style={[styles.view, styles.viewPosition]}>
      <Image
        style={[styles.child, styles.viewPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-46.png")}
      />
      <View style={[styles.vectorParent, styles.frameChildLayout]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-461.png")}
        />
        <View style={styles.bonusCashback40Parent}>
          <Text style={[styles.bonusCashback40, bonusCashback40Style]}>
            Bonus Cashback $40
          </Text>
          <Text
            style={[styles.makeAnyPayment, makeAnyPaymentStyle]}
          >{`make any payment, at least
 $100 and get the cashback`}</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  viewPosition: {
    height: 167,
    width: 167,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameChildLayout: {
    height: 79,
    width: 167,
    left: 0,
    position: "absolute",
  },
  child: {
    borderRadius: Border.br_xl,
  },
  frameChild: {
    top: 0,
    height: 79,
  },
  bonusCashback40: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "center",
  },
  makeAnyPayment: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_200,
    textAlign: "center",
  },
  bonusCashback40Parent: {
    marginTop: -24.5,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  vectorParent: {
    top: 88,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    overflow: "hidden",
  },
  view: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
  },
});

export default Component;
