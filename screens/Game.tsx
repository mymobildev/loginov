import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Pop from "../components/Pop";
import FG from "../components/FG";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Game = () => {
  return (
    <View style={styles.game}>
      <View style={styles.poster}>
        <Image
          style={styles.posterChild}
          resizeMode="cover"
          source={require("../assets/group-41.png")}
        />
        <View style={styles.dol}>
          <Text style={[styles.text, styles.textFlexBox]}>50%</Text>
          <Text style={[styles.discount, styles.game1Typo]}>DISCOUNT</Text>
        </View>
        <Image
          style={styles.posterItem}
          resizeMode="cover"
          source={require("../assets/rectangle-69.png")}
        />
      </View>
      <View style={styles.back}>
        <Text style={[styles.game1, styles.game1Typo]}>Game</Text>
        <Image
          style={[styles.arrowLeftIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
      </View>
      <Pop />
      <FG />
      <View style={styles.up}>
        <Text style={[styles.chooseYourGame, styles.discountTypo]}>
          Choose Your Game
        </Text>
        <View style={[styles.searchB, styles.searchLayout]}>
          <View style={[styles.searchBChild, styles.searchLayout]} />
          <Image
            style={[styles.search2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/search-2.png")}
          />
        </View>
      </View>
      <SystemDarkStatusBarD
        dimensionCode={require("../assets/cap.png")}
        dimensionCodeText={require("../assets/wifi.png")}
        dimensionCodeValue={require("../assets/cellular-connection.png")}
        propColor="#000"
        propBorderColor="#000"
        propBackgroundColor="#000"
      />
      <View style={styles.systemDarkHomeIndicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  game1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: 0,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  discountTypo: {
    fontSize: FontSize.size_5xl,
    left: 0,
  },
  searchLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  posterChild: {
    height: "144.75%",
    width: "127.29%",
    top: "-25%",
    right: "-13.73%",
    bottom: "-19.75%",
    left: "-13.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 21,
    left: 22,
    fontSize: FontSize.size_17xl,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: "#f1c40f",
  },
  discount: {
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    left: 0,
  },
  dol: {
    top: 25,
    left: 188,
    width: 124,
    height: 75,
    position: "absolute",
  },
  posterItem: {
    top: -9,
    left: 15,
    width: 152,
    height: 134,
    position: "absolute",
  },
  poster: {
    top: 198,
    borderRadius: Border.br_xl,
    width: 354,
    height: 120,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  game1: {
    fontSize: FontSize.size_lg,
    color: Color.colorMediumseagreen_100,
    left: 30,
  },
  arrowLeftIcon: {
    top: 4,
    left: 0,
  },
  back: {
    top: 75,
    width: 86,
    height: 27,
    left: 30,
    position: "absolute",
  },
  chooseYourGame: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    top: 0,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  searchBChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
    top: 0,
  },
  search2Icon: {
    top: 5,
    left: 5,
  },
  searchB: {
    top: 3,
    left: 322,
  },
  up: {
    top: 132,
    left: 32,
    width: 352,
    height: 36,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
    position: "absolute",
  },
  systemDarkHomeIndicator: {
    right: 0,
    bottom: 0,
    height: 37,
    left: 0,
    position: "absolute",
  },
  game: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Game;
