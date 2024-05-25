import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Text style={[styles.feature, styles.timeClr]}>Feature</Text>
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
              <Text style={[styles.bonusCashback40, styles.robetBinUdinTypo]}>
                Bonus Cashback $40
              </Text>
              <Text
                style={[styles.makeAnyPayment, styles.viewAllTypo]}
              >{`make any payment, at least
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
            <Text style={[styles.bonusCashback40, styles.robetBinUdinTypo]}>
              Bonus Discount 70%
            </Text>
            <Text
              style={[styles.makeAnyPayment, styles.viewAllTypo]}
            >{`make any payment, at least
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
            <Text style={[styles.bonusCashback40, styles.robetBinUdinTypo]}>
              Bonus Cashback 40%
            </Text>
            <Text
              style={[styles.makeAnyPayment, styles.viewAllTypo]}
            >{`make any payment, at least
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
            <Text style={[styles.bonusCashback40, styles.robetBinUdinTypo]}>
              Bonus Discount 30%
            </Text>
            <Text
              style={[styles.makeAnyPayment, styles.viewAllTypo]}
            >{`make any payment, at least
 $200 and get the cashback`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.title3, styles.title3Layout]}>
        <Text style={[styles.specialPromo, styles.timeClr]}>Special Promo</Text>
        <Text style={[styles.viewAll, styles.viewAllTypo]}>View all</Text>
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
      <View style={[styles.menuButton, styles.atasLayout]}>
        <View style={[styles.atas, styles.atasLayout]}>
          <View style={[styles.wallet, styles.topupPosition]}>
            <View style={[styles.walletChild, styles.childLayout]} />
            <Image
              style={[styles.wallet1Icon, styles.title3Layout]}
              contentFit="cover"
              source={require("../assets/wallet-1.png")}
            />
            <Text style={[styles.wallet1, styles.moreTypo]}>Wallet</Text>
          </View>
          <View style={[styles.internet, styles.internetPosition]}>
            <View style={[styles.internetChild, styles.childLayout]} />
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={[styles.internet1, styles.moreTypo]}>Internet</Text>
          </View>
          <View style={[styles.topup, styles.topupPosition]}>
            <View style={[styles.topupChild, styles.childLayout]} />
            <Image
              style={[styles.rotatingArrowToTheLeft1Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/rotatingarrowtotheleft-1.png")}
            />
            <Text style={[styles.topUp, styles.moreTypo]}>Top Up</Text>
          </View>
          <View style={[styles.transfer, styles.game1Position]}>
            <View style={[styles.transferChild, styles.childLayout]} />
            <Image
              style={[styles.send1Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/send-1.png")}
            />
            <Text style={[styles.tranfer, styles.moreTypo]}>Tranfer</Text>
          </View>
        </View>
        <View style={[styles.bawah, styles.atasLayout]}>
          <View style={[styles.text1, styles.text1Layout]}>
            <Text style={[styles.more, styles.moreTypo]}>More</Text>
            <Text style={[styles.mobilePrepaid, styles.text1Layout]}>{`Mobile
Prepaid`}</Text>
            <Text style={[styles.bills, styles.moreTypo]}>Bills</Text>
            <Text style={[styles.game, styles.moreTypo]}>Game</Text>
          </View>
          <View style={[styles.bills1, styles.topupPosition]}>
            <View style={[styles.transferChild, styles.childLayout]} />
            <Image
              style={[styles.invoice1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/invoice-1.png")}
            />
          </View>
          <View style={[styles.game1, styles.game1Position]}>
            <View style={[styles.internetChild, styles.childLayout]} />
            <Image
              style={[styles.wallet1Icon, styles.title3Layout]}
              contentFit="cover"
              source={require("../assets/gamepad-1.png")}
            />
          </View>
          <View style={[styles.mobilePrepaid1, styles.internetPosition]}>
            <View style={[styles.walletChild, styles.childLayout]} />
            <Image
              style={[styles.wallet1Icon, styles.title3Layout]}
              contentFit="cover"
              source={require("../assets/phone-1.png")}
            />
          </View>
          <Image
            style={[styles.moreIcon, styles.topupPosition]}
            contentFit="cover"
            source={require("../assets/more.png")}
          />
        </View>
      </View>
      <View style={[styles.up, styles.upLayout]}>
        <Text style={[styles.robetBinUdin, styles.robetBinUdinPosition]}>
          Robet Bin Udin
        </Text>
        <Text style={[styles.specialPromo, styles.timeClr]}>Hello!</Text>
        <Image
          style={styles.bellIcon}
          contentFit="cover"
          source={require("../assets/bell.png")}
        />
      </View>
      <Image
        style={styles.buttonNavigationIcon}
        contentFit="cover"
        source={require("../assets/button-navigation.png")}
      />
      <View style={[styles.systemDarkStatusBarD, styles.systemPosition]}>
        <Text style={[styles.time, styles.timeClr]}>9:41</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  timeClr: {
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  upLayout: {
    width: 354,
    left: 30,
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
  robetBinUdinTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  viewAllTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
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
  title3Layout: {
    height: 27,
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
  moreTypo: {
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
  text1Layout: {
    height: 22,
    position: "absolute",
  },
  systemPosition: {
    right: 0,
    position: "absolute",
  },
  feature: {
    top: 293,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: 30,
    color: Color.colorBlack,
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
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  makeAnyPayment: {
    textAlign: "center",
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
    position: "absolute",
  },
  specialPromo: {
    left: 0,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  viewAll: {
    top: 7,
    left: 314,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  title3: {
    top: 587,
    width: 354,
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
    height: 82,
    width: 38,
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
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    position: "absolute",
  },
  upgradeToPremium: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    top: 27,
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
    top: 16,
    left: 217,
    width: 102,
    height: 83,
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
    height: 38,
    width: 38,
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
    height: 11,
    top: 0,
    position: "absolute",
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
    height: 11,
    left: 0,
    top: 0,
    position: "absolute",
  },
  game: {
    left: 82,
    width: 36,
    height: 11,
    top: 0,
    position: "absolute",
  },
  text1: {
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
  robetBinUdin: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "left",
  },
  bellIcon: {
    top: 9,
    left: 324,
    width: 30,
    height: 30,
    position: "absolute",
  },
  up: {
    top: 79,
    height: 48,
    position: "absolute",
  },
  buttonNavigationIcon: {
    top: 774,
    width: 414,
    height: 122,
    left: 0,
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
