import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";

const XMLID1378Icon = memo(() => {
  return (
    <Image
      style={styles.xmlid1378Icon}
      resizeMode="cover"
      source={require("../assets/xmlid-1378.png")}
    />
  );
});

const styles = StyleSheet.create({
  xmlid1378Icon: {
    position: "absolute",
    top: 79,
    left: 116,
    width: 181,
    height: 80,
  },
});

export default XMLID1378Icon;
