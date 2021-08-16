import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { View, Dimensions, StyleSheet, Platform } from "react-native";

const ENTRIES1 = [
  {
    illustration:
      "https://i.postimg.cc/TPmtHdZ4/air-max-270-shoe-r-DQ1-Kt-1.jpg",
  },
  {
    illustration: "https://i.postimg.cc/bNpdZmyD/air-max-270-shoe-r-DQ1-Kt.jpg",
  },
  {
    illustration:
      "https://i.postimg.cc/7YFs1JR2/nike-air-max-270-react-white-grey-black-ao4971-001-5-1000x702.jpg",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const MyCarousel = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 80}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    width: screenWidth - 90,
    height: screenWidth - 100,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  title: {
    position: "absolute",
  },
});
