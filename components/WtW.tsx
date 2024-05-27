import React, { useMemo, memo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

export type WtWType = {
  walletToWallet?: string;
  wallet?: ImageSourcePropType;

  /** Style props */
  rectangleViewTop?: number | string;
  textBackgroundColor?: string;
  transferYourMoneyWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const WtW = memo(
  ({
    walletToWallet,
    wallet,
    rectangleViewTop,
    textBackgroundColor,
    transferYourMoneyWidth,
  }: WtWType) => {
    const wtWStyle = useMemo(() => {
      return {
        ...getStyleValue("top", rectangleViewTop),
      };
    }, [rectangleViewTop]);

    const rectangleViewStyle = useMemo(() => {
      return {
        ...getStyleValue("backgroundColor", textBackgroundColor),
      };
    }, [textBackgroundColor]);

    const textStyle = useMemo(() => {
      return {
        ...getStyleValue("width", transferYourMoneyWidth),
      };
    }, [transferYourMoneyWidth]);

    return (
      <View style={[styles.wtw, wtWStyle]}>
        <View style={[styles.wtwChild, rectangleViewStyle]} />
        <View style={[styles.text, textStyle]}>
          <Text style={[styles.transferYourMoney, styles.walletPosition]}>
            Transfer your money
          </Text>
          <Text style={[styles.walletToWallet, styles.walletPosition]}>
            {walletToWallet}
          </Text>
        </View>
        <Image style={styles.walletIcon} resizeMode="cover" source={wallet} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  walletPosition: {
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  wtwChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorTomato_200,
    left: 0,
    top: 0,
    height: 120,
    width: 354,
    position: "absolute",
  },
  transferYourMoney: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    top: 0,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  walletToWallet: {
    top: 21,
    fontSize: FontSize.size_5xl,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
  },
  text: {
    top: 35,
    left: 125,
    width: 165,
    height: 49,
    position: "absolute",
  },
  walletIcon: {
    top: 22,
    width: 75,
    height: 75,
    left: 30,
    position: "absolute",
  },
  wtw: {
    top: 218,
    height: 120,
    width: 354,
    left: 30,
    position: "absolute",
  },
});

export default WtW;
