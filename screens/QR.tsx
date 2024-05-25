import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const QR = () => {
  return (
    <View style={styles.qr}>
      <View style={[styles.pict, styles.pictLayout]}>
        <View style={styles.pictChild} />
        <Image
          style={styles.image7Icon}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Image
          style={[styles.pngitem17474241Icon, styles.pictLayout]}
          contentFit="cover"
          source={require("../assets/pngitem-1747424-11.png")}
        />
      </View>
      <View style={[styles.pm, styles.pmLayout]}>
        <View style={[styles.pmChild, styles.pmLayout]} />
        <View style={[styles.pnParent, styles.pnLayout]}>
          <View style={[styles.pn, styles.pnLayout]}>
            <View style={[styles.phone, styles.phoneLayout]}>
              <View style={[styles.phoneChild, styles.phoneLayout]} />
              <Image
                style={[styles.phone1Icon, styles.infoItemPosition]}
                contentFit="cover"
                source={require("../assets/phone-12.png")}
              />
            </View>
            <Text style={styles.phoneNumber}>Phone Number</Text>
          </View>
          <View style={[styles.bq, styles.pnLayout]}>
            <Image
              style={[styles.phone, styles.phoneLayout]}
              contentFit="cover"
              source={require("../assets/barcode.png")}
            />
            <Text style={styles.phoneNumber}>Barcode</Text>
          </View>
        </View>
      </View>
      <Text style={styles.anotherPaymentMethods}>Another Payment Methods</Text>
      <Image
        style={styles.buttonNavigationIcon}
        contentFit="cover"
        source={require("../assets/button-navigation2.png")}
      />
      <View style={styles.qrChild} />
      <View style={[styles.up, styles.pnLayout]}>
        <View style={[styles.info, styles.phoneLayout]}>
          <Image
            style={[styles.phone, styles.phoneLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-18.png")}
          />
          <Image
            style={styles.infoItemPosition}
            contentFit="cover"
            source={require("../assets/ellipse-17.png")}
          />
          <Text style={[styles.i, styles.iClr]}>i</Text>
        </View>
        <Text style={[styles.scanForPayment, styles.iClr]}>
          Scan For Payment
        </Text>
      </View>
      <View style={styles.systemDarkStatusBarD}>
        <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        <View style={[styles.battery, styles.timePosition]}>
          <View style={[styles.border, styles.timePosition]} />
          <Image
            style={[styles.capIcon, styles.timePosition]}
            contentFit="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={[styles.capacity, styles.timePosition]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection1.png")}
        />
      </View>
      <View style={styles.systemDarkHomeIndicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pictLayout: {
    height: 514,
    width: 451,
    position: "absolute",
  },
  pmLayout: {
    height: 211,
    width: 414,
    left: 0,
    position: "absolute",
  },
  pnLayout: {
    height: 40,
    position: "absolute",
  },
  phoneLayout: {
    width: 40,
    height: 40,
    top: 0,
    position: "absolute",
  },
  infoItemPosition: {
    height: 30,
    width: 30,
    left: 5,
    top: 5,
    position: "absolute",
  },
  iClr: {
    color: Color.colorWhite,
    textAlign: "center",
    letterSpacing: 0,
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  pictChild: {
    left: 42,
    borderRadius: Border.br_xl,
    width: 192,
    height: 398,
    backgroundColor: Color.colorWhite,
    top: 10,
    position: "absolute",
  },
  image7Icon: {
    top: 116,
    left: 58,
    width: 166,
    height: 164,
    position: "absolute",
  },
  pngitem17474241Icon: {
    left: 0,
    top: 0,
  },
  pict: {
    top: 143,
    left: 69,
  },
  pmChild: {
    top: 0,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
  },
  phoneChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
  },
  phone1Icon: {
    overflow: "hidden",
  },
  phone: {
    left: 0,
  },
  phoneNumber: {
    left: 50,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    top: 9,
    position: "absolute",
  },
  pn: {
    width: 152,
    left: 0,
    top: 0,
  },
  bq: {
    left: 172,
    width: 108,
    top: 0,
  },
  pnParent: {
    top: 76,
    left: 45,
    width: 280,
  },
  pm: {
    top: 633,
  },
  anotherPaymentMethods: {
    top: 657,
    left: 30,
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  buttonNavigationIcon: {
    top: 774,
    height: 122,
    width: 414,
    left: 0,
    position: "absolute",
  },
  qrChild: {
    top: 186,
    left: 52,
    borderStyle: "dashed",
    borderWidth: 5,
    width: 311,
    height: 311,
    borderColor: Color.colorWhite,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  i: {
    left: 18,
    fontFamily: FontFamily.comicNeueBold,
    fontWeight: "700",
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    top: 10,
    position: "absolute",
  },
  info: {
    left: 194,
  },
  scanForPayment: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    top: 9,
    left: 0,
    position: "absolute",
  },
  up: {
    top: 85,
    left: 136,
    width: 234,
  },
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    color: Color.colorWhite,
    textAlign: "center",
    letterSpacing: 0,
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    borderColor: Color.colorWhite,
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
    width: 18,
    height: 7,
    backgroundColor: Color.colorWhite,
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
  qr: {
    backgroundColor: Color.colorMediumseagreen_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default QR;
