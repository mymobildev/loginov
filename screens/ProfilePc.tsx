import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const ProfilePc = () => {
  return (
    <View style={styles.profilePc}>
      <View style={[styles.profil, styles.posterLayout]}>
        <View style={[styles.poster, styles.posterLayout]}>
          <View style={[styles.posterChild, styles.childPosition]} />
          <Image
            style={[styles.posterItem, styles.childPosition]}
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
          <Text style={styles.agusSetiawan}>Agus Setiawan</Text>
          <Text style={[styles.usd, styles.usdFlexBox]}>$ 977.00 (USD)</Text>
        </View>
      </View>
      <Image
        style={[styles.buttonNavigationIcon, styles.profilePcChildLayout]}
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
            source={require("../assets/fingerprint-11.png")}
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
            source={require("../assets/email-11.png")}
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
        <Text style={[styles.signOut1, styles.signOut1Typo]}>Sign Out</Text>
      </View>
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
        <View style={[styles.homeIndicator, styles.homeIndicatorBg]} />
      </View>
      <View style={[styles.profilePcChild, styles.homeIndicatorBg]} />
      <View style={[styles.isi, styles.isiLayout]}>
        <View style={[styles.isiChild, styles.isiLayout]} />
        <View style={[styles.choose, styles.signLayout]}>
          <View style={[styles.ini, styles.iniLayout1]}>
            <LinearGradient
              style={[styles.iniChild, styles.iniChildPosition]}
              locations={[0, 1]}
              colors={["rgba(192, 192, 192, 0.1)", "#c0c0c0"]}
            />
            <Image
              style={[
                styles.photoCameraInterfaceSymbolIcon,
                styles.iniChildPosition,
              ]}
              contentFit="cover"
              source={require("../assets/photocamerainterfacesymbolforbutton-1.png")}
            />
            <Image
              style={[styles.iniItem, styles.iniLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-80.png")}
            />
          </View>
          <View style={[styles.itu, styles.iniLayout1]}>
            <LinearGradient
              style={[styles.iniChild, styles.iniChildPosition]}
              locations={[0, 1]}
              colors={["rgba(192, 192, 192, 0.1)", "#c0c0c0"]}
            />
            <Image
              style={[styles.iniItem, styles.iniLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-801.png")}
            />
            <Image
              style={[
                styles.photoCameraInterfaceSymbolIcon,
                styles.iniChildPosition,
              ]}
              contentFit="cover"
              source={require("../assets/insertpictureicon-1.png")}
            />
          </View>
        </View>
        <Text style={[styles.choosePhoto, styles.timeClr]}>Choose Photo</Text>
        <Image
          style={[styles.xIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/x.png")}
        />
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
  childPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  usdFlexBox: {
    textAlign: "left",
    left: 0,
  },
  profilePcChildLayout: {
    width: 414,
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
    position: "absolute",
  },
  signOut1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  systemPosition: {
    right: 0,
    position: "absolute",
  },
  timeClr: {
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  homeIndicatorBg: {
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  isiLayout: {
    height: 172,
    width: 232,
    position: "absolute",
  },
  iniLayout1: {
    width: 50,
    height: 50,
    top: 0,
    position: "absolute",
  },
  iniChildPosition: {
    display: "none",
    position: "absolute",
  },
  iniLayout: {
    borderRadius: Border.br_8xs,
    width: 50,
    height: 50,
    left: 0,
    top: 0,
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
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    left: 0,
    top: 0,
    position: "absolute",
  },
  usd: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    top: 32,
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
    height: 122,
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
    top: 41,
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
    top: 82,
    width: 354,
  },
  pass: {
    top: 133,
    width: 354,
  },
  fp: {
    top: 174,
    width: 354,
  },
  aguskurn14w4ngmailcom: {
    top: 3,
    left: 149,
    textAlign: "right",
  },
  mail: {
    top: 215,
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
    height: 236,
    width: 354,
    left: 30,
    position: "absolute",
  },
  signOutChild: {
    backgroundColor: Color.colorMediumseagreen_300,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    width: 354,
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
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  signOut: {
    top: 555,
    width: 354,
    left: 30,
  },
  time: {
    marginTop: -7.5,
    left: 21,
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
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
  },
  systemDarkHomeIndicator: {
    bottom: 0,
    height: 37,
    left: 0,
  },
  profilePcChild: {
    width: 414,
    left: 0,
    top: 0,
    height: 896,
  },
  isiChild: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  iniChild: {
    backgroundColor: "transparent",
    borderRadius: Border.br_8xs,
    width: 50,
    height: 50,
    left: 0,
    top: 0,
  },
  photoCameraInterfaceSymbolIcon: {
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  iniItem: {
    position: "absolute",
  },
  ini: {
    left: 0,
  },
  itu: {
    left: 68,
  },
  choose: {
    top: 76,
    left: 57,
    width: 118,
  },
  choosePhoto: {
    left: 54,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: 32,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
  },
  xIcon: {
    top: 13,
    left: 197,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  isi: {
    top: 301,
    left: 91,
  },
  profilePc: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 896,
    backgroundColor: Color.colorWhite,
  },
});

export default ProfilePc;
