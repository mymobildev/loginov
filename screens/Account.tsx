import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Account = () => {
  return (
    <View style={styles.account}>
      <View style={[styles.profil, styles.posterLayout]}>
        <View style={[styles.poster, styles.posterLayout]}>
          <View style={[styles.posterChild, styles.posterChildPosition]} />
          <Image
            style={[styles.posterItem, styles.posterChildPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-371.png")}
          />
        </View>
        <Image
          style={styles.profilChild}
          contentFit="cover"
          source={require("../assets/rectangle-51.png")}
        />
        <View style={styles.text}>
          <Text style={[styles.agusSetiawan, styles.timeFlexBox]}>
            Agus Setiawan
          </Text>
          <Text style={[styles.usd, styles.usdFlexBox]}>$ 977.00 (USD)</Text>
        </View>
      </View>
      <Image
        style={styles.buttonNavigationIcon}
        contentFit="cover"
        source={require("../assets/button-navigation1.png")}
      />
      <Image
        style={styles.opsiButtonIcon}
        contentFit="cover"
        source={require("../assets/opsi-button.png")}
      />
      <View style={styles.feature}>
        <View style={[styles.qr, styles.qrPosition]}>
          <Text style={styles.qrCode}>QR Code</Text>
          <Image
            style={[styles.qrIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/qr.png")}
          />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <View style={[styles.barcode, styles.qrPosition]}>
          <Text style={styles.qrCode}>Barcode</Text>
          <Image
            style={[styles.barcode1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/barcode-1.png")}
          />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <View style={[styles.pass, styles.qrPosition]}>
          <Text style={styles.qrCode}>Password</Text>
          <Image
            style={[styles.barcode1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/padlock-1.png")}
          />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <View style={[styles.fp, styles.qrPosition]}>
          <Text style={styles.qrCode}>Fingerprint</Text>
          <Image
            style={[styles.barcode1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/fingerprint-1.png")}
          />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <View style={[styles.mail, styles.qrPosition]}>
          <Text style={styles.qrCode}>Mail</Text>
          <Image
            style={[styles.barcode1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/email-1.png")}
          />
          <Text style={[styles.aguskurn14w4ngmailcom, styles.text1Typo]}>
            Aguskurn14w4n@gmail.com
          </Text>
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <View style={[styles.bala, styles.qrPosition]}>
          <View style={[styles.balance, styles.qrPosition]}>
            <Image
              style={[styles.qrIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/duit.png")}
            />
            <Text style={styles.qrCode}>Balance</Text>
          </View>
          <View style={[styles.rifght, styles.iconLayout]}>
            <Text style={[styles.text1, styles.text1Typo]}>$ 155.00</Text>
            <Image
              style={[styles.chevronRightIcon5, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/chevronright.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.signOut, styles.signLayout]}>
        <View style={[styles.signOutChild, styles.signLayout]} />
        <Image
          style={styles.signOutItem}
          contentFit="cover"
          source={require("../assets/group-3.png")}
        />
        <Text style={styles.signOut1}>Sign Out</Text>
      </View>
      <View style={styles.systemDarkStatusBarD}>
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
  posterLayout: {
    height: 120,
    width: 354,
    position: "absolute",
  },
  posterChildPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  timeFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  usdFlexBox: {
    textAlign: "left",
    left: 0,
  },
  qrPosition: {
    height: 21,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    position: "absolute",
  },
  signLayout: {
    height: 50,
    width: 354,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  posterChild: {
    backgroundColor: Color.colorMediumseagreen_100,
    height: 120,
    width: 354,
    position: "absolute",
  },
  posterItem: {
    height: 92,
    width: 354,
    position: "absolute",
  },
  poster: {
    left: 0,
    top: 0,
  },
  profilChild: {
    top: 30,
    borderRadius: Border.br_3xs,
    width: 60,
    height: 60,
    left: 33,
    position: "absolute",
  },
  agusSetiawan: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  usd: {
    top: 32,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  text: {
    top: 34,
    left: 110,
    width: 130,
    height: 53,
    position: "absolute",
  },
  profil: {
    top: 99,
    left: 30,
  },
  buttonNavigationIcon: {
    top: 774,
    width: 414,
    height: 122,
    left: 0,
    position: "absolute",
  },
  opsiButtonIcon: {
    top: 115,
    left: 365,
    width: 6,
    height: 23,
    position: "absolute",
  },
  qrCode: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontWeight: "700",
    letterSpacing: 0,
    left: 33,
    top: 0,
    position: "absolute",
  },
  qrIcon: {
    width: 20,
    height: 20,
    top: 1,
    left: 0,
  },
  chevronRightIcon: {
    left: 334,
    width: 20,
    height: 20,
    top: 1,
    overflow: "hidden",
  },
  qr: {
    top: 51,
    width: 354,
  },
  barcode1Icon: {
    width: 20,
    height: 20,
    top: 1,
    left: 0,
    overflow: "hidden",
  },
  barcode: {
    top: 102,
    width: 354,
  },
  pass: {
    top: 163,
    width: 354,
  },
  fp: {
    top: 214,
    width: 354,
  },
  aguskurn14w4ngmailcom: {
    top: 3,
    left: 149,
    textAlign: "right",
  },
  mail: {
    top: 265,
    width: 354,
  },
  balance: {
    width: 91,
    top: 0,
  },
  text1: {
    top: 2,
    textAlign: "left",
    left: 0,
  },
  chevronRightIcon5: {
    left: 64,
    width: 20,
    height: 20,
    top: 0,
    overflow: "hidden",
  },
  rifght: {
    left: 270,
    width: 84,
    top: 1,
  },
  bala: {
    top: 0,
    width: 354,
  },
  feature: {
    top: 269,
    height: 286,
    width: 354,
    left: 30,
    position: "absolute",
  },
  signOutChild: {
    backgroundColor: Color.colorMediumseagreen_300,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  signOutItem: {
    top: 5,
    left: 8,
    width: 40,
    height: 40,
    position: "absolute",
  },
  signOut1: {
    top: 15,
    left: 275,
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  signOut: {
    top: 605,
    left: 30,
  },
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorBlack,
    width: 54,
    textAlign: "center",
    letterSpacing: 0,
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
  account: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Account;
