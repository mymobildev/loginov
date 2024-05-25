import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const TfMetode = () => {
  return (
    <View style={styles.tfMetode}>
      <View style={[styles.wtw, styles.wtwChildLayout]}>
        <View style={[styles.wtwChild, styles.childPosition1]} />
        <View style={[styles.text, styles.textLayout]}>
          <Text style={[styles.transferYourMoney, styles.transferFlexBox]}>
            Transfer your money
          </Text>
          <Text style={[styles.walletToWallet, styles.walletTypo]}>
            Wallet to Wallet
          </Text>
        </View>
        <Image
          style={styles.walletIcon}
          contentFit="cover"
          source={require("../assets/wallet.png")}
        />
      </View>
      <View style={[styles.wtb, styles.wtwChildLayout]}>
        <View style={[styles.wtbChild, styles.childPosition]} />
        <View style={[styles.text1, styles.textLayout]}>
          <Text style={[styles.transferYourMoney, styles.transferFlexBox]}>
            Transfer your money
          </Text>
          <Text style={[styles.walletToWallet, styles.walletTypo]}>
            Wallet to Bank
          </Text>
        </View>
        <Image
          style={styles.walletIcon}
          contentFit="cover"
          source={require("../assets/wallet1.png")}
        />
      </View>
      <View style={styles.back}>
        <Text style={[styles.transfer, styles.text5Typo]}>Transfer</Text>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrowleft.png")}
        />
      </View>
      <View style={[styles.left, styles.leftChildLayout]}>
        <View style={[styles.leftChild, styles.leftChildLayout]} />
        <Image
          style={styles.leftItem}
          contentFit="cover"
          source={require("../assets/rectangle-75.png")}
        />
        <Text style={[styles.lancelot, styles.textFlexBox]}>Lancelot</Text>
        <Text style={[styles.text2, styles.textTypo]}>****13784892</Text>
        <View style={[styles.tiud, styles.tiudLayout]}>
          <View style={[styles.tiudChild, styles.tiudLayout]} />
          <Text style={[styles.text3, styles.textPosition]}>
            <Text style={styles.text4}>{`$ `}</Text>
            <Text style={styles.text5Typo}>12.22</Text>
          </Text>
        </View>
      </View>
      <View style={[styles.right, styles.leftChildLayout]}>
        <View style={[styles.rightChild, styles.leftChildLayout]} />
        <Image
          style={styles.leftItem}
          contentFit="cover"
          source={require("../assets/rectangle-751.png")}
        />
        <Text style={[styles.odette, styles.textFlexBox]}>Odette</Text>
        <Text style={[styles.text6, styles.textTypo]}>****13784891</Text>
        <View style={[styles.tiud, styles.tiudLayout]}>
          <View style={[styles.tiudChild, styles.tiudLayout]} />
          <Text style={[styles.text7, styles.textPosition]}>
            <Text style={styles.text4}>{`$ `}</Text>
            <Text style={styles.text5Typo}>12.23</Text>
          </Text>
        </View>
      </View>
      <Text style={[styles.recentTransaction, styles.textFlexBox]}>
        Recent Transaction
      </Text>
      <View style={[styles.systemDarkStatusBarD, styles.textLayout]}>
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
      <View style={styles.up}>
        <Text style={[styles.chooseYourGame, styles.walletTypo]}>
          Choose Your Game
        </Text>
        <Image
          style={[styles.searchBIcon, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/search-b.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wtwChildLayout: {
    height: 120,
    width: 354,
    position: "absolute",
  },
  childPosition1: {
    backgroundColor: Color.colorTomato_200,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  textLayout: {
    height: 49,
    position: "absolute",
  },
  transferFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    top: 0,
  },
  walletTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorMediumseagreen_300,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  text5Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  leftChildLayout: {
    height: 207,
    width: 167,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  textTypo: {
    top: 108,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  tiudLayout: {
    height: 26,
    width: 67,
    position: "absolute",
  },
  textPosition: {
    top: 3,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  wtwChild: {
    height: 120,
    width: 354,
    position: "absolute",
  },
  transferYourMoney: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  walletToWallet: {
    top: 21,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
  },
  text: {
    width: 165,
    left: 125,
    top: 35,
    height: 49,
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
    left: 30,
  },
  wtbChild: {
    height: 120,
    width: 354,
    position: "absolute",
  },
  text1: {
    width: 153,
    left: 125,
    top: 35,
    height: 49,
  },
  wtb: {
    top: 358,
    left: 30,
  },
  transfer: {
    color: Color.colorMediumseagreen_100,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    left: 30,
    position: "absolute",
    textAlign: "left",
    letterSpacing: 0,
    top: 0,
  },
  arrowLeftIcon: {
    top: 4,
    width: 20,
    height: 20,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  back: {
    top: 75,
    width: 106,
    height: 27,
    left: 30,
    position: "absolute",
  },
  leftChild: {
    backgroundColor: Color.colorMediumseagreen_300,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  leftItem: {
    top: 17,
    left: 59,
    borderRadius: Border.br_3xs,
    width: 50,
    height: 50,
    position: "absolute",
  },
  lancelot: {
    left: 57,
    fontFamily: FontFamily.robotoRegular,
    top: 87,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  text2: {
    left: 23,
  },
  tiudChild: {
    borderRadius: Border.br_xl,
    height: 26,
    width: 67,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text4: {
    fontFamily: FontFamily.robotoRegular,
  },
  text3: {
    left: 12,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorMediumseagreen_100,
    fontSize: FontSize.size_sm,
  },
  tiud: {
    top: 155,
    left: 50,
  },
  left: {
    top: 565,
    width: 167,
    left: 30,
  },
  rightChild: {
    backgroundColor: Color.colorTomato_200,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  odette: {
    left: 63,
    fontFamily: FontFamily.robotoRegular,
    top: 87,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  text6: {
    left: 25,
  },
  text7: {
    left: 11,
    color: Color.colorTomato_100,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  right: {
    left: 217,
    top: 565,
    width: 167,
  },
  recentTransaction: {
    top: 508,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: 30,
    position: "absolute",
    color: Color.colorBlack,
  },
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorBlack,
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
    right: 0,
    left: 0,
    top: 0,
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
  chooseYourGame: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
  },
  searchBIcon: {
    left: 322,
    width: 30,
    height: 30,
  },
  up: {
    top: 132,
    left: 32,
    width: 352,
    height: 36,
    position: "absolute",
  },
  tfMetode: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default TfMetode;
