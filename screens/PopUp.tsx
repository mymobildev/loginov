import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PopUp = () => {
  return (
    <View style={[styles.popUp, styles.popUpLayout]}>
      <Text style={[styles.feature, styles.featureTypo]}>Feature</Text>
      <View style={[styles.promo, styles.upLayout]}>
        <View style={[styles.view, styles.viewShadowBox1]}>
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/rectangle-46.png")}
          />
          <View style={[styles.vectorParent, styles.innerLayout]}>
            <Image
              style={[styles.frameChild, styles.innerLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-461.png")}
            />
            <View style={styles.bonusCashback40Parent}>
              <Text style={styles.bonusCashback40}>Bonus Cashback $40</Text>
              <Text style={styles.makeAnyPayment}>{`make any payment, at least
 $100 and get the cashback`}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.view1, styles.viewShadowBox1]}>
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/rectangle-47.png")}
          />
          <View style={[styles.inner, styles.innerLayout]} />
          <View
            style={[styles.bonusDiscount70Parent, styles.bonusParentPosition]}
          >
            <Text style={styles.bonusCashback40}>Bonus Discount 70%</Text>
            <Text style={styles.makeAnyPayment}>{`make any payment, at least
 $599 and get the cashback`}</Text>
          </View>
        </View>
        <View style={[styles.view2, styles.viewShadowBox]}>
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/rectangle-46.png")}
          />
          <View style={[styles.inner, styles.innerLayout]} />
          <View style={styles.bonusCashback40Group}>
            <Text style={styles.bonusCashback40}>Bonus Cashback 40%</Text>
            <Text style={styles.makeAnyPayment}>{`make any payment, at least
 $100 and get the cashback`}</Text>
          </View>
        </View>
        <View style={[styles.view3, styles.viewShadowBox]}>
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/rectangle-47.png")}
          />
          <View style={[styles.inner, styles.innerLayout]} />
          <View
            style={[styles.bonusDiscount30Parent, styles.bonusParentPosition]}
          >
            <Text style={styles.bonusCashback40}>Bonus Discount 30%</Text>
            <Text style={styles.makeAnyPayment}>{`make any payment, at least
 $200 and get the cashback`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.title3, styles.upLayout]}>
        <Text style={[styles.specialPromo, styles.featureTypo]}>
          Special Promo
        </Text>
        <Text style={[styles.viewAll, styles.viewAllClr]}>View all</Text>
      </View>
      <View style={styles.poster}>
        <View style={[styles.posterChild, styles.posterPosition]} />
        <Image
          style={[styles.posterItem, styles.posterPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-37.png")}
        />
        <View style={[styles.pict, styles.pictLayout]}>
          <Image
            style={styles.registOrLogin1}
            contentFit="cover"
            source={require("../assets/regist-or-login-1.png")}
          />
          <Image
            style={[styles.pngitem17474241Icon, styles.pictLayout]}
            contentFit="cover"
            source={require("../assets/pngitem-1747424-1.png")}
          />
        </View>
        <View style={styles.text}>
          <Text style={[styles.goPremium, styles.premiumClr]}>Go Premium</Text>
          <Text
            style={[styles.upgradeToPremium, styles.robetBinUdinPosition]}
          >{`Upgrade to premium,
get more profit now!`}</Text>
        </View>
        <View style={styles.hias}>
          <Text style={[styles.x, styles.xTypo]}>X</Text>
          <Text style={[styles.x1, styles.xTypo]}>X</Text>
          <Text style={[styles.o, styles.xTypo]}>o</Text>
          <Text style={[styles.o1, styles.xTypo]}>o</Text>
        </View>
      </View>
      <View style={[styles.menuButton, styles.upLayout]}>
        <View style={[styles.atas, styles.upLayout]}>
          <View style={[styles.wallet, styles.topupPosition]}>
            <View style={[styles.walletChild, styles.childLayout]} />
            <Image
              style={[styles.wallet1Icon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/wallet-11.png")}
            />
            <Text style={[styles.wallet1, styles.moreTypo]}>Wallet</Text>
          </View>
          <View style={[styles.internet, styles.internetPosition]}>
            <View style={[styles.internetChild, styles.childLayout]} />
            <Image
              style={[styles.vectorIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Text style={[styles.internet1, styles.moreTypo]}>Internet</Text>
          </View>
          <View style={[styles.topup, styles.topupPosition]}>
            <View style={[styles.topupChild, styles.childLayout]} />
            <Image
              style={[styles.rotatingArrowToTheLeft1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rotatingarrowtotheleft-11.png")}
            />
            <Text style={[styles.topUp, styles.topUpPosition]}>Top Up</Text>
          </View>
          <View style={[styles.transfer, styles.game1Position]}>
            <View style={[styles.transferChild, styles.childLayout]} />
            <Image
              style={[styles.send1Icon, styles.tranferPosition]}
              contentFit="cover"
              source={require("../assets/send-11.png")}
            />
            <Text style={[styles.tranfer, styles.tranferPosition]}>
              Tranfer
            </Text>
          </View>
        </View>
        <View style={[styles.bawah, styles.upLayout]}>
          <View style={styles.text1}>
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
              contentFit="cover"
              source={require("../assets/invoice-11.png")}
            />
          </View>
          <View style={[styles.game1, styles.game1Position]}>
            <View style={[styles.internetChild, styles.childLayout]} />
            <Image
              style={[styles.wallet1Icon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/gamepad-11.png")}
            />
          </View>
          <View style={[styles.mobilePrepaid1, styles.internetPosition]}>
            <View style={[styles.walletChild, styles.childLayout]} />
            <Image
              style={[styles.wallet1Icon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/phone-11.png")}
            />
          </View>
          <Image
            style={[styles.moreIcon, styles.topupPosition]}
            contentFit="cover"
            source={require("../assets/more1.png")}
          />
        </View>
      </View>
      <View style={[styles.up, styles.upLayout]}>
        <Text style={[styles.robetBinUdin, styles.robetBinUdinPosition]}>
          Robet Bin Udin
        </Text>
        <Text style={[styles.specialPromo, styles.featureTypo]}>Hello!</Text>
        <Image
          style={[styles.bellIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/bell1.png")}
        />
      </View>
      <Image
        style={[styles.buttonNavigationIcon, styles.tsPosition]}
        contentFit="cover"
        source={require("../assets/button-navigation.png")}
      />
      <View style={[styles.systemDarkStatusBarD, styles.systemPosition]}>
        <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={[styles.capIcon, styles.systemPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
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
      <View style={[styles.systemDarkHomeIndicator, styles.systemPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.ts, styles.tsPosition]}>
        <View style={[styles.tsChild, styles.tsPosition]} />
        <View style={[styles.topUpSu, styles.topLayout]}>
          <View style={[styles.topUpSuChild, styles.topLayout]} />
          <View style={styles.tuS}>
            <Image
              style={styles.mapsAndFlags1Icon}
              contentFit="cover"
              source={require("../assets/mapsandflags-1.png")}
            />
            <Text style={[styles.topUpSuccess, styles.timePosition]}>
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
  popUpLayout: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
  },
  featureTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  upLayout: {
    width: 354,
    position: "absolute",
  },
  viewShadowBox1: {
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
    top: 0,
    position: "absolute",
  },
  innerLayout: {
    height: 79,
    width: 167,
    left: 0,
    position: "absolute",
  },
  bonusParentPosition: {
    width: 147,
    height: 49,
    marginTop: 19.5,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
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
  posterPosition: {
    top: 6,
    borderRadius: Border.br_xl,
    left: 0,
    width: 354,
    position: "absolute",
  },
  pictLayout: {
    width: 93,
    height: 106,
    top: 0,
    position: "absolute",
  },
  premiumClr: {
    color: Color.colorWhite,
    textAlign: "center",
  },
  robetBinUdinPosition: {
    top: 27,
    fontSize: FontSize.size_sm,
    left: 0,
    letterSpacing: 0,
    position: "absolute",
  },
  xTypo: {
    fontFamily: FontFamily.comicNeueRegular,
    color: Color.colorWhite,
    textAlign: "center",
    letterSpacing: 0,
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
  iconLayout2: {
    height: 30,
    width: 30,
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
  systemPosition: {
    right: 0,
    position: "absolute",
  },
  timePosition: {
    left: 21,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  topLayout: {
    height: 186,
    width: 248,
    position: "absolute",
  },
  feature: {
    top: 293,
    textAlign: "left",
    color: Color.colorBlack,
    left: 30,
  },
  child: {
    borderRadius: Border.br_xl,
    height: 167,
    width: 167,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    top: 0,
  },
  bonusCashback40: {
    color: Color.colorMediumseagreen_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  makeAnyPayment: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
  },
  bonusCashback40Parent: {
    marginTop: -24.5,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    top: "50%",
    marginLeft: -74.5,
    position: "absolute",
  },
  vectorParent: {
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    top: 88,
    height: 79,
    overflow: "hidden",
  },
  view: {
    left: 0,
  },
  inner: {
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    top: 88,
    height: 79,
    backgroundColor: Color.colorWhite,
  },
  bonusDiscount70Parent: {
    marginLeft: -73,
    height: 49,
  },
  view1: {
    left: 187,
  },
  bonusCashback40Group: {
    marginLeft: -75.5,
    height: 49,
    marginTop: 19.5,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  view2: {
    left: 187,
  },
  bonusDiscount30Parent: {
    height: 49,
    marginLeft: -74.5,
    width: 147,
  },
  view3: {
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
    textAlign: "left",
    color: Color.colorBlack,
  },
  viewAll: {
    top: 7,
    left: 314,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.colorGray_200,
  },
  title3: {
    top: 587,
    height: 27,
    left: 30,
  },
  posterChild: {
    backgroundColor: Color.colorMediumseagreen_100,
    height: 100,
  },
  posterItem: {
    height: 77,
  },
  registOrLogin1: {
    top: 2,
    left: 10,
    width: 38,
    height: 82,
    position: "absolute",
  },
  pngitem17474241Icon: {
    left: 0,
  },
  pict: {
    left: 238,
  },
  goPremium: {
    left: 0,
    top: 0,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  upgradeToPremium: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
  },
  text: {
    top: 26,
    left: 26,
    width: 125,
    height: 59,
    position: "absolute",
  },
  x: {
    top: 5,
    left: 87,
    fontSize: FontSize.size_sm,
  },
  x1: {
    left: 4,
    fontSize: FontSize.size_9xs,
    top: 0,
  },
  o: {
    top: 55,
    fontSize: FontSize.size_5xl,
    left: 0,
  },
  o1: {
    top: 48,
    left: 97,
    fontSize: FontSize.size_4xs,
  },
  hias: {
    left: 217,
    width: 102,
    height: 83,
    top: 16,
    position: "absolute",
  },
  poster: {
    top: 157,
    height: 106,
    width: 354,
    left: 30,
    position: "absolute",
  },
  walletChild: {
    backgroundColor: Color.colorTomato_200,
    height: 75,
  },
  wallet1Icon: {
    top: 23,
    left: 22,
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
    height: 42,
    width: 42,
    overflow: "hidden",
    top: 16,
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
  text1: {
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
  robetBinUdin: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  bellIcon: {
    top: 9,
    left: 324,
  },
  up: {
    top: 79,
    height: 48,
    left: 30,
  },
  buttonNavigationIcon: {
    top: 774,
    height: 122,
  },
  time: {
    marginTop: -7.5,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    top: "50%",
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
    top: "50%",
    position: "absolute",
  },
  capIcon: {
    marginTop: -1.95,
    width: 1,
    height: 4,
    opacity: 0.4,
    top: "50%",
  },
  capacity: {
    marginTop: -3.65,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorBlack,
    width: 18,
    height: 7,
    top: "50%",
    position: "absolute",
  },
  battery: {
    marginTop: -4.2,
    right: 14,
    width: 24,
    height: 11,
    top: "50%",
    position: "absolute",
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
    left: 0,
    top: 0,
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
    bottom: 0,
    height: 37,
    left: 0,
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
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    left: 21,
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
    backgroundColor: Color.colorWhite,
  },
});

export default PopUp;
