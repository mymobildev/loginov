import React, { useMemo, memo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type SystemDarkStatusBarDType = {
  dimensionCode?: ImageSourcePropType;
  dimensionCodeText?: ImageSourcePropType;
  dimensionCodeValue?: ImageSourcePropType;

  /** Style props */
  propColor?: string;
  propBorderColor?: string;
  propBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SystemDarkStatusBarD = memo(
  ({
    dimensionCode,
    dimensionCodeText,
    dimensionCodeValue,
    propColor,
    propBorderColor,
    propBackgroundColor,
  }: SystemDarkStatusBarDType) => {
    const timeStyle = useMemo(() => {
      return {
        ...getStyleValue("color", propColor),
      };
    }, [propColor]);

    const borderStyle = useMemo(() => {
      return {
        ...getStyleValue("borderColor", propBorderColor),
      };
    }, [propBorderColor]);

    const capacityStyle = useMemo(() => {
      return {
        ...getStyleValue("backgroundColor", propBackgroundColor),
      };
    }, [propBackgroundColor]);

    return (
      <View style={styles.systemDarkStatusBarD}>
        <Text style={[styles.time, styles.timePosition, timeStyle]}>9:41</Text>
        <View style={[styles.battery, styles.timePosition]}>
          <View style={[styles.border, styles.timePosition, borderStyle]} />
          <Image
            style={[styles.capIcon, styles.timePosition]}
            resizeMode="cover"
            source={dimensionCode}
          />
          <View style={[styles.capacity, styles.timePosition, capacityStyle]} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={dimensionCodeText}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={dimensionCodeValue}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    width: 54,
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    marginTop: -1.95,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
  },
  capacity: {
    marginTop: -3.65,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorBlack,
    width: 18,
    height: 7,
  },
  battery: {
    marginTop: -4.2,
    right: 14,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  systemDarkStatusBarD: {
    top: 0,
    left: 0,
    height: 49,
    right: 0,
    position: "absolute",
  },
});

export default SystemDarkStatusBarD;
