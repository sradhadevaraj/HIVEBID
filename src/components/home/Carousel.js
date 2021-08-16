import React from "react";
import { View, Dimensions, FlatList, Animated } from "react-native";

import CarouselItem from "../home/CarouselItem";

const { width, height } = Dimensions.get("window");

const Carousel = ({ data }) => {
  const scrollX = new Animated.Value(0);

  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
          ])}
        />
      </View>
    );
  }
};

export default Carousel;
