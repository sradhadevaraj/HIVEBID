import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../constants/Colors";
import FONTS from "../constants/Fonts";

import Timer from "../components/product/Timer";
import Slider from "../components/product/Slider";
import InsetShadow from "react-native-inset-shadow";

import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function ProductScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={COLORS.PURPLE}
      />
      <View
        style={{
          backgroundColor: COLORS.WHITE,
          width: wp("100%"),
          height: hp("12%"),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="close"
            color={COLORS.BLACK}
            size={24}
            onPress={() => navigation.navigate("HomeScreen")}
          />
        </TouchableOpacity>
        <View style={styles.timercontainer}>
          <Timer />
        </View>
      </View>
      <ScrollView>
        <Slider />
        <View style={styles.titltecontainer}>
          <Text style={styles.titletext}>
            Nike Air Max SC Men's Shoe Running Shoes For Men (Black)
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.pricetext}>₹4,196</Text>
            <Text style={styles.offertext}>5,995</Text>
          </View>
          <TouchableOpacity activeOpacity={0.5} style={styles.currentbid}>
            <Text style={styles.currentbidtext}>CURRENT BID</Text>
            <Text style={styles.currentbidprice}>₹990</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <InsetShadow>
            <View
              style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}
            >
              <Text>Rakesh placed the current bid</Text>
            </View>
          </InsetShadow>
        </View>
        <View style={{ alignSelf: "center", marginTop: 20 }}>
          <Text style={styles.offerprice}>
            Buy this product on offer price without bidding
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} style={styles.offerrate}>
          <Text style={{ alignSelf: "center" }}>Buy at ₹3799</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20, marginLeft: 15 }}>
          <Text style={styles.description}>Description</Text>
          <View style={styles.descriptioncontainer}>
            <Text style={styles.descriptiontext}>
              With its easy going lines, heritage track look and of course,
              visible Air cushioning, the Nike Air Max SC is the perfect finish
              to any outfit. The rich mixture of materials adds depth while
              making it a durable and lightweight shoe for everyday wear.
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity activeOpacity={0.5} style={styles.box2}>
        <Text
          style={{
            color: COLORS.WHITE,
            fontFamily: FONTS.BOLD,
            fontSize: 16,
          }}
        >
          Your Bid Amount
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  timercontainer: {
    backgroundColor: COLORS.PURPLE,
    width: wp("14%"),
    height: hp("8%"),
    elevation: 3,
  },
  titltecontainer: {
    width: wp("90%"),
    marginTop: 20,
    marginLeft: 15,
  },
  titletext: {
    fontFamily: FONTS.BOLD,
    fontSize: 16,
  },
  currentbid: {
    backgroundColor: COLORS.PURPLE,
    width: wp("20%"),
    height: hp("10%"),
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  pricetext: {
    fontFamily: FONTS.BOLD,
    fontSize: 18,
  },
  offertext: {
    fontFamily: FONTS.REGULAR,
    fontSize: 15,
    marginLeft: 6,
    textDecorationLine: "line-through",
  },
  currentbidtext: {
    fontFamily: FONTS.REGULAR,
    fontSize: 10,
    color: COLORS.WHITE,
  },
  currentbidprice: {
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
    color: COLORS.WHITE,
  },
  box: {
    backgroundColor: COLORS.WHITE,
    width: wp("100%"),
    height: hp("10%"),
    justifyContent: "center",
    marginTop: 25,
  },
  offerprice: {
    fontFamily: FONTS.REGULAR,
    fontSize: 12,
    color: COLORS.BLACK,
  },
  offerrate: {
    width: wp("90%"),
    height: hp("10%"),
    borderColor: COLORS.PURPLE,
    borderWidth: 1,
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  description: {
    fontFamily: FONTS.BOLD,
    fontSize: 16,
  },
  descriptiontext: {
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 20,
  },
  descriptioncontainer: {
    width: wp("90%"),
    marginTop: 10,
  },
  box2: {
    backgroundColor: COLORS.PURPLE,
    width: wp("100%"),
    height: hp("10%"),
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProductScreen;
