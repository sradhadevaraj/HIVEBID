import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  FlatList,
} from "react-native";

import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

import COLORS from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FONTS from "../../constants/Fonts";
import IMAGES from "../../constants/Images";

import ItemSeparator from "../home/ItemSeparator";

const DETAILS = [
  {
    id: "1",
    image: require("../../../assets/images/airmax.jpg"),
    title: " Nike Air Max SC Men's Sh..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "STARTING BID",
    startingprice: "₹55",
  },
  {
    id: "2",
    image: require("../../../assets/images/airmax.jpg"),
    title: " iiii",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "STARTING BID",
    startingprice: "₹55",
  },
  {
    id: "3",
    image: require("../../../assets/images/airmax.jpg"),
    title: " Nike Air Max SC Men's Sh..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "STARTING BID",
    startingprice: "₹55",
  },

  {
    id: "4",
    image: require("../../../assets/images/airmax.jpg"),
    title: " Nike Air Max SC Men's Sh..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "STARTING BID",
    startingprice: "₹55",
  },

  {
    id: "5",
    image: require("../../../assets/images/airmax.jpg"),
    title: " Nike Air Max SC Men's Sh..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "STARTING BID",
    startingprice: "₹55",
  },
];

function SpotBidCard({ navigation }) {
  const [liked, setliked] = useState(false);
  const product = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("ProductScreen")}
      >
        <Image
          source={IMAGES.PRODUCT}
          style={{ width: wp("50%"), height: hp("40%") }}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={{ fontFamily: FONTS.BLACK, fontSize: 15 }}>
          Nike Air Max SC Men's Sh..
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <View style={styles.priceContainer}>
          <Text style={styles.mrpText}>MRP</Text>
          <Text style={styles.mrpText}>₹1000</Text>
        </View>
        <View style={styles.bidContainer}>
          <Text style={styles.startingPrice}>STARTING BID</Text>
          <Text style={styles.startingPrice}>₹55</Text>
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

  return (
    <View>
      <FlatList
        data={DETAILS}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        ListHeaderComponent={() => <ItemSeparator width={15} />}
        ListFooterComponent={() => <ItemSeparator width={15} />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={product}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    width: wp("50%"),
    height: hp("40%"),
    borderRadius: 5,
    elevation: 5,
    marginTop: 20,
  },
  titleContainer: {
    marginTop: 10,
  },
  priceContainer: {
    width: wp("50%"),
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
    width: wp("50%"),
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
  },
});
export default SpotBidCard;
