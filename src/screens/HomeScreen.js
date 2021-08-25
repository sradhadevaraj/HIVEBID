import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Carousel from "../components/home/Carousel";
import ItemSeparator from "../components/home/ItemSeparator";
import CountTime from "../components/home/CountTime";

import FONTS from "../constants/Fonts";
import COLORS from "../constants/Colors";

import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

const DETAILS = [
  {
    id: "1",
    image: require("../../assets/images/airmax.jpg"),
    title: "Nike Air Max SC Men's..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "STARTING BID",
    startingprice: "₹55",
  },
  {
    id: "2",
    image: require("../../assets/images/Product.jpg"),
    title: "Humansculpture-sk00..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "STARTING BID",
    startingprice: "₹55",
  },
  {
    id: "3",
    image: require("../../assets/images/airmax.jpg"),
    title: "Nike Air Max SC Men's..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "STARTING BID",
    startingprice: "₹55",
  },

  {
    id: "4",
    image: require("../../assets/images/Product.jpg"),
    title: "Humansculpture-sk00..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "STARTING BID",
    startingprice: "₹55",
  },

  {
    id: "5",
    image: require("../../assets/images/airmax.jpg"),
    title: "Nike Air Max SC Men's..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "STARTING BID",
    startingprice: "₹55",
  },
];

const DATA = [
  {
    id: "1",
    image: require("../../assets/images/airmax.jpg"),
    title: "Nike Air Max SC Men's..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "Current Bid",
    startingprice: "₹55",
  },
  {
    id: "2",
    image: require("../../assets/images/Product.jpg"),
    title: "Humansculpture-sk00..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "Current Bid",
    startingprice: "₹55",
  },
  {
    id: "3",
    image: require("../../assets/images/airmax.jpg"),
    title: "Nike Air Max SC Men's..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "Current Bid",
    startingprice: "₹55",
  },

  {
    id: "4",
    image: require("../../assets/images/airmax.jpg"),
    title: "Nike Air Max SC Men's..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "Current Bid",
    startingprice: "₹55",
  },

  {
    id: "5",
    image: require("../../assets/images/airmax.jpg"),
    title: "Nike Air Max SC Men's..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "Current Bid",
    startingprice: "₹55",
  },
];

function HomeScreen({ navigation }) {
  const [liked, setliked] = useState(false);
  const product = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8}>
      <TouchableOpacity
        style={styles.spotContainer}
        onPress={() => navigation.navigate("ProductScreen")}
      >
        <Image
          source={item.image}
          style={{ width: wp("45%"), height: hp("45%") }}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={{ fontFamily: FONTS.BLACK, fontSize: 15 }}>
          {item.title}
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <View style={styles.priceContainer}>
          <Text style={styles.mrpText}>{item.mrp}</Text>
          <Text style={styles.mrpText}>{item.price}</Text>
        </View>
        <View style={styles.bidContainer}>
          <Text style={styles.startingPrice}>{item.startingbid}</Text>
          <Text style={styles.startingPrice}>{item.startingprice}</Text>
        </View>
        <View style={styles.bidContainer}>
          <Text style={{ fontSize: 12 }}>Hourly Bid</Text>
          <TouchableNativeFeedback onPress={() => setliked(!liked)}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={25}
              color={liked ? COLORS.PURPLE : COLORS.PURPLE}
            />
          </TouchableNativeFeedback>
        </View>
      </View>
    </TouchableOpacity>
  );

  const _productrenderitem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8}>
      <TouchableOpacity
        style={styles.hourContainer}
        onPress={() => navigation.navigate("ProductScreen")}
      >
        <Image
          source={item.image}
          style={{ width: wp("45%"), height: hp("45%"), alignSelf: "center" }}
        />
      </TouchableOpacity>
      <CountTime />
      <View style={styles.titleContainer}>
        <Text
          style={{ fontFamily: FONTS.BLACK, fontSize: 15 }}
          numberOfLines={2}
        >
          {item.title}
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <View style={styles.priceContainer}>
          <Text style={styles.mrpText}>{item.mrp}</Text>
          <Text style={styles.mrpText}>{item.price}</Text>
        </View>
        <View style={styles.bidContainer}>
          <Text style={styles.startingPrice}>{item.startingbid}</Text>
          <Text style={styles.startingPrice}>{item.startingprice}</Text>
        </View>
        <View style={{ marginTop: 5, alignSelf: "flex-end" }}>
          <TouchableNativeFeedback onPress={() => setliked(!liked)}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={25}
              color={liked ? COLORS.PURPLE : COLORS.PURPLE}
            />
          </TouchableNativeFeedback>
        </View>
      </View>
    </TouchableOpacity>
  );

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
      <View style={styles.topBg}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={COLORS.LIGHT_GRAY} />
          <TextInput style={styles.input} placeholder="Search" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Carousel />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingtext}>Spot Bid</Text>
        </View>
        <View>
          <FlatList
            data={DETAILS}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <ItemSeparator width={15} />}
            ListHeaderComponent={() => <ItemSeparator width={15} />}
            ListFooterComponent={() => <ItemSeparator width={15} />}
            keyExtractor={(item) => item.id.toString()}
            renderItem={product}
          />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Hourly Bid</Text>
        </View>
        <View>
          <FlatList
            horizontal
            data={DATA}
            renderItem={_productrenderitem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <ItemSeparator width={15} />}
            ListHeaderComponent={() => <ItemSeparator width={15} />}
            ListFooterComponent={() => <ItemSeparator width={15} />}
          />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>12 Hour Bid</Text>
        </View>
        <FlatList
          horizontal
          data={DATA}
          renderItem={_productrenderitem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={15} />}
          ListHeaderComponent={() => <ItemSeparator width={15} />}
          ListFooterComponent={() => <ItemSeparator width={15} />}
        />
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
  topBg: {
    backgroundColor: COLORS.PURPLE,
    width: wp("100%"),
    height: hp("20%"),
  },
  searchContainer: {
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
  headingContainer: {
    marginLeft: 15,
    marginTop: 15,
  },
  headingText: {
    fontFamily: FONTS.BOLD,
    fontSize: 18,
  },
  spotContainer: {
    backgroundColor: COLORS.WHITE,
    width: wp("45%"),
    height: hp("45%"),
    borderRadius: 5,
    elevation: 5,
    marginTop: 20,
  },
  titleContainer: {
    marginTop: 10,
  },
  priceContainer: {
    width: wp("45%"),
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
  mrpText: {
    fontSize: 15,
  },

  startingPrice: {
    fontSize: 12,
  },
  bidContainer: {
    width: wp("45%"),
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hourContainer: {
    backgroundColor: COLORS.WHITE,
    width: wp("45%"),
    height: hp("45%"),
    borderRadius: 5,
    elevation: 5,
    marginTop: 20,
    justifyContent: "center",
  },
  titleContainer: {
    marginTop: 10,
  },
  priceContainer: {
    width: wp("45%"),
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
  mrpText: {
    fontSize: 15,
  },

  startingPrice: {
    fontSize: 12,
  },
  bidContainer: {
    width: wp("45%"),
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
