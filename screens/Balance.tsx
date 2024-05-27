import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Orderan2 from "../components/Orderan2";
import Orderan1 from "../components/Orderan1";
import Orderan from "../components/Orderan";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Balance = () => {
  return (
    <View style={styles.balance}>
      <View style={[styles.balance1, styles.balanceLayout]}>
        <View style={[styles.balanceChild, styles.childPosition]} />
        <View style={styles.text}>
          <Text style={[styles.balance2, styles.text1Clr]}>Balance</Text>
          <Text style={[styles.text1, styles.text1Clr]}>$ 155.00</Text>
          <Image
            style={[styles.eyeIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/eye1.png")}
          />
        </View>
        <View style={[styles.mataUang, styles.mataLayout]}>
          <View style={[styles.mataUangChild, styles.mataLayout]} />
          <View style={[styles.usd, styles.usdLayout]}>
            <Text style={[styles.usd1, styles.usd1Typo]}>USD</Text>
            <Image
              style={[styles.chevronDownIcon, styles.usdLayout]}
              resizeMode="cover"
              source={require("../assets/chevrondown.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.signOut, styles.signLayout]}>
        <View style={[styles.signOutChild, styles.signLayout]} />
        <Text style={styles.topUp}>Top Up</Text>
      </View>
      <View style={[styles.back, styles.backPosition]}>
        <Text style={[styles.balance3, styles.balance3Typo]}>Balance</Text>
        <Image
          style={[styles.arrowLeftIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
      </View>
      <View style={[styles.money, styles.backPosition]}>
        <Text style={[styles.moneyHistory, styles.balance3Typo]}>
          Money History
        </Text>
        <Text style={[styles.viewAll, styles.usd1Typo]}>View All</Text>
      </View>
      <View style={styles.isi}>
        <Orderan2 agustus2021="17 Agustus 2021" />
        <Image
          style={[styles.image2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Orderan1 />
        <Orderan />
        <Orderan2 agustus2021="16 Agustus 2021" propTop={210} />
        <Image
          style={[styles.image5Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Orderan2 agustus2021="15 Agustus 2021" propTop={280} />
        <Image
          style={[styles.image6Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
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
  balanceLayout: {
    height: 120,
    width: 354,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  text1Clr: {
    color: Color.colorBlack,
    left: 0,
  },
  iconLayout1: {
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  mataLayout: {
    width: 54,
    height: 20,
    position: "absolute",
  },
  usdLayout: {
    height: 15,
    position: "absolute",
  },
  usd1Typo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    position: "absolute",
  },
  signLayout: {
    height: 50,
    width: 354,
    position: "absolute",
  },
  backPosition: {
    height: 27,
    left: 30,
    position: "absolute",
  },
  balance3Typo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 67,
    left: 137,
    height: 50,
    position: "absolute",
  },
  balanceChild: {
    backgroundColor: Color.colorWhitesmoke,
    height: 120,
    width: 354,
    position: "absolute",
  },
  balance2: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorBlack,
    position: "absolute",
    fontSize: FontSize.size_sm,
    top: 0,
  },
  text1: {
    top: 21,
    fontSize: FontSize.size_5xl,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.colorBlack,
    position: "absolute",
  },
  eyeIcon: {
    top: 25,
    left: 105,
  },
  text: {
    top: 36,
    left: 35,
    width: 125,
    height: 49,
    position: "absolute",
  },
  mataUangChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumseagreen_100,
    left: 0,
    top: 0,
  },
  usd1: {
    top: 1,
    left: 20,
    color: Color.colorWhite,
    textAlign: "left",
  },
  chevronDownIcon: {
    width: 15,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  usd: {
    top: 3,
    left: 6,
    width: 43,
  },
  mataUang: {
    top: 61,
    left: 272,
  },
  balance1: {
    top: 132,
    left: 30,
  },
  signOutChild: {
    backgroundColor: Color.colorMediumseagreen_300,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  topUp: {
    top: 15,
    left: 153,
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  signOut: {
    top: 699,
    left: 30,
  },
  balance3: {
    color: Color.colorMediumseagreen_100,
    left: 30,
  },
  arrowLeftIcon: {
    top: 4,
    left: 0,
  },
  back: {
    top: 75,
    width: 104,
  },
  moneyHistory: {
    color: Color.colorBlack,
    left: 0,
  },
  viewAll: {
    top: 7,
    left: 313,
    color: Color.colorGray_200,
    textAlign: "center",
  },
  money: {
    top: 282,
    width: 354,
    height: 27,
  },
  image2Icon: {
    top: 0,
  },
  image5Icon: {
    top: 210,
  },
  image6Icon: {
    top: 280,
  },
  isi: {
    top: 339,
    left: 52,
    width: 332,
    height: 330,
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
  balance: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Balance;
