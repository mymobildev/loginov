import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const BalanceMore = () => {
  return (
    <View style={styles.balanceMore}>
      <View style={[styles.balanceMoreInner, styles.back1Position]}>
        <View style={styles.groupWrapper}>
          <View style={[styles.group, styles.groupPosition]}>
            <View style={styles.group1}>
              <View style={[styles.group, styles.groupPosition]}>
                <View style={[styles.group, styles.groupPosition]}>
                  <View style={[styles.group4, styles.groupPosition]}>
                    <Image
                      style={[styles.rectangleIcon, styles.groupIconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle.png")}
                    />
                    <Image
                      style={[styles.rectangleIcon1, styles.groupIconLayout]}
                      contentFit="cover"
                      source={require("../assets/rectangle.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.group, styles.groupPosition]}>
              <Image
                style={[styles.groupIcon, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group.png")}
              />
              <View style={styles.group6}>
                <View style={[styles.group7, styles.groupPosition]}>
                  <Image
                    style={[styles.rectangleIcon2, styles.groupIconLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle1.png")}
                  />
                  <View style={[styles.group, styles.groupPosition]}>
                    <View style={[styles.group, styles.groupPosition]}>
                      <Text style={[styles.cash, styles.cashPosition]}>
                        CASH
                      </Text>
                      <Image
                        style={[styles.groupIcon, styles.groupIconLayout]}
                        contentFit="cover"
                        source={require("../assets/image-11.png")}
                      />
                      <Image
                        style={[styles.upTo50Off, styles.groupIconLayout]}
                        contentFit="cover"
                        source={require("../assets/up-to-50-off.png")}
                      />
                      <Text style={styles.back}>BACK</Text>
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.cashPosition]}
                  contentFit="cover"
                  source={require("../assets/group2.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group3.png")}
                />
                <Image
                  style={[styles.groupIcon4, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group4.png")}
                />
              </View>
              <Image
                style={[styles.groupIcon5, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group5.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.back1, styles.back1Position]}>
        <Text style={styles.moneyHistory}>Money History</Text>
        <Image
          style={[styles.arrowLeftIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrowleft.png")}
        />
      </View>
      <View style={styles.isi}>
        <View style={styles.isi1}>
          <View style={[styles.orderan1, styles.orderan1Position]}>
            <Text style={[styles.agustus2021, styles.textTypo]}>
              14 Agustus 2021
            </Text>
            <View style={[styles.orderan1Child, styles.orderan1Position]} />
            <View style={[styles.name, styles.nameLayout]}>
              <Text style={[styles.mcdonalds, styles.mcdonaldsTypo]}>
                McDonald’s
              </Text>
              <Text style={[styles.text, styles.textClr]}>$ 34.00</Text>
            </View>
            <Image
              style={[styles.chevronRightIcon, styles.textPosition]}
              contentFit="cover"
              source={require("../assets/chevronright.png")}
            />
          </View>
          <Image
            style={[styles.image2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
          <View style={[styles.orderan2, styles.orderan2Position]}>
            <Text style={[styles.agustus2021, styles.textTypo]}>
              13 Agustus 2021
            </Text>
            <View style={[styles.orderan1Child, styles.orderan1Position]} />
            <View style={[styles.name, styles.nameLayout]}>
              <Text style={[styles.mcdonalds, styles.mcdonaldsTypo]}>
                McDonald’s
              </Text>
              <Text style={[styles.text, styles.textClr]}>$ 34.00</Text>
            </View>
            <Image
              style={[styles.chevronRightIcon, styles.textPosition]}
              contentFit="cover"
              source={require("../assets/chevronright.png")}
            />
          </View>
          <Image
            style={[styles.image3Icon, styles.orderan2Position]}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
          <View style={[styles.orderan3, styles.orderan3Position]}>
            <Text style={[styles.agustus2021, styles.textTypo]}>
              11 Agustus 2021
            </Text>
            <View style={[styles.orderan1Child, styles.orderan1Position]} />
            <View style={[styles.name, styles.nameLayout]}>
              <Text style={[styles.mcdonalds, styles.mcdonaldsTypo]}>
                McDonald’s
              </Text>
              <Text style={[styles.text, styles.textClr]}>$ 34.00</Text>
            </View>
            <Image
              style={[styles.chevronRightIcon, styles.textPosition]}
              contentFit="cover"
              source={require("../assets/chevronright.png")}
            />
          </View>
          <Image
            style={[styles.image4Icon, styles.orderan3Position]}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
        </View>
        <View style={[styles.isi2, styles.isi2Position]}>
          <View style={[styles.orderan1, styles.orderan1Position]}>
            <Text style={[styles.agustus2021, styles.textTypo]}>
              17 Agustus 2021
            </Text>
            <View style={[styles.orderan1Child, styles.orderan1Position]} />
            <View style={[styles.name, styles.nameLayout]}>
              <Text style={[styles.mcdonalds, styles.mcdonaldsTypo]}>
                McDonald’s
              </Text>
              <Text style={[styles.text, styles.textClr]}>$ 34.00</Text>
            </View>
            <Image
              style={[styles.chevronRightIcon, styles.textPosition]}
              contentFit="cover"
              source={require("../assets/chevronright.png")}
            />
          </View>
          <Image
            style={[styles.image2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
          <View style={[styles.orderan2, styles.orderan2Position]}>
            <Text style={[styles.agustus2021, styles.textTypo]}>
              17 Agustus 2021
            </Text>
            <View style={[styles.orderan1Child, styles.orderan1Position]} />
            <View style={[styles.name4, styles.nameLayout]}>
              <Text style={[styles.mcdonalds, styles.mcdonaldsTypo]}>Game</Text>
              <Text style={[styles.text, styles.textClr]}>$ 10.00</Text>
            </View>
            <Image
              style={[styles.chevronRightIcon, styles.textPosition]}
              contentFit="cover"
              source={require("../assets/chevronright.png")}
            />
            <Image
              style={styles.gamepad1Icon}
              contentFit="cover"
              source={require("../assets/gamepad-12.png")}
            />
          </View>
          <View style={[styles.orderan3, styles.orderan3Position]}>
            <Text style={[styles.agustus2021, styles.textTypo]}>
              17 Agustus 2021
            </Text>
            <View style={[styles.orderan1Child, styles.orderan1Position]} />
            <Image
              style={styles.gamepad1Icon}
              contentFit="cover"
              source={require("../assets/phone-12.png")}
            />
            <View style={[styles.name5, styles.nameLayout]}>
              <Text
                style={[styles.mcdonalds, styles.mcdonaldsTypo]}
              >{`Credit & Quota`}</Text>
              <Text style={[styles.text, styles.textClr]}>$ 34.00</Text>
            </View>
            <Image
              style={[styles.chevronRightIcon, styles.textPosition]}
              contentFit="cover"
              source={require("../assets/chevronright.png")}
            />
          </View>
          <View style={[styles.orderan4, styles.orderan4Position]}>
            <Text style={[styles.agustus2021, styles.textTypo]}>
              16 Agustus 2021
            </Text>
            <View style={[styles.orderan1Child, styles.orderan1Position]} />
            <View style={[styles.name, styles.nameLayout]}>
              <Text style={[styles.mcdonalds, styles.mcdonaldsTypo]}>
                McDonald’s
              </Text>
              <Text style={[styles.text, styles.textClr]}>$ 34.00</Text>
            </View>
            <Image
              style={[styles.chevronRightIcon, styles.textPosition]}
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
            <Text style={[styles.agustus2021, styles.textTypo]}>
              15 Agustus 2021
            </Text>
            <View style={[styles.orderan1Child, styles.orderan1Position]} />
            <View style={[styles.name, styles.nameLayout]}>
              <Text style={[styles.mcdonalds, styles.mcdonaldsTypo]}>
                McDonald’s
              </Text>
              <Text style={[styles.text, styles.textClr]}>$ 34.00</Text>
            </View>
            <Image
              style={[styles.chevronRightIcon, styles.textPosition]}
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
      </View>
      <View style={[styles.systemDarkStatusBarD, styles.isi2Position]}>
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
  back1Position: {
    left: 30,
    position: "absolute",
  },
  groupPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cashPosition: {
    display: "none",
    position: "absolute",
  },
  iconLayout1: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  orderan1Position: {
    height: 50,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoMedium,
    left: 0,
    fontWeight: "500",
    textAlign: "left",
  },
  nameLayout: {
    height: 37,
    position: "absolute",
  },
  mcdonaldsTypo: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  textPosition: {
    top: 16,
    position: "absolute",
  },
  iconLayout: {
    width: 67,
    left: 137,
  },
  orderan2Position: {
    top: 70,
    height: 50,
    position: "absolute",
  },
  orderan3Position: {
    top: 140,
    height: 50,
    position: "absolute",
  },
  isi2Position: {
    top: 0,
    left: 0,
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
  rectangleIcon: {
    left: "50%",
    width: "50%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
  },
  rectangleIcon1: {
    right: "50%",
    width: "50%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  group4: {
    opacity: 0.6,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  group: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  group1: {
    height: "6.16%",
    width: "78.96%",
    top: "87.39%",
    right: "10.63%",
    bottom: "6.45%",
    left: "10.41%",
    position: "absolute",
  },
  groupIcon: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  rectangleIcon2: {
    height: "79.78%",
    width: "63.52%",
    top: "8.72%",
    right: "20.14%",
    bottom: "11.49%",
    left: "16.33%",
  },
  cash: {
    height: "36.74%",
    width: "69.79%",
    top: "17.03%",
    left: "20.27%",
    fontSize: 110,
    fontWeight: "900",
    fontFamily: FontFamily.montserratBlack,
    transform: [
      {
        rotate: "-3.7deg",
      },
    ],
    color: Color.colorWhite,
    display: "none",
    textAlign: "left",
  },
  upTo50Off: {
    height: "7.72%",
    width: "40.15%",
    top: "12.67%",
    right: "28.08%",
    bottom: "79.61%",
    left: "31.76%",
  },
  back: {
    height: "38.93%",
    width: "71.66%",
    top: "42.87%",
    left: "19.5%",
    fontSize: 116,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    display: "none",
    transform: [
      {
        rotate: "-3.7deg",
      },
    ],
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  group7: {
    width: "48.94%",
    right: "23.67%",
    left: "27.39%",
    position: "absolute",
  },
  groupIcon1: {
    height: "62.5%",
    width: "77.54%",
    top: "15.27%",
    right: "10.17%",
    bottom: "22.23%",
    left: "12.29%",
  },
  groupIcon2: {
    top: "-2.43%",
    left: "17.03%",
    width: 0,
    height: 0,
  },
  groupIcon3: {
    height: "90.52%",
    top: "2.43%",
    bottom: "7.05%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupIcon4: {
    height: "87.16%",
    width: "59.37%",
    top: "4.78%",
    right: "20.98%",
    bottom: "8.05%",
    left: "19.65%",
  },
  group6: {
    height: "68.62%",
    width: "70.24%",
    top: "14.74%",
    right: "15.82%",
    bottom: "16.64%",
    left: "13.94%",
    position: "absolute",
  },
  groupIcon5: {
    height: "14.74%",
    width: "20.77%",
    top: "70.75%",
    right: "39.59%",
    bottom: "14.51%",
    left: "39.64%",
  },
  groupWrapper: {
    height: "144.75%",
    width: "127.29%",
    top: "-25%",
    right: "-13.73%",
    bottom: "-19.75%",
    left: "-13.56%",
    position: "absolute",
  },
  balanceMoreInner: {
    top: 132,
    borderRadius: Border.br_xl,
    width: 354,
    height: 120,
    overflow: "hidden",
  },
  moneyHistory: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMediumseagreen_100,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    top: 0,
    textAlign: "left",
    left: 30,
    position: "absolute",
  },
  arrowLeftIcon: {
    top: 4,
    left: 0,
    position: "absolute",
  },
  back1: {
    top: 75,
    width: 160,
    height: 27,
  },
  agustus2021: {
    top: 17,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    position: "absolute",
    color: Color.colorMediumseagreen_100,
  },
  orderan1Child: {
    left: 145,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    width: 50,
  },
  mcdonalds: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_200,
    left: 0,
    top: 0,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  text: {
    top: 16,
    position: "absolute",
    fontFamily: FontFamily.robotoMedium,
    left: 0,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
  },
  name: {
    width: 70,
    left: 207,
    top: 7,
    height: 37,
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
  },
  image2Icon: {
    height: 50,
    top: 0,
    position: "absolute",
  },
  orderan2: {
    width: 332,
    left: 0,
  },
  image3Icon: {
    width: 67,
    left: 137,
  },
  orderan3: {
    width: 332,
    left: 0,
  },
  image4Icon: {
    width: 67,
    left: 137,
  },
  isi1: {
    top: 350,
    height: 190,
    width: 332,
    left: 0,
    position: "absolute",
  },
  name4: {
    width: 59,
    left: 207,
    top: 7,
    height: 37,
  },
  gamepad1Icon: {
    top: 10,
    left: 155,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  name5: {
    width: 87,
    left: 207,
    top: 7,
    height: 37,
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
  isi2: {
    height: 330,
    width: 332,
    left: 0,
    position: "absolute",
  },
  isi: {
    top: 282,
    left: 41,
    height: 540,
    width: 332,
    position: "absolute",
  },
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    width: 54,
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
    position: "absolute",
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
    right: 0,
    left: 0,
  },
  balanceMore: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default BalanceMore;
