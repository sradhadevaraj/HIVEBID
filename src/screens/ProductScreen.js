// ProductScreen

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
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

import COLORS from "../constants/Colors";
import FONTS from "../constants/Fonts";

import Timer from "../components/product/Timer";
import Slider from "../components/product/Slider";
import InsetShadow from "react-native-inset-shadow";

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
        <View style={styles.timerContainer}>
          <Timer />
        </View>
      </View>
      <ScrollView>
        <Slider />
        <View style={styles.titlteContainer}>
          <Text style={styles.titleText}>
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
            <Text style={styles.priceText}>₹4,196</Text>
            <Text style={styles.offerText}>5,995</Text>
          </View>
          <TouchableOpacity activeOpacity={0.5} style={styles.currentBid}>
            <Text style={styles.currentBidText}>CURRENT BID</Text>
            <Text style={styles.currentBidPrice}>₹990</Text>
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
          <Text style={styles.offerPrice}>
            Buy this product on offer price without bidding
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} style={styles.offerRate}>
          <Text style={{ alignSelf: "center" }}>Buy at ₹3799</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20, marginLeft: 15 }}>
          <Text style={styles.description}>Description</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
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
  timerContainer: {
    backgroundColor: COLORS.PURPLE,
    width: wp("14%"),
    height: hp("8%"),
    elevation: 3,
  },
  titlteContainer: {
    width: wp("90%"),
    marginTop: 20,
    marginLeft: 15,
  },
  titleText: {
    fontFamily: FONTS.BOLD,
    fontSize: 16,
  },
  currentBid: {
    backgroundColor: COLORS.PURPLE,
    width: wp("20%"),
    height: hp("10%"),
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  priceText: {
    fontFamily: FONTS.BOLD,
    fontSize: 18,
  },
  offerText: {
    fontFamily: FONTS.REGULAR,
    fontSize: 15,
    marginLeft: 6,
    textDecorationLine: "line-through",
  },
  currentBidText: {
    fontFamily: FONTS.REGULAR,
    fontSize: 10,
    color: COLORS.WHITE,
  },
  currentBidPrice: {
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
  offerPrice: {
    fontFamily: FONTS.REGULAR,
    fontSize: 12,
    color: COLORS.BLACK,
  },
  offerRate: {
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
  descriptionText: {
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 20,
  },
  descriptionContainer: {
    width: wp("90%"),
    marginTop: 10,
    marginVertical: 5,
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
