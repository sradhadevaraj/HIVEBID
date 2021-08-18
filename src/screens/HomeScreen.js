import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

import Carousel from "../components/home/Carousel";
import SpotBidCard from "../components/home/SpotBidCard";
import HourlyBid from "../components/home/HourlyBid";

import FONTS from "../constants/Fonts";
import COLORS from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={COLORS.PURPLE}
      />
      <View
        style={{
          backgroundColor: COLORS.PURPLE,
          width: wp("100%"),
          height: hp("12%"),
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Ionicons
            name="menu"
            size={24}
            color={COLORS.WHITE}
            onPress={() => navigation.openDrawer()}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="notifications"
            size={22}
            color={COLORS.WHITE}
            onPress={() => navigation.navigate("NotificationScreen")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.topbg}>
        <View style={styles.searchcontainer}>
          <Ionicons name="search" size={20} color={COLORS.LIGHT_GRAY} />
          <TextInput style={styles.input} placeholder="Search" />
        </View>
      </View>
      <ScrollView>
        <View>
          <Carousel />
        </View>
        <View style={styles.headingcontainer}>
          <Text style={styles.headingtext}>Spot Bid</Text>
        </View>
        <SpotBidCard />
        <View style={styles.headingcontainer}>
          <Text style={styles.headingtext}>Hourly Bid</Text>
        </View>
        <HourlyBid />
        <View style={styles.headingcontainer}>
          <Text style={styles.headingtext}>12 Hour Bid</Text>
        </View>
        <HourlyBid />
      </ScrollView>
    </View>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  topbg: {
    backgroundColor: COLORS.PURPLE,
    width: wp("100%"),
    height: hp("20%"),
  },
  searchcontainer: {
    backgroundColor: COLORS.WHITE,
    width: wp("90%"),
    height: hp("11%"),
    alignSelf: "center",
    borderRadius: 35,
    elevation: 3,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  input: {
    fontSize: 16,
    marginLeft: 5,
  },
  headingcontainer: {
    marginLeft: 15,
    marginTop: 15,
  },
  headingtext: {
    fontFamily: FONTS.BOLD,
    fontSize: 18,
  },
});
