import React from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

import COLORS from "../../constants/Colors";

const { width } = Dimensions.get("window");

const Carousel = () => (
  <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
      paginationStyle={{ bottom: -20 }}
      paginationStyleItemActive={{ backgroundColor: COLORS.PURPLE }}
      paginationStyleItemInactive={{ backgroundColor: COLORS.GRAY }}
    >
      <View style={styles.imgContainer}>
        <Image
          style={styles.text}
          source={require("../../../assets/images/Shoe.jpg")}
        />
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/Shoe.jpg")}
        />
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/Shoe.jpg")}
        />
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/Shoe.jpg")}
        />
      </View>
    </SwiperFlatList>
  </View>
);

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
  imgContainer: { justifyContent: "center" },
  image: { width: width * 1, alignSelf: "center" },
});

export default Carousel;
