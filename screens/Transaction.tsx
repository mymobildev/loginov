import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import SystemDarkStatusBarD from "../components/SystemDarkStatusBarD";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Transaction = () => {
  return (
    <View style={styles.transaction}>
      <View style={styles.back}>
        <Text style={[styles.transactionDetail, styles.text6Typo]}>
          Transaction Detail
        </Text>
        <Image
          style={[styles.arrowLeftIcon, styles.arrowLeftIconPosition]}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
      </View>
      <View style={[styles.mc, styles.mcLayout]}>
        <Text
          style={[styles.agustus2021Mcdonalds, styles.ifYouNeedTypo]}
        >{`17 Agustus 2021
McDonald’s`}</Text>
        <View style={[styles.rectangleParent, styles.frameChildLayout]}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <Image
            style={[styles.image2Icon, styles.mcLayout]}
            resizeMode="cover"
            source={require("../assets/image-2.png")}
          />
        </View>
      </View>
      <View style={styles.pembayaran}>
        <Image
          style={[styles.pembayaranChild, styles.pembayaranLayout]}
          resizeMode="cover"
          source={require("../assets/vector-8.png")}
        />
        <Image
          style={[styles.pembayaranItem, styles.pembayaranLayout]}
          resizeMode="cover"
          source={require("../assets/vector-8.png")}
        />
        <Text style={[styles.burgersKingHotContainer, styles.textPosition1]}>
          <Text style={styles.burgersKingHotDogFrench}>{`Burgers King
Hot dog
French Fries
soda
Delivery
`}</Text>
          <Text style={styles.adminFee}>Admin Fee</Text>
        </Text>
        <Text style={[styles.text, styles.textPosition1]}>
          <Text style={styles.burgersKingHotDogFrench}>{`$ 10.00
$ 9.00
$ 7.00
$ 5.00
$ 15.00
`}</Text>
          <Text style={styles.adminFee}>$ 99.99</Text>
        </Text>
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
      <Text style={[styles.totalPayment, styles.text3Typo]}>Total Payment</Text>
      <Text style={[styles.text3, styles.text3Typo]}>$ 145.99</Text>
      <View style={styles.teing}>
        <View style={[styles.tiud, styles.tiudLayout1]}>
          <View style={[styles.tiudChild, styles.tiudLayout]} />
          <View style={[styles.creditParent, styles.parentPosition]}>
            <Text style={[styles.credit, styles.debitTypo]}>Credit</Text>
            <Text style={[styles.text4, styles.textPosition]}>
              <Text style={styles.text5}>{`$ `}</Text>
              <Text style={styles.text6Typo}>7.10</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.tiud1, styles.tiudLayout1]}>
          <View style={[styles.tiudItem, styles.tiudLayout]} />
          <View style={[styles.debitParent, styles.parentPosition]}>
            <Text style={[styles.debit, styles.textFlexBox]}>Debit</Text>
            <Text style={[styles.text7, styles.textFlexBox]}>
              <Text style={styles.text5}>{`$ `}</Text>
              <Text style={styles.text6Typo}>40.24</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.tiud2, styles.tiudLayout1]}>
          <View style={[styles.tiudInner, styles.tiudLayout]} />
          <View style={[styles.balanceParent, styles.parentPosition]}>
            <Text style={[styles.balance, styles.textFlexBox]}>Balance</Text>
            <Text style={[styles.text7, styles.textFlexBox]}>
              <Text style={styles.text5}>{`$ `}</Text>
              <Text style={styles.text6Typo}>115.00</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.barcode}>
        <Text
          style={[styles.ifYouNeed, styles.textFlexBox]}
        >{`If you need price payment details,
please scan the barcode below`}</Text>
        <Image
          style={styles.barcode11}
          resizeMode="cover"
          source={require("../assets/barcode-1-1.png")}
        />
        <Text style={[styles.text13, styles.textFlexBox]}>
          2656148137193283627-236456
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text6Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  arrowLeftIconPosition: {
    top: 4,
    left: 0,
    position: "absolute",
  },
  mcLayout: {
    height: 50,
    position: "absolute",
  },
  ifYouNeedTypo: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  frameChildLayout: {
    width: 50,
    height: 50,
    top: 0,
    position: "absolute",
  },
  pembayaranLayout: {
    maxHeight: "100%",
    width: 354,
    left: 0,
    position: "absolute",
  },
  textPosition1: {
    lineHeight: 27,
    top: 20,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    position: "absolute",
  },
  text3Typo: {
    fontWeight: "500",
    top: 434,
    lineHeight: 27,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  tiudLayout1: {
    width: 100,
    height: 60,
    top: 0,
    position: "absolute",
  },
  tiudLayout: {
    borderRadius: Border.br_xl,
    width: 100,
    height: 60,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    height: 45,
    top: 4,
    position: "absolute",
  },
  debitTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 27,
    top: 0,
  },
  textPosition: {
    top: 18,
    lineHeight: 27,
    color: Color.colorBlack,
    left: 0,
    fontSize: FontSize.size_lg,
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  transactionDetail: {
    textAlign: "left",
    color: Color.colorMediumseagreen_100,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    top: 0,
    left: 30,
    position: "absolute",
  },
  arrowLeftIcon: {
    width: 20,
    height: 20,
    left: 0,
    overflow: "hidden",
  },
  back: {
    top: 75,
    width: 196,
    height: 27,
    left: 30,
    position: "absolute",
  },
  agustus2021Mcdonalds: {
    color: Color.colorBlack,
    left: 0,
    top: 4,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
  },
  image2Icon: {
    left: -8,
    width: 67,
    top: 0,
  },
  rectangleParent: {
    left: 304,
  },
  mc: {
    top: 132,
    width: 354,
    left: 30,
  },
  pembayaranChild: {
    top: 0,
  },
  pembayaranItem: {
    top: 202,
  },
  burgersKingHotDogFrench: {
    color: Color.colorGray_200,
  },
  adminFee: {
    color: Color.colorRed,
  },
  burgersKingHotContainer: {
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    textAlign: "left",
  },
  text: {
    left: 309,
    textAlign: "right",
    fontFamily: FontFamily.robotoRegular,
  },
  pembayaran: {
    top: 212,
    height: 202,
    width: 354,
    left: 30,
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
  totalPayment: {
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
    left: 30,
  },
  text3: {
    left: 329,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorMediumseagreen_100,
  },
  tiudChild: {
    backgroundColor: "rgba(241, 196, 15, 0.2)",
  },
  credit: {
    left: 9,
    color: "#caa40d",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  text5: {
    fontFamily: FontFamily.robotoRegular,
  },
  text4: {
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  creditParent: {
    left: 26,
    width: 47,
  },
  tiud: {
    left: 0,
  },
  tiudItem: {
    backgroundColor: Color.colorTomato_200,
  },
  debit: {
    left: 20,
    color: Color.colorTomato_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 27,
    top: 0,
  },
  text7: {
    top: 18,
    lineHeight: 27,
    color: Color.colorBlack,
    left: 0,
    fontSize: FontSize.size_lg,
  },
  debitParent: {
    left: 17,
    width: 65,
  },
  tiud1: {
    left: 120,
  },
  tiudInner: {
    backgroundColor: Color.colorMediumseagreen_300,
  },
  balance: {
    left: 14,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 27,
    top: 0,
    color: Color.colorMediumseagreen_100,
  },
  balanceParent: {
    left: 16,
    width: 67,
  },
  tiud2: {
    left: 240,
  },
  teing: {
    top: 504,
    width: 340,
    height: 60,
    left: 30,
    position: "absolute",
  },
  ifYouNeed: {
    left: 78,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    top: 0,
  },
  barcode11: {
    top: 62,
    height: 90,
    width: 354,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text13: {
    top: 172,
    left: 52,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
  },
  barcode: {
    top: 594,
    height: 193,
    width: 354,
    left: 30,
    position: "absolute",
  },
  transaction: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Transaction;
