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
          <Image source={IMAGES.PROFILE} style={styles.profileimg} />
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
        <View style={styles.headingcontainer}>
          <Text style={styles.headingtext}>Categoies</Text>
        </View>
        <DrawerItem
          style={styles.draweritem}
          labelStyle={styles.labeltext}
          label="Computer Accessories"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <DrawerItem
          style={styles.draweritem}
          labelStyle={styles.labeltext}
          label="Watches"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <DrawerItem
          style={styles.draweritem}
          labelStyle={styles.labeltext}
          label="Smart Phones"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <DrawerItem
          style={styles.draweritem}
          labelStyle={styles.labeltext}
          label="Home Appliance"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <DrawerItem
          style={styles.draweritem}
          labelStyle={styles.labeltext}
          label="Bags Travel Accessories"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <TouchableOpacity style={styles.categorycontainer}>
          <Text style={styles.categorytext}>view all categories</Text>
        </TouchableOpacity>
        <View style={styles.headingcontainer}>
          <Text style={styles.headingtext}>Bid Types</Text>
        </View>
        <DrawerItem
          style={styles.draweritem}
          labelStyle={styles.labeltext}
          label="Spot Bid"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <DrawerItem
          style={styles.draweritem}
          labelStyle={styles.labeltext}
          label="Hourly Bid"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <DrawerItem
          style={styles.draweritem}
          labelStyle={styles.labeltext}
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
  profileimg: {
    width: wp("20%"),
    height: hp("20%"),
    borderRadius: 35,
  },

  headingcontainer: {
    marginTop: 20,
    marginLeft: 15,
  },
  headingtext: {
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    color: COLORS.GRAY,
  },
  draweritem: {
    marginLeft: 6,
  },
  labeltext: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
  },
  categorycontainer: {
    marginLeft: 15,
  },
  categorytext: {
    color: COLORS.PURPLE,
    fontSize: 11,
  },
});
export default DrawerContent;
