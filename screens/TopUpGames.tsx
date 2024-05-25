import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TopUpGames = () => {
  return (
    <View style={styles.topUpGames}>
      <View style={styles.pilihan}>
        <Text style={[styles.topUpDetail, styles.topFlexBox]}>
          Top Up Detail
        </Text>
        <View style={styles.scroll}>
          <View style={[styles.visa, styles.visaChildLayout]}>
            <View style={[styles.visaChild, styles.childPosition1]} />
            <View style={[styles.view, styles.viewLayout]}>
              <Text style={styles.text}>50</Text>
              <Image
                style={[styles.diamond1Icon, styles.viewLayout]}
                contentFit="cover"
                source={require("../assets/diamond-1.png")}
              />
            </View>
          </View>
          <View style={[styles.gpay, styles.visaChildLayout]}>
            <View style={[styles.gpayChild, styles.childPosition]} />
            <View style={[styles.view1, styles.viewLayout]}>
              <Text style={styles.text}>100</Text>
              <Image
                style={[styles.diamond1Icon, styles.viewLayout]}
                contentFit="cover"
                source={require("../assets/diamond-1.png")}
              />
            </View>
          </View>
          <View style={[styles.paypal, styles.visaChildLayout]}>
            <View style={[styles.gpayChild, styles.childPosition]} />
            <View style={[styles.view2, styles.viewLayout]}>
              <Text style={styles.text}>200</Text>
              <Image
                style={[styles.diamond1Icon, styles.viewLayout]}
                contentFit="cover"
                source={require("../assets/diamond-1.png")}
              />
            </View>
          </View>
          <View style={[styles.apay, styles.visaChildLayout]}>
            <View style={[styles.gpayChild, styles.childPosition]} />
            <View style={[styles.view3, styles.viewLayout]}>
              <Text style={styles.text}>400</Text>
              <Image
                style={[styles.diamond1Icon, styles.viewLayout]}
                contentFit="cover"
                source={require("../assets/diamond-1.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.userId, styles.userIdTypo]}>User ID</Text>
        <Text style={[styles.diamond, styles.userIdTypo]}>Diamond</Text>
        <Text style={[styles.text4, styles.usd1Typo]}>6327688(7763)</Text>
        <Image
          style={styles.pilihanChild}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
      </View>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.continue, styles.timeFlexBox]}>Continue</Text>
      </View>
      <View style={[styles.balance, styles.balanceLayout]}>
        <View style={[styles.balanceChild, styles.balanceLayout]} />
        <View style={[styles.text5, styles.text5Layout]}>
          <Text style={[styles.balance1, styles.timeFlexBox]}>Balance</Text>
          <Text style={[styles.text6, styles.topFlexBox]}>$ 155.00</Text>
          <Image
            style={[styles.eyeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/eye1.png")}
          />
        </View>
        <View style={[styles.mataUang, styles.iconLayout]}>
          <View style={[styles.mataUangChild, styles.iconLayout]} />
          <View style={[styles.usd, styles.usdLayout]}>
            <Text style={[styles.usd1, styles.usd1Typo]}>USD</Text>
            <Image
              style={[styles.chevronDownIcon, styles.usdLayout]}
              contentFit="cover"
              source={require("../assets/chevrondown.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.back}>
        <Text style={[styles.topUpGame, styles.continueTypo]}>Top Up Game</Text>
        <Image
          style={[styles.arrowLeftIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowleft.png")}
        />
      </View>
      <View style={[styles.systemDarkStatusBarD, styles.text5Layout]}>
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
  topFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  visaChildLayout: {
    width: 100,
    height: 58,
    position: "absolute",
  },
  childPosition1: {
    backgroundColor: Color.colorMediumseagreen_300,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  viewLayout: {
    height: 30,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  userIdTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  usd1Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  buttonLayout: {
    height: 50,
    width: 354,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  balanceLayout: {
    height: 120,
    width: 354,
    position: "absolute",
  },
  text5Layout: {
    height: 49,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    position: "absolute",
  },
  usdLayout: {
    height: 15,
    position: "absolute",
  },
  continueTypo: {
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  topUpDetail: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  visaChild: {
    width: 100,
    height: 58,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 35,
    top: 1,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  diamond1Icon: {
    width: 30,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  view: {
    width: 59,
    left: 21,
    top: 14,
    height: 30,
  },
  visa: {
    left: 0,
    top: 0,
  },
  gpayChild: {
    width: 100,
    height: 58,
    position: "absolute",
  },
  view1: {
    left: 18,
    width: 65,
    top: 14,
    height: 30,
  },
  gpay: {
    left: 125,
    top: 0,
  },
  view2: {
    left: 16,
    width: 69,
    top: 14,
    height: 30,
  },
  paypal: {
    left: 250,
    top: 0,
  },
  view3: {
    left: 15,
    width: 71,
    top: 14,
    height: 30,
  },
  apay: {
    left: 375,
    top: 0,
  },
  scroll: {
    top: 148,
    height: 58,
    left: 0,
    width: 475,
    position: "absolute",
  },
  userId: {
    top: 47,
  },
  diamond: {
    top: 112,
  },
  text4: {
    top: 73,
    color: Color.colorBlack,
    left: 0,
  },
  pilihanChild: {
    top: 92,
    maxHeight: "100%",
    width: 354,
    left: 0,
    position: "absolute",
  },
  pilihan: {
    top: 282,
    height: 206,
    width: 475,
    left: 30,
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorMediumseagreen_300,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  continue: {
    top: 12,
    left: 135,
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  button: {
    top: 755,
    left: 30,
  },
  balanceChild: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  balance1: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  text6: {
    top: 21,
    fontSize: FontSize.size_5xl,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorBlack,
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  eyeIcon: {
    top: 25,
    left: 105,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text5: {
    top: 36,
    width: 125,
    left: 35,
    height: 49,
  },
  mataUangChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumseagreen_100,
    width: 54,
    left: 0,
    top: 0,
  },
  usd1: {
    left: 20,
    color: Color.colorWhite,
    top: 1,
    fontSize: FontSize.size_xs,
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
    width: 54,
  },
  balance: {
    top: 132,
    left: 30,
  },
  topUpGame: {
    textAlign: "left",
    letterSpacing: 0,
    top: 0,
    left: 30,
  },
  arrowLeftIcon: {
    top: 4,
    width: 20,
    height: 20,
    overflow: "hidden",
    left: 0,
  },
  back: {
    top: 75,
    width: 150,
    height: 27,
    left: 30,
    position: "absolute",
  },
  time: {
    marginTop: -7.5,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    letterSpacing: 0,
    left: 21,
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
    height: 11,
    width: 15,
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
  topUpGames: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default TopUpGames;
