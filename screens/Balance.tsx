import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Balance = () => {
  return (
    <View style={styles.balance}>
      <View style={[styles.balance1, styles.balanceLayout]}>
        <View style={[styles.balanceChild, styles.childLayout1]} />
        <View style={[styles.text, styles.textLayout]}>
          <Text style={[styles.balance2, styles.timeFlexBox]}>Balance</Text>
          <Text style={[styles.text1, styles.text1FlexBox]}>$ 155.00</Text>
          <Image
            style={[styles.eyeIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/eye1.png")}
          />
        </View>
        <View style={styles.mataUang}>
          <View style={[styles.mataUangChild, styles.childLayout]} />
          <View style={[styles.usd, styles.usdLayout]}>
            <Text style={styles.usd1}>USD</Text>
            <Image
              style={[styles.chevronDownIcon, styles.usdLayout]}
              contentFit="cover"
              source={require("../assets/chevrondown.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.signOut, styles.signChildLayout]}>
        <View style={[styles.signOutChild, styles.signChildLayout]} />
        <Text style={[styles.topUp, styles.topUpClr]}>Top Up</Text>
      </View>
      <View style={[styles.back, styles.backPosition]}>
        <Text style={[styles.balance3, styles.topUpClr]}>Balance</Text>
        <Image
          style={[styles.arrowLeftIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrowleft.png")}
        />
      </View>
      <View style={[styles.money, styles.backPosition]}>
        <Text style={[styles.moneyHistory, styles.topUpTypo]}>
          Money History
        </Text>
        <Text style={[styles.viewAll, styles.viewAllClr]}>View All</Text>
      </View>
      <View style={styles.isi}>
        <View style={[styles.orderan1, styles.signChildLayout]}>
          <Text style={[styles.agustus2021, styles.text2Typo]}>
            17 Agustus 2021
          </Text>
          <View style={[styles.orderan1Child, styles.signChildLayout]} />
          <View style={[styles.name, styles.nameLayout]}>
            <Text style={[styles.mcdonalds, styles.viewAllClr]}>
              McDonald’s
            </Text>
            <Text style={[styles.text2, styles.text2Position]}>$ 34.00</Text>
          </View>
          <Image
            style={[styles.chevronRightIcon, styles.text2Position]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <Image
          style={[styles.image2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
        <View style={[styles.orderan2, styles.signChildLayout]}>
          <Text style={[styles.agustus2021, styles.text2Typo]}>
            17 Agustus 2021
          </Text>
          <View style={[styles.orderan1Child, styles.signChildLayout]} />
          <View style={[styles.name1, styles.nameLayout]}>
            <Text style={[styles.mcdonalds, styles.viewAllClr]}>Game</Text>
            <Text style={[styles.text2, styles.text2Position]}>$ 10.00</Text>
          </View>
          <Image
            style={[styles.chevronRightIcon, styles.text2Position]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
          <Image
            style={styles.gamepad1Icon}
            contentFit="cover"
            source={require("../assets/gamepad-12.png")}
          />
        </View>
        <View style={[styles.orderan3, styles.signChildLayout]}>
          <Text style={[styles.agustus2021, styles.text2Typo]}>
            17 Agustus 2021
          </Text>
          <View style={[styles.orderan1Child, styles.signChildLayout]} />
          <Image
            style={styles.gamepad1Icon}
            contentFit="cover"
            source={require("../assets/phone-12.png")}
          />
          <View style={[styles.name2, styles.nameLayout]}>
            <Text
              style={[styles.mcdonalds, styles.viewAllClr]}
            >{`Credit & Quota`}</Text>
            <Text style={[styles.text2, styles.text2Position]}>$ 34.00</Text>
          </View>
          <Image
            style={[styles.chevronRightIcon, styles.text2Position]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <View style={[styles.orderan4, styles.orderan4Position]}>
          <Text style={[styles.agustus2021, styles.text2Typo]}>
            16 Agustus 2021
          </Text>
          <View style={[styles.orderan1Child, styles.signChildLayout]} />
          <View style={[styles.name, styles.nameLayout]}>
            <Text style={[styles.mcdonalds, styles.viewAllClr]}>
              McDonald’s
            </Text>
            <Text style={[styles.text2, styles.text2Position]}>$ 34.00</Text>
          </View>
          <Image
            style={[styles.chevronRightIcon, styles.text2Position]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <Image
          style={[styles.image5Icon, styles.orderan4Position]}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
        <View style={[styles.orderan5, styles.orderan5Position]}>
          <Text style={[styles.agustus2021, styles.text2Typo]}>
            15 Agustus 2021
          </Text>
          <View style={[styles.orderan1Child, styles.signChildLayout]} />
          <View style={[styles.name, styles.nameLayout]}>
            <Text style={[styles.mcdonalds, styles.viewAllClr]}>
              McDonald’s
            </Text>
            <Text style={[styles.text2, styles.text2Position]}>$ 34.00</Text>
          </View>
          <Image
            style={[styles.chevronRightIcon, styles.text2Position]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <Image
          style={[styles.image6Icon, styles.orderan5Position]}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </View>
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
      <View style={[styles.systemDarkHomeIndicator, styles.nameLayout]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceLayout: {
    height: 120,
    position: "absolute",
  },
  childLayout1: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    width: 354,
  },
  textLayout: {
    height: 49,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  text1FlexBox: {
    textAlign: "left",
    left: 0,
  },
  iconLayout1: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    top: 0,
  },
  usdLayout: {
    height: 15,
    position: "absolute",
  },
  signChildLayout: {
    height: 50,
    position: "absolute",
  },
  topUpClr: {
    color: Color.colorMediumseagreen_100,
    position: "absolute",
  },
  backPosition: {
    height: 27,
    left: 30,
    position: "absolute",
  },
  topUpTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0,
  },
  viewAllClr: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  text2Typo: {
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    fontWeight: "500",
    letterSpacing: 0,
    left: 0,
  },
  nameLayout: {
    height: 37,
    position: "absolute",
  },
  text2Position: {
    top: 16,
    position: "absolute",
  },
  iconLayout: {
    width: 67,
    left: 137,
  },
  orderan4Position: {
    top: 210,
    height: 50,
    position: "absolute",
  },
  orderan5Position: {
    top: 280,
    height: 50,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  balanceChild: {
    backgroundColor: Color.colorWhitesmoke,
    height: 120,
    position: "absolute",
  },
  balance2: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    top: 21,
    fontSize: FontSize.size_5xl,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorBlack,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  eyeIcon: {
    top: 25,
    left: 105,
    height: 20,
    position: "absolute",
  },
  text: {
    top: 36,
    left: 35,
    width: 125,
  },
  mataUangChild: {
    backgroundColor: Color.colorMediumseagreen_100,
    width: 54,
    height: 20,
    left: 0,
    position: "absolute",
  },
  usd1: {
    top: 1,
    left: 20,
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
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
    height: 20,
    position: "absolute",
  },
  balance1: {
    top: 132,
    width: 354,
    left: 30,
  },
  signOutChild: {
    backgroundColor: Color.colorMediumseagreen_300,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    width: 354,
  },
  topUp: {
    top: 15,
    left: 153,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  signOut: {
    top: 699,
    width: 354,
    left: 30,
  },
  balance3: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0,
    top: 0,
    left: 30,
  },
  arrowLeftIcon: {
    top: 4,
    height: 20,
    left: 0,
    position: "absolute",
  },
  back: {
    top: 75,
    width: 104,
  },
  moneyHistory: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    left: 0,
    top: 0,
    position: "absolute",
  },
  viewAll: {
    left: 313,
    top: 7,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  money: {
    top: 282,
    width: 354,
  },
  agustus2021: {
    top: 17,
    color: Color.colorMediumseagreen_100,
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  orderan1Child: {
    left: 145,
    width: 50,
    borderRadius: Border.br_3xs,
    top: 0,
    backgroundColor: Color.colorWhitesmoke,
  },
  mcdonalds: {
    textAlign: "left",
    left: 0,
    fontSize: FontSize.size_sm,
    top: 0,
  },
  text2: {
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    fontWeight: "500",
    letterSpacing: 0,
    left: 0,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
  },
  name: {
    width: 70,
    left: 207,
    height: 37,
    top: 7,
  },
  chevronRightIcon: {
    left: 312,
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  orderan1: {
    width: 332,
    left: 0,
    top: 0,
  },
  image2Icon: {
    height: 50,
    position: "absolute",
    top: 0,
  },
  name1: {
    width: 59,
    left: 207,
    height: 37,
    top: 7,
  },
  gamepad1Icon: {
    top: 10,
    left: 155,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  orderan2: {
    top: 70,
    width: 332,
    left: 0,
  },
  name2: {
    width: 87,
    left: 207,
    height: 37,
    top: 7,
  },
  orderan3: {
    top: 140,
    width: 332,
    left: 0,
  },
  orderan4: {
    width: 332,
    left: 0,
  },
  image5Icon: {
    width: 67,
    left: 137,
  },
  orderan5: {
    width: 332,
    left: 0,
  },
  image6Icon: {
    width: 67,
    left: 137,
  },
  isi: {
    top: 339,
    left: 52,
    height: 330,
    width: 332,
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
    right: 0,
    left: 0,
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
