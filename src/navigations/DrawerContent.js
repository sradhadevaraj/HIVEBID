import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer, Text } from "react-native-paper";

import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

import COLORS from "../constants/Colors";
import IMAGES from "../constants/Images";
import FONTS from "../constants/Fonts";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function DrawerContent({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View
          style={{
            width: wp("70%"),
            height: hp("20%"),
            marginLeft: 15,
            marginTop: 15,
            flexDirection: "row",
          }}
        >
          <Image source={IMAGES.PROFILE} style={styles.profileImg} />
          <View
            style={{
              width: wp("70%"),
              height: hp("20%"),
              justifyContent: "center",
              marginLeft: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: COLORS.PURPLE,
                fontSize: 16,
                fontFamily: FONTS.REGULAR,
              }}
            >
              Amelia Noah
            </Text>
            <Text style={{ fontSize: 10 }}>amelianoah@gmail.com</Text>
          </View>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Categoies</Text>
        </View>
        <DrawerItem
          style={styles.drawerItem}
          labelStyle={styles.labelText}
          label="Computer Accessories"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <DrawerItem
          style={styles.drawerItem}
          labelStyle={styles.labelText}
          label="Watches"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <DrawerItem
          style={styles.drawerItem}
          labelStyle={styles.labelText}
          label="Smart Phones"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <DrawerItem
          style={styles.drawerItem}
          labelStyle={styles.labelText}
          label="Home Appliance"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <DrawerItem
          style={styles.drawerItem}
          labelStyle={styles.labelText}
          label="Bags Travel Accessories"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <TouchableOpacity style={styles.categoryContainer}>
          <Text style={styles.categoryText}>view all categories</Text>
        </TouchableOpacity>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Bid Types</Text>
        </View>
        <DrawerItem
          style={styles.drawerItem}
          labelStyle={styles.labelText}
          label="Spot Bid"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <DrawerItem
          style={styles.drawerItem}
          labelStyle={styles.labelText}
          label="Hourly Bid"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <DrawerItem
          style={styles.drawerItem}
          labelStyle={styles.labelText}
          label="12 Hour Bid"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <Drawer.Section
          style={{
            borderTopColor: COLORS.PURPLE,
            borderTopWidth: 1,
          }}
        ></Drawer.Section>
        <DrawerItem
          style={{ marginBottom: 10, marginLeft: 6 }}
          icon={({ size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={COLORS.PURPLE}
              size={size}
            />
          )}
          labelStyle={{ marginLeft: -20 }}
          label="Log out"
          onPress={() => navigation.navigate("SignupScreen")}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImg: {
    width: wp("20%"),
    height: hp("20%"),
    borderRadius: 35,
  },

  headingContainer: {
    marginTop: 20,
    marginLeft: 15,
  },
  headingText: {
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    color: COLORS.GRAY,
  },
  drawerItem: {
    marginLeft: 6,
  },
  labelText: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
  },
  categoryContainer: {
    marginLeft: 15,
  },
  categoryText: {
    color: COLORS.PURPLE,
    fontSize: 11,
  },
});
export default DrawerContent;
