import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Component from "../components/Component";
import Poster from "../components/Poster";
import Up from "../components/Up";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const PopUp = () => {
  return (
    <View style={[styles.popUp, styles.popUpBg]}>
      <Text style={[styles.feature, styles.featureFlexBox]}>Feature</Text>
      <View style={[styles.promo, styles.atasLayout]}>
        <Component propColor="#2ecc71" propColor1="#000" />
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
            <Text style={[styles.bonusDiscount70, styles.topUpSuccessTypo]}>
              Bonus Discount 70%
            </Text>
            <Text style={styles.makeAnyPayment}>{`make any payment, at least
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
            <Text style={[styles.bonusDiscount70, styles.topUpSuccessTypo]}>
              Bonus Cashback 40%
            </Text>
            <Text style={styles.makeAnyPayment}>{`make any payment, at least
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
            <Text style={[styles.bonusDiscount70, styles.topUpSuccessTypo]}>
              Bonus Discount 30%
            </Text>
            <Text style={styles.makeAnyPayment}>{`make any payment, at least
 $200 and get the cashback`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.title3, styles.atasLayout]}>
        <Text style={[styles.specialPromo, styles.featureFlexBox]}>
          Special Promo
        </Text>
        <Text style={[styles.viewAll, styles.viewAllClr]}>View all</Text>
      </View>
      <Poster />
      <View style={[styles.menuButton, styles.atasLayout]}>
        <View style={[styles.atas, styles.atasLayout]}>
          <View style={[styles.wallet, styles.topupPosition]}>
            <View style={[styles.walletChild, styles.childLayout]} />
            <Image
              style={styles.wallet1Icon}
              resizeMode="cover"
              source={require("../assets/wallet-11.png")}
            />
            <Text style={[styles.wallet1, styles.moreTypo]}>Wallet</Text>
          </View>
          <View style={[styles.internet, styles.internetPosition]}>
            <View style={[styles.internetChild, styles.childLayout]} />
            <Image
              style={[styles.vectorIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
            <Text style={[styles.internet1, styles.moreTypo]}>Internet</Text>
          </View>
          <View style={[styles.topup, styles.topupPosition]}>
            <View style={[styles.topupChild, styles.childLayout]} />
            <Image
              style={[styles.rotatingArrowToTheLeft1Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rotatingarrowtotheleft-11.png")}
            />
            <Text style={[styles.topUp, styles.topUpPosition]}>Top Up</Text>
          </View>
          <View style={[styles.transfer, styles.game1Position]}>
            <View style={[styles.transferChild, styles.childLayout]} />
            <Image
              style={[styles.send1Icon, styles.tranferPosition]}
              resizeMode="cover"
              source={require("../assets/send-11.png")}
            />
            <Text style={[styles.tranfer, styles.tranferPosition]}>
              Tranfer
            </Text>
          </View>
        </View>
        <View style={[styles.bawah, styles.atasLayout]}>
          <View style={styles.text}>
            <Text style={[styles.more, styles.moreTypo]}>More</Text>
            <Text style={[styles.mobilePrepaid, styles.moreTypo]}>{`Mobile
Prepaid`}</Text>
            <Text style={[styles.bills, styles.moreTypo]}>Bills</Text>
            <Text style={[styles.game, styles.moreTypo]}>Game</Text>
          </View>
          <View style={[styles.bills1, styles.topupPosition]}>
            <View style={[styles.transferChild, styles.childLayout]} />
            <Image
              style={[styles.invoice1Icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/invoice-11.png")}
            />
          </View>
          <View style={[styles.game1, styles.game1Position]}>
            <View style={[styles.internetChild, styles.childLayout]} />
            <Image
              style={styles.wallet1Icon}
              resizeMode="cover"
              source={require("../assets/gamepad-11.png")}
            />
          </View>
          <View style={[styles.mobilePrepaid1, styles.internetPosition]}>
            <View style={[styles.walletChild, styles.childLayout]} />
            <Image
              style={styles.wallet1Icon}
              resizeMode="cover"
              source={require("../assets/phone-11.png")}
            />
          </View>
          <Image
            style={[styles.moreIcon, styles.topupPosition]}
            resizeMode="cover"
            source={require("../assets/more1.png")}
          />
        </View>
      </View>
      <Up bell={require("../assets/bell1.png")} />
      <Image
        style={[styles.buttonNavigationIcon, styles.tsPosition]}
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
      <View style={[styles.ts, styles.tsPosition]}>
        <View style={[styles.tsChild, styles.tsPosition]} />
        <View style={[styles.topUpSu, styles.topLayout]}>
          <View style={[styles.topUpSuChild, styles.topLayout]} />
          <View style={styles.tuS}>
            <Image
              style={styles.mapsAndFlags1Icon}
              resizeMode="cover"
              source={require("../assets/mapsandflags-1.png")}
            />
            <Text style={[styles.topUpSuccess, styles.topUpSuccessTypo]}>
              Top Up Success
            </Text>
            <Text
              style={[styles.thankYouFor, styles.moreTypo]}
            >{`Thank you for making transactions 
in the SEWA`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popUpBg: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
  },
  featureFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  atasLayout: {
    width: 354,
    position: "absolute",
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
  topUpSuccessTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
  viewAllClr: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  topupPosition: {
    width: 75,
    top: 0,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    height: 75,
    width: 75,
    left: 0,
    top: 0,
    position: "absolute",
  },
  moreTypo: {
    fontFamily: FontFamily.robotoMedium,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 0,
  },
  internetPosition: {
    left: 186,
    width: 75,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "39.95%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 42,
    width: 42,
    overflow: "hidden",
  },
  topUpPosition: {
    left: 17,
    position: "absolute",
  },
  game1Position: {
    left: 93,
    width: 75,
    top: 0,
    position: "absolute",
  },
  tranferPosition: {
    left: 16,
    position: "absolute",
  },
  tsPosition: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  topLayout: {
    height: 186,
    width: 248,
    position: "absolute",
  },
  feature: {
    top: 293,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
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
    color: Color.colorMediumseagreen_100,
    fontSize: FontSize.size_sm,
  },
  makeAnyPayment: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
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
    left: 30,
  },
  specialPromo: {
    left: 0,
    top: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  viewAll: {
    top: 7,
    left: 314,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    letterSpacing: 0,
  },
  title3: {
    top: 587,
    height: 27,
    left: 30,
  },
  walletChild: {
    backgroundColor: Color.colorTomato_200,
    height: 75,
  },
  wallet1Icon: {
    top: 23,
    left: 22,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  wallet1: {
    left: 18,
    top: 80,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    position: "absolute",
  },
  wallet: {
    left: 279,
    width: 75,
    height: 96,
  },
  internetChild: {
    backgroundColor: Color.colorMediumseagreen_300,
    height: 75,
  },
  vectorIcon: {
    height: "31.22%",
    top: "23.93%",
    right: "30.63%",
    bottom: "44.85%",
    left: "29.43%",
  },
  internet1: {
    left: 14,
    top: 80,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    position: "absolute",
  },
  internet: {
    height: 96,
  },
  topupChild: {
    backgroundColor: Color.colorMediumorchid,
    height: 75,
  },
  rotatingArrowToTheLeft1Icon: {
    top: 17,
    left: 17,
    position: "absolute",
  },
  topUp: {
    fontFamily: FontFamily.robotoMedium,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 0,
    top: 80,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  topup: {
    height: 96,
    left: 0,
  },
  transferChild: {
    backgroundColor: Color.colorOrange,
    height: 75,
  },
  send1Icon: {
    top: 16,
    height: 42,
    width: 42,
    overflow: "hidden",
  },
  tranfer: {
    fontFamily: FontFamily.robotoMedium,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 0,
    top: 80,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  transfer: {
    height: 96,
  },
  atas: {
    height: 96,
    left: 0,
    top: 0,
  },
  more: {
    left: 275,
    fontSize: FontSize.size_sm,
    top: 0,
    color: Color.colorBlack,
    position: "absolute",
  },
  mobilePrepaid: {
    left: 175,
    fontSize: FontSize.size_sm,
    top: 0,
    color: Color.colorBlack,
    position: "absolute",
  },
  bills: {
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    color: Color.colorBlack,
    position: "absolute",
  },
  game: {
    left: 88,
    fontSize: FontSize.size_sm,
    top: 0,
    color: Color.colorBlack,
    position: "absolute",
  },
  text: {
    left: 25,
    width: 307,
    height: 32,
    top: 80,
    position: "absolute",
  },
  invoice1Icon: {
    height: "39.95%",
    top: "30.49%",
    right: "29.43%",
    bottom: "29.56%",
    left: "30.63%",
  },
  bills1: {
    height: 75,
    left: 0,
  },
  game1: {
    height: 75,
  },
  mobilePrepaid1: {
    height: 75,
  },
  moreIcon: {
    height: 75,
    left: 279,
    width: 75,
  },
  bawah: {
    top: 105,
    height: 112,
    left: 0,
  },
  menuButton: {
    top: 340,
    height: 217,
    left: 30,
  },
  buttonNavigationIcon: {
    top: 774,
    height: 122,
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
  tsChild: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    top: 0,
    height: 896,
  },
  topUpSuChild: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
  },
  mapsAndFlags1Icon: {
    left: 65,
    width: 50,
    height: 50,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  topUpSuccess: {
    top: 60,
    left: 21,
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  thankYouFor: {
    top: 92,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
    position: "absolute",
    left: 0,
  },
  tuS: {
    top: 33,
    left: 34,
    width: 180,
    height: 120,
    position: "absolute",
  },
  topUpSu: {
    top: 370,
    left: 83,
  },
  ts: {
    top: 0,
    height: 896,
  },
  popUp: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 896,
  },
});

export default PopUp;
