import React, { memo } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ContainerBox = memo(() => {
  return (
    <View style={styles.balanceMoreInner}>
      <View style={styles.groupWrapper}>
        <View style={[styles.group, styles.groupPosition]}>
          <View style={styles.group1}>
            <View style={[styles.group, styles.groupPosition]}>
              <View style={[styles.group, styles.groupPosition]}>
                <View style={[styles.group4, styles.groupPosition]}>
                  <Image
                    style={[styles.rectangleIcon, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/rectangle.png")}
                  />
                  <Image
                    style={[styles.rectangleIcon1, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/rectangle.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.group, styles.groupPosition]}>
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group.png")}
            />
            <View style={styles.group6}>
              <View style={[styles.group7, styles.groupPosition]}>
                <Image
                  style={[styles.rectangleIcon2, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle1.png")}
                />
                <View style={[styles.group, styles.groupPosition]}>
                  <View style={[styles.group, styles.groupPosition]}>
                    <Text style={[styles.cash, styles.cashPosition]}>CASH</Text>
                    <Image
                      style={[styles.groupIcon, styles.groupIconLayout]}
                      resizeMode="cover"
                      source={require("../assets/image-11.png")}
                    />
                    <Image
                      style={[styles.upTo50Off, styles.groupIconLayout]}
                      resizeMode="cover"
                      source={require("../assets/up-to-50-off.png")}
                    />
                    <Text style={[styles.back, styles.cashPosition]}>BACK</Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.groupIcon1, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group1.png")}
              />
              <Image
                style={[styles.groupIcon2, styles.cashPosition]}
                resizeMode="cover"
                source={require("../assets/group2.png")}
              />
              <Image
                style={[styles.groupIcon3, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group3.png")}
              />
              <Image
                style={[styles.groupIcon4, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group4.png")}
              />
            </View>
            <Image
              style={[styles.groupIcon5, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group5.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  groupPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  cashPosition: {
    display: "none",
    position: "absolute",
  },
  rectangleIcon: {
    left: "50%",
    width: "50%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
  },
  rectangleIcon1: {
    right: "50%",
    width: "50%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  group4: {
    opacity: 0.6,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  group: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  group1: {
    height: "6.16%",
    width: "78.96%",
    top: "87.39%",
    right: "10.63%",
    bottom: "6.45%",
    left: "10.41%",
    position: "absolute",
  },
  groupIcon: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  rectangleIcon2: {
    height: "79.78%",
    width: "63.52%",
    top: "8.72%",
    right: "20.14%",
    bottom: "11.49%",
    left: "16.33%",
  },
  cash: {
    height: "36.74%",
    width: "69.79%",
    top: "17.03%",
    left: "20.27%",
    fontSize: FontSize.size_91xl,
    fontWeight: "900",
    fontFamily: FontFamily.montserratBlack,
    transform: [
      {
        rotate: "-3.7deg",
      },
    ],
    textAlign: "left",
    color: Color.colorWhite,
    display: "none",
  },
  upTo50Off: {
    height: "7.72%",
    width: "40.15%",
    top: "12.67%",
    right: "28.08%",
    bottom: "79.61%",
    left: "31.76%",
  },
  back: {
    height: "38.93%",
    width: "71.66%",
    top: "42.87%",
    left: "19.5%",
    fontSize: FontSize.size_97xl_2,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    transform: [
      {
        rotate: "-3.7deg",
      },
    ],
    textAlign: "left",
    color: Color.colorWhite,
    display: "none",
  },
  group7: {
    width: "48.94%",
    right: "23.67%",
    left: "27.39%",
    position: "absolute",
  },
  groupIcon1: {
    height: "62.5%",
    width: "77.54%",
    top: "15.27%",
    right: "10.17%",
    bottom: "22.23%",
    left: "12.29%",
  },
  groupIcon2: {
    top: "-2.43%",
    left: "17.03%",
    width: 0,
    height: 0,
  },
  groupIcon3: {
    height: "90.52%",
    top: "2.43%",
    bottom: "7.05%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupIcon4: {
    height: "87.16%",
    width: "59.37%",
    top: "4.78%",
    right: "20.98%",
    bottom: "8.05%",
    left: "19.65%",
  },
  group6: {
    height: "68.62%",
    width: "70.24%",
    top: "14.74%",
    right: "15.82%",
    bottom: "16.64%",
    left: "13.94%",
    position: "absolute",
  },
  groupIcon5: {
    height: "14.74%",
    width: "20.77%",
    top: "70.75%",
    right: "39.59%",
    bottom: "14.51%",
    left: "39.64%",
  },
  groupWrapper: {
    height: "144.75%",
    width: "127.29%",
    top: "-25%",
    right: "-13.73%",
    bottom: "-19.75%",
    left: "-13.56%",
    position: "absolute",
  },
  balanceMoreInner: {
    top: 132,
    left: 30,
    borderRadius: Border.br_xl,
    width: 354,
    height: 120,
    overflow: "hidden",
    position: "absolute",
  },
});

export default ContainerBox;
