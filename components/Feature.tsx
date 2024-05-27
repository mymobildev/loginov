import React, { useMemo, memo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

export type FeatureType = {
  fingerprint1?: ImageSourcePropType;
  email1?: ImageSourcePropType;

  /** Style props */
  padlock1IconHeight?: number | string;
  chevronRightIconTop?: number | string;
  chevronRightIconTop1?: number | string;
  aguskurn14w4ngmailcomTop?: number | string;
  duitIconTop?: number | string;
  chevronRightIconTop2?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Feature = memo(
  ({
    fingerprint1,
    email1,
    padlock1IconHeight,
    chevronRightIconTop,
    chevronRightIconTop1,
    aguskurn14w4ngmailcomTop,
    duitIconTop,
    chevronRightIconTop2,
  }: FeatureType) => {
    const featureStyle = useMemo(() => {
      return {
        ...getStyleValue("height", padlock1IconHeight),
      };
    }, [padlock1IconHeight]);

    const qrStyle = useMemo(() => {
      return {
        ...getStyleValue("top", chevronRightIconTop),
      };
    }, [chevronRightIconTop]);

    const barcodeStyle = useMemo(() => {
      return {
        ...getStyleValue("top", chevronRightIconTop1),
      };
    }, [chevronRightIconTop1]);

    const passStyle = useMemo(() => {
      return {
        ...getStyleValue("top", aguskurn14w4ngmailcomTop),
      };
    }, [aguskurn14w4ngmailcomTop]);

    const fpStyle = useMemo(() => {
      return {
        ...getStyleValue("top", duitIconTop),
      };
    }, [duitIconTop]);

    const mailStyle = useMemo(() => {
      return {
        ...getStyleValue("top", chevronRightIconTop2),
      };
    }, [chevronRightIconTop2]);

    return (
      <View style={[styles.feature, featureStyle]}>
        <View style={[styles.qr, styles.qrPosition, qrStyle]}>
          <Text style={styles.qrCode}>QR Code</Text>
          <Image
            style={[styles.qrIcon, styles.qrIconPosition]}
            resizeMode="cover"
            source={require("../assets/qr.png")}
          />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <View style={[styles.barcode, styles.qrPosition, barcodeStyle]}>
          <Text style={styles.qrCode}>Barcode</Text>
          <Image
            style={[styles.barcode1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/barcode-1.png")}
          />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <View style={[styles.pass, styles.qrPosition, passStyle]}>
          <Text style={styles.qrCode}>Password</Text>
          <Image
            style={[styles.barcode1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/padlock-1.png")}
          />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <View style={[styles.fp, styles.qrPosition, fpStyle]}>
          <Text style={styles.qrCode}>Fingerprint</Text>
          <Image
            style={[styles.barcode1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={fingerprint1}
          />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <View style={[styles.mail, styles.qrPosition, mailStyle]}>
          <Text style={styles.qrCode}>Mail</Text>
          <Image
            style={[styles.barcode1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={email1}
          />
          <Text style={[styles.aguskurn14w4ngmailcom, styles.textTypo]}>
            Aguskurn14w4n@gmail.com
          </Text>
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <View style={[styles.bala, styles.qrPosition]}>
          <View style={[styles.balance, styles.qrPosition]}>
            <Image
              style={[styles.qrIcon, styles.qrIconPosition]}
              resizeMode="cover"
              source={require("../assets/duit.png")}
            />
            <Text style={styles.qrCode}>Balance</Text>
          </View>
          <View style={[styles.rifght, styles.qrIconPosition]}>
            <Text style={[styles.text, styles.textTypo]}>$ 155.00</Text>
            <Image
              style={[styles.chevronRightIcon5, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/chevronright.png")}
            />
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  qrPosition: {
    height: 21,
    left: 0,
    position: "absolute",
  },
  qrIconPosition: {
    height: 20,
    top: 1,
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    height: 20,
    width: 20,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.colorGray_200,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  qrCode: {
    left: 33,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.colorGray_200,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  qrIcon: {
    width: 20,
    height: 20,
    left: 0,
  },
  chevronRightIcon: {
    left: 334,
    top: 1,
    overflow: "hidden",
  },
  qr: {
    top: 41,
    width: 354,
  },
  barcode1Icon: {
    top: 1,
    overflow: "hidden",
    left: 0,
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
  text: {
    top: 2,
    textAlign: "left",
    left: 0,
  },
  chevronRightIcon5: {
    left: 64,
    top: 0,
  },
  rifght: {
    left: 270,
    width: 84,
  },
  bala: {
    top: 0,
    width: 354,
  },
  feature: {
    top: 269,
    left: 30,
    height: 236,
    width: 354,
    position: "absolute",
  },
});

export default Feature;
