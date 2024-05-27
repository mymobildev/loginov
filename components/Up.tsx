import React, { memo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

export type UpType = {
  bell?: ImageSourcePropType;
};

const Up = memo(({ bell }: UpType) => {
  return (
    <View style={styles.up}>
      <Text style={[styles.robetBinUdin, styles.helloPosition]}>
        Robet Bin Udin
      </Text>
      <Text style={[styles.hello, styles.helloPosition]}>Hello!</Text>
      <Image style={styles.bellIcon} resizeMode="cover" source={bell} />
    </View>
  );
});

const styles = StyleSheet.create({
  helloPosition: {
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  robetBinUdin: {
    top: 27,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  hello: {
    top: 0,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  bellIcon: {
    top: 9,
    left: 324,
    width: 30,
    height: 30,
    position: "absolute",
  },
  up: {
    top: 79,
    left: 30,
    width: 354,
    height: 48,
    position: "absolute",
  },
});

export default Up;
