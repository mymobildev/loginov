import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Component from "../components/Component";
import Poster from "../components/Poster";
import Up from "../components/Up";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Text style={[styles.feature, styles.featureFlexBox]}>Feature</Text>
      <View style={[styles.promo, styles.promoLayout]}>
        <Component />
        <View style={[styles.view, styles.viewLayout]}>
          <Image
            style={[styles.child, styles.viewLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-47.png")}
          />
          <View style={styles.item} />
          <View
            style={[styles.bonusDiscount70Parent, styles.bonusParentPosition]}
          >
            <Text style={styles.bonusDiscount70}>Bonus Discount 70%</Text>
            <Text
              style={[styles.makeAnyPayment, styles.viewAllTypo]}
            >{`make any payment, at least
 $599 and get the cashback`}</Text>
          </View>
        </View>
        <View style={[styles.view1, styles.viewShadowBox]}>
          <Image
            style={[styles.child, styles.viewLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-46.png")}
          />
          <View style={styles.item} />
          <View
            style={[styles.bonusCashback40Parent, styles.bonusParentPosition]}
          >
            <Text style={styles.bonusDiscount70}>Bonus Cashback 40%</Text>
            <Text
              style={[styles.makeAnyPayment, styles.viewAllTypo]}
            >{`make any payment, at least
 $100 and get the cashback`}</Text>
          </View>
        </View>
        <View style={[styles.view2, styles.viewShadowBox]}>
          <Image
            style={[styles.child, styles.viewLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-47.png")}
          />
          <View style={styles.item} />
          <View
            style={[styles.bonusDiscount30Parent, styles.bonusParentPosition]}
          >
            <Text style={styles.bonusDiscount70}>Bonus Discount 30%</Text>
            <Text
              style={[styles.makeAnyPayment, styles.viewAllTypo]}
            >{`make any payment, at least
 $200 and get the cashback`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.title3, styles.title3Layout]}>
        <Text style={[styles.specialPromo, styles.featureFlexBox]}>
          Special Promo
        </Text>
        <Text style={[styles.viewAll, styles.viewAllTypo]}>View all</Text>
      </View>
      <Poster />
      <View style={[styles.menuButton, styles.atasLayout]}>
        <View style={[styles.atas, styles.atasLayout]}>
          <View style={[styles.wallet, styles.topupPosition]}>
            <View style={[styles.walletChild, styles.childLayout]} />
            <Image
              style={[styles.wallet1Icon, styles.title3Layout]}
              resizeMode="cover"
              source={require("../assets/wallet-1.png")}
            />
            <Text style={[styles.wallet1, styles.topUpTypo]}>Wallet</Text>
          </View>
          <View style={[styles.internet, styles.internetPosition]}>
            <View style={[styles.internetChild, styles.childLayout]} />
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={[styles.internet1, styles.topUpTypo]}>Internet</Text>
          </View>
          <View style={[styles.topup, styles.topupPosition]}>
            <View style={[styles.topupChild, styles.childLayout]} />
            <Image
              style={[styles.rotatingArrowToTheLeft1Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/rotatingarrowtotheleft-1.png")}
            />
            <Text style={[styles.topUp, styles.topUpTypo]}>Top Up</Text>
          </View>
          <View style={[styles.transfer, styles.game1Position]}>
            <View style={[styles.transferChild, styles.childLayout]} />
            <Image
              style={[styles.send1Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/send-1.png")}
            />
            <Text style={[styles.tranfer, styles.topUpTypo]}>Tranfer</Text>
          </View>
        </View>
        <View style={[styles.bawah, styles.atasLayout]}>
          <View style={[styles.text, styles.textLayout]}>
            <Text style={[styles.more, styles.moreTypo]}>More</Text>
            <Text style={[styles.mobilePrepaid, styles.textLayout]}>{`Mobile
Prepaid`}</Text>
            <Text style={[styles.bills, styles.moreTypo]}>Bills</Text>
            <Text style={[styles.game, styles.moreTypo]}>Game</Text>
          </View>
          <View style={[styles.bills1, styles.topupPosition]}>
            <View style={[styles.transferChild, styles.childLayout]} />
            <Image
              style={[styles.invoice1Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/invoice-1.png")}
            />
          </View>
          <View style={[styles.game1, styles.game1Position]}>
            <View style={[styles.internetChild, styles.childLayout]} />
            <Image
              style={[styles.wallet1Icon, styles.title3Layout]}
              resizeMode="cover"
              source={require("../assets/gamepad-1.png")}
            />
          </View>
          <View style={[styles.mobilePrepaid1, styles.internetPosition]}>
            <View style={[styles.walletChild, styles.childLayout]} />
            <Image
              style={[styles.wallet1Icon, styles.title3Layout]}
              resizeMode="cover"
              source={require("../assets/phone-1.png")}
            />
          </View>
          <Image
            style={[styles.moreIcon, styles.topupPosition]}
            resizeMode="cover"
            source={require("../assets/more.png")}
          />
        </View>
      </View>
      <Up bell={require("../assets/bell.png")} />
      <Image
        style={styles.buttonNavigationIcon}
        resizeMode="cover"
        source={require("../assets/button-navigation.png")}
      />
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
  featureFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  promoLayout: {
    width: 354,
    left: 30,
  },
  viewLayout: {
    height: 167,
    width: 167,
    top: 0,
    position: "absolute",
  },
  bonusParentPosition: {
    justifyContent: "center",
    alignItems: "center",
    height: 49,
    top: "50%",
    marginTop: 19.5,
    left: "50%",
    position: "absolute",
  },
  viewAllTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  viewShadowBox: {
    top: 187,
    height: 167,
    width: 167,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    position: "absolute",
  },
  title3Layout: {
    height: 27,
    position: "absolute",
  },
  atasLayout: {
    width: 333,
    position: "absolute",
  },
  topupPosition: {
    width: 68,
    top: 0,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    height: 68,
    width: 68,
    left: 0,
    top: 0,
    position: "absolute",
  },
  topUpTypo: {
    fontFamily: FontFamily.robotoMedium,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  internetPosition: {
    left: 176,
    width: 68,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "39.88%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: 15,
    position: "absolute",
  },
  game1Position: {
    left: 88,
    width: 68,
    top: 0,
    position: "absolute",
  },
  textLayout: {
    height: 22,
    position: "absolute",
  },
  moreTypo: {
    height: 11,
    fontFamily: FontFamily.robotoMedium,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 0,
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  feature: {
    top: 293,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    letterSpacing: 0,
    left: 30,
  },
  child: {
    borderRadius: Border.br_xl,
    left: 0,
  },
  item: {
    top: 88,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 79,
    left: 0,
    width: 167,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  bonusDiscount70: {
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  makeAnyPayment: {
    textAlign: "center",
  },
  bonusDiscount70Parent: {
    marginLeft: -73,
    width: 147,
    justifyContent: "center",
    alignItems: "center",
    height: 49,
    top: "50%",
    marginTop: 19.5,
  },
  view: {
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    height: 167,
    left: 187,
  },
  bonusCashback40Parent: {
    marginLeft: -75.5,
    justifyContent: "center",
    alignItems: "center",
    height: 49,
    top: "50%",
    marginTop: 19.5,
  },
  view1: {
    left: 187,
    top: 187,
  },
  bonusDiscount30Parent: {
    marginLeft: -74.5,
    width: 147,
    justifyContent: "center",
    alignItems: "center",
    height: 49,
    top: "50%",
    marginTop: 19.5,
  },
  view2: {
    left: 0,
  },
  promo: {
    top: 644,
    height: 354,
    position: "absolute",
  },
  specialPromo: {
    left: 0,
    top: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    letterSpacing: 0,
  },
  viewAll: {
    top: 7,
    left: 314,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  title3: {
    top: 587,
    width: 354,
    left: 30,
  },
  walletChild: {
    backgroundColor: Color.colorTomato_200,
    height: 68,
  },
  wallet1Icon: {
    top: 21,
    left: 20,
    width: 27,
    overflow: "hidden",
  },
  wallet1: {
    left: 15,
    position: "absolute",
    top: 73,
  },
  wallet: {
    left: 265,
    width: 68,
    height: 89,
  },
  internetChild: {
    backgroundColor: Color.colorMediumseagreen_300,
    height: 68,
  },
  vectorIcon: {
    height: "30.67%",
    top: "23.56%",
    right: "30.65%",
    bottom: "45.77%",
    left: "29.47%",
  },
  internet1: {
    left: 11,
    top: 73,
    position: "absolute",
  },
  internet: {
    height: 89,
  },
  topupChild: {
    backgroundColor: Color.colorMediumorchid,
    height: 68,
  },
  rotatingArrowToTheLeft1Icon: {
    top: 15,
    width: 38,
    height: 38,
    overflow: "hidden",
  },
  topUp: {
    left: 13,
    top: 73,
    position: "absolute",
  },
  topup: {
    height: 89,
    left: 0,
  },
  transferChild: {
    backgroundColor: Color.colorOrange,
    height: 68,
  },
  send1Icon: {
    top: 14,
    width: 39,
    height: 39,
    overflow: "hidden",
  },
  tranfer: {
    left: 12,
    top: 73,
    position: "absolute",
  },
  transfer: {
    height: 89,
  },
  atas: {
    height: 89,
    left: 0,
    top: 0,
  },
  more: {
    left: 261,
    width: 32,
  },
  mobilePrepaid: {
    left: 165,
    width: 48,
    fontFamily: FontFamily.robotoMedium,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    letterSpacing: 0,
    top: 0,
  },
  bills: {
    width: 26,
    left: 0,
  },
  game: {
    left: 82,
    width: 36,
  },
  text: {
    left: 22,
    width: 293,
    top: 73,
  },
  invoice1Icon: {
    height: "39.88%",
    top: "30.5%",
    right: "29.47%",
    bottom: "29.62%",
    left: "30.65%",
  },
  bills1: {
    height: 68,
    left: 0,
  },
  game1: {
    height: 68,
  },
  mobilePrepaid1: {
    height: 68,
  },
  moreIcon: {
    height: 68,
    left: 265,
    width: 68,
  },
  bawah: {
    top: 107,
    height: 95,
    left: 0,
  },
  menuButton: {
    top: 340,
    left: 41,
    height: 202,
  },
  buttonNavigationIcon: {
    top: 774,
    width: 414,
    height: 122,
    left: 0,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  systemDarkHomeIndicator: {
    right: 0,
    bottom: 0,
    height: 37,
    left: 0,
    position: "absolute",
  },
  home: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Home;
