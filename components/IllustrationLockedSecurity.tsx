import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";

const IllustrationLockedSecurity = memo(() => {
  return (
    <Image
      style={styles.illustrationlockedSecurity}
      resizeMode="cover"
      source={require("../assets/illustrationlocked--security.png")}
    />
  );
});

const styles = StyleSheet.create({
  illustrationlockedSecurity: {
    position: "absolute",
    height: "82.87%",
    width: "100%",
    top: "17.13%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
});

export default IllustrationLockedSecurity;
