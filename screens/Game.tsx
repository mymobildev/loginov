import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Game = () => {
  return (
    <View style={styles.game}>
      <View style={styles.poster}>
        <Image
          style={styles.posterChild}
          contentFit="cover"
          source={require("../assets/group-41.png")}
        />
        <View style={styles.dol}>
          <Text style={styles.text}>50%</Text>
          <Text style={[styles.discount, styles.game1Typo]}>DISCOUNT</Text>
        </View>
        <Image
          style={styles.posterItem}
          contentFit="cover"
          source={require("../assets/rectangle-69.png")}
        />
      </View>
      <View style={styles.back}>
        <Text style={[styles.game1, styles.game1Typo]}>Game</Text>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrowleft.png")}
        />
      </View>
      <View style={[styles.pop, styles.fgPosition]}>
        <Text style={[styles.popularGame, styles.gameTypo]}>Popular Game</Text>
        <View style={[styles.kotakEntah, styles.kotakLayout1]}>
          <Image
            style={[styles.kotakEntahChild, styles.kotakLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-62.png")}
          />
          <Image
            style={[styles.kotakEntahItem, styles.kotakLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-63.png")}
          />
          <Image
            style={[styles.kotakEntahInner, styles.kotakLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-64.png")}
          />
          <Image
            style={[styles.rectangleIcon, styles.kotakLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-65.png")}
          />
        </View>
        <Text style={[styles.aov, styles.mobileFlexBox]}>AOV</Text>
        <Text style={[styles.toramOnline, styles.mobileFlexBox]}>{`Toram
Online`}</Text>
        <Text style={[styles.blackDesert, styles.mobileFlexBox]}>{`Black
Desert`}</Text>
        <Text style={[styles.genshinImpact, styles.mobileFlexBox]}>{`Genshin
Impact`}</Text>
        <View style={[styles.text1, styles.lolPosition]}>
          <Text style={[styles.codMobile, styles.mobileFlexBox]}>
            CoD Mobile
          </Text>
          <Text style={[styles.mlbb, styles.mobileFlexBox]}>MLBB</Text>
          <Text style={[styles.pubgMobile, styles.mobileFlexBox]}>
            PUBG Mobile
          </Text>
          <Text style={[styles.smc, styles.mobileFlexBox]}>SMC</Text>
        </View>
        <View style={[styles.kotakEntah1, styles.kotakLayout1]}>
          <Image
            style={[styles.kotakEntahChild, styles.kotakLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-621.png")}
          />
          <Image
            style={[styles.kotakEntahItem, styles.kotakLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-631.png")}
          />
          <Image
            style={[styles.kotakEntahInner, styles.kotakLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-641.png")}
          />
          <Image
            style={[styles.rectangleIcon, styles.kotakLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-651.png")}
          />
        </View>
      </View>
      <View style={[styles.fg, styles.fgPosition]}>
        <Text style={[styles.valorant, styles.lolPosition]}>Valorant</Text>
        <Text style={[styles.lol, styles.lolPosition]}>LoL</Text>
        <Text style={[styles.lifeAfter, styles.lolPosition]}>Life After</Text>
        <Text style={[styles.getrich, styles.lolPosition]}>GetRich</Text>
        <Text style={[styles.popularGame, styles.gameTypo]}>Flash Game</Text>
        <View style={[styles.kotakEntah, styles.kotakLayout1]}>
          <Image
            style={[styles.kotakEntahChild, styles.kotakLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-622.png")}
          />
          <Image
            style={[styles.kotakEntahItem, styles.kotakLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-632.png")}
          />
          <Image
            style={[styles.kotakEntahInner, styles.kotakLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-642.png")}
          />
          <Image
            style={[styles.rectangleIcon, styles.kotakLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-652.png")}
          />
        </View>
      </View>
      <View style={styles.up}>
        <Text style={[styles.chooseYourGame, styles.gameTypo]}>
          Choose Your Game
        </Text>
        <View style={[styles.searchB, styles.searchLayout]}>
          <View style={[styles.searchBChild, styles.searchLayout]} />
          <Image
            style={styles.search2Icon}
            contentFit="cover"
            source={require("../assets/search-2.png")}
          />
        </View>
      </View>
      <View style={styles.systemDarkStatusBarD}>
        <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        <View style={[styles.battery, styles.timePosition]}>
          <View style={[styles.border, styles.timePosition]} />
          <Image
            style={[styles.capIcon, styles.timePosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.timePosition]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
      </View>
      <View style={styles.systemDarkHomeIndicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  game1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: 0,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  fgPosition: {
    width: 350,
    left: 30,
    position: "absolute",
  },
  gameTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  kotakLayout1: {
    width: 345,
    left: 5,
    height: 75,
    position: "absolute",
  },
  kotakLayout: {
    width: 75,
    borderRadius: Border.br_3xs,
    top: 0,
    height: 75,
    position: "absolute",
  },
  mobileFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  lolPosition: {
    top: 127,
    position: "absolute",
  },
  searchLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
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
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
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
    color: Color.colorMediumseagreen_100,
    fontSize: FontSize.size_lg,
    left: 30,
  },
  arrowLeftIcon: {
    top: 4,
    height: 20,
    width: 20,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  back: {
    top: 75,
    width: 86,
    height: 27,
    left: 30,
    position: "absolute",
  },
  popularGame: {
    fontSize: FontSize.size_lg,
  },
  kotakEntahChild: {
    left: 0,
  },
  kotakEntahItem: {
    left: 90,
  },
  kotakEntahInner: {
    left: 180,
  },
  rectangleIcon: {
    left: 270,
  },
  kotakEntah: {
    top: 47,
  },
  aov: {
    left: 29,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontWeight: "500",
    top: 243,
    position: "absolute",
  },
  toramOnline: {
    left: 114,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontWeight: "500",
    top: 243,
    position: "absolute",
  },
  blackDesert: {
    left: 202,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontWeight: "500",
    top: 243,
    position: "absolute",
  },
  genshinImpact: {
    left: 287,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontWeight: "500",
    top: 243,
    position: "absolute",
  },
  codMobile: {
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  mlbb: {
    left: 107,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  pubgMobile: {
    left: 174,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  smc: {
    left: 290,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  text1: {
    left: 8,
    width: 320,
    height: 16,
  },
  kotakEntah1: {
    top: 163,
  },
  pop: {
    top: 358,
    height: 275,
  },
  valorant: {
    left: 17,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  lol: {
    left: 121,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  lifeAfter: {
    left: 194,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  getrich: {
    left: 289,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  fg: {
    top: 663,
    height: 143,
  },
  chooseYourGame: {
    fontSize: FontSize.size_5xl,
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
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
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
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
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
    height: 49,
    right: 0,
    left: 0,
    top: 0,
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
    bottom: 0,
    height: 37,
    right: 0,
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
