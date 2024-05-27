import React, { memo } from "react";
import { Image, StyleSheet, View } from "react-native";
import Orderan2 from "./Orderan2";
import Orderan1 from "./Orderan1";
import Orderan from "./Orderan";

const Isi1 = memo(() => {
  return (
    <View style={styles.isi}>
      <View style={[styles.isi1, styles.isiPosition]}>
        <Orderan2 agustus2021="14 Agustus 2021" />
        <Image
          style={[styles.image2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Orderan2 agustus2021="13 Agustus 2021" propTop={70} />
        <Image
          style={[styles.image3Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Orderan2 agustus2021="11 Agustus 2021" propTop={140} />
        <Image
          style={[styles.image4Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
      </View>
      <View style={[styles.isi2, styles.isiPosition]}>
        <Orderan2 agustus2021="17 Agustus 2021" />
        <Image
          style={[styles.image2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Orderan1 />
        <Orderan />
        <Orderan2 agustus2021="16 Agustus 2021" propTop={210} />
        <Image
          style={[styles.image5Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Orderan2 agustus2021="15 Agustus 2021" propTop={280} />
        <Image
          style={[styles.image6Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  isiPosition: {
    left: 0,
    width: 332,
    position: "absolute",
  },
  iconLayout: {
    height: 50,
    width: 67,
    left: 137,
    position: "absolute",
  },
  image2Icon: {
    top: 0,
  },
  image3Icon: {
    top: 70,
  },
  image4Icon: {
    top: 140,
  },
  isi1: {
    top: 350,
    height: 190,
  },
  image5Icon: {
    top: 210,
  },
  image6Icon: {
    top: 280,
  },
  isi2: {
    height: 330,
    top: 0,
  },
  isi: {
    top: 282,
    left: 41,
    height: 540,
    width: 332,
    position: "absolute",
  },
});

export default Isi1;
