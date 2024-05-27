import React, { useMemo, memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type SignOutType = {
  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SignOut = memo(({ propTop }: SignOutType) => {
  const signOutStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.signOut, styles.signLayout, signOutStyle]}>
      <View style={[styles.signOutChild, styles.signLayout]} />
      <Image
        style={styles.signOutItem}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <Text style={styles.signOut1}>Sign Out</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  signLayout: {
    height: 50,
    width: 354,
    position: "absolute",
  },
  signOutChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen_300,
  },
  signOutItem: {
    top: 5,
    left: 8,
    width: 40,
    height: 40,
    position: "absolute",
  },
  signOut1: {
    top: 15,
    left: 275,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMediumseagreen_100,
    textAlign: "center",
    position: "absolute",
  },
  signOut: {
    top: 555,
    left: 30,
  },
});

export default SignOut;
