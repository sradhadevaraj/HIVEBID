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
import ItemSeparator from "../home/ItemSeparator";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "../../constants/Colors";

import FONTS from "../../constants/Fonts";
import ProgressIndicatar from "../../screens/ProgressIndicatar";
import TimerMin from "./TimerMin";

const DATA = [
  {
    id: "1",
    image: require("../../../assets/images/airmax.jpg"),
    title: " Nike Air Max SC Men's Sh..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "Current Bid",
    startingprice: "₹55",
  },
  {
    id: "2",
    image: require("../../../assets/images/Product.jpg"),
    title: "Humansculpture-sk001-..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "Current Bid",
    startingprice: "₹55",
  },
  {
    id: "3",
    image: require("../../../assets/images/airmax.jpg"),
    title: " Nike Air Max SC Men's Sh..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "Current Bid",
    startingprice: "₹55",
  },

  {
    id: "4",
    image: require("../../../assets/images/airmax.jpg"),
    title: " Nike Air Max SC Men's Sh..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "Current Bid",
    startingprice: "₹55",
  },

  {
    id: "5",
    image: require("../../../assets/images/airmax.jpg"),
    title: " Nike Air Max SC Men's Sh..",
    mrp: "MRP",
    price: "₹1000",
    startingbid: "Current Bid",
    startingprice: "₹55",
  },
];

function HourlyBid(props) {
  const [liked, setliked] = useState(false);
  const _productrenderitem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <Image
          source={item.image}
          style={{ width: wp("50%"), height: hp("40%"), alignSelf: "center" }}
        />
      </View>
      <TimerMin />
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
        <View style={styles.bidContainer}>
          <ProgressIndicatar />
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
        horizontal
        data={DATA}
        renderItem={_productrenderitem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        ListHeaderComponent={() => <ItemSeparator width={15} />}
        ListFooterComponent={() => <ItemSeparator width={15} />}
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
    justifyContent: "center",
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

export default HourlyBid;
