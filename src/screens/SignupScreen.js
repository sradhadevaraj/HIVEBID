import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  CheckBox,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Formik } from "formik";
import * as Yup from "yup";

import COLORS from "../constants/Colors";
import IMAGES from "../constants/Images";
import FONTS from "../constants/Fonts";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import ErrorMessage from "../components/forms/ErrorMessage";
import SubmitButton from "../components/forms/SubmitButton";

export default function SignupScreen({ navigation }) {
  const [isSelected, setSelection] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    confirmpassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "password does not match"
    ),
  });

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={COLORS.PURPLE}
      />
      <View style={styles.logocontainer}>
        <Image source={IMAGES.LOGO} style={styles.imglogo} />
      </View>
      <View style={styles.wlmcontainer}>
        <Text style={styles.textwelcome}>WELCOME!</Text>
        <Text style={styles.textnewaccount}>Create a New Account</Text>
      </View>

      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          confirmpassword: "",
        }}
        onSubmit={() => navigation.navigate("HomeScreen")}
        validationSchema={validationSchema}
      >
        {({ handleChange, errors, setFieldTouched, touched, handleBlur }) => (
          <>
            <View style={styles.textinputcontainer}>
              <TextInput
                style={styles.textinput}
                placeholder="User Name"
                autoCapitalize="words"
                autoCorrect={false}
                onBlur={() => setFieldTouched("name")}
                onChangeText={handleChange("name")}
              />
            </View>
            <ErrorMessage error={errors.name} visible={touched.name} />
            <View style={styles.textinputcontainer}>
              <TextInput
                style={styles.textinput}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
                placeholder="Email Address"
                textContentType="emailAddress"
              />
            </View>
            <ErrorMessage error={errors.email} visible={touched.email} />
            <View style={styles.textinputpassword}>
              <TextInput
                style={styles.textinput}
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              <MaterialCommunityIcons
                name="eye"
                size={18}
                color={COLORS.LIGHT_GRAY}
                style={{ marginRight: 15 }}
              />
            </View>
            <ErrorMessage error={errors.password} visible={touched.password} />
            <View style={styles.textinputpassword}>
              <TextInput
                style={styles.textinput}
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("confirmpassword")}
                onChangeText={handleChange("confirmpassword")}
                placeholder="Confirm Password"
                secureTextEntry
                textContentType="password"
              />
              <MaterialCommunityIcons
                name="eye"
                size={18}
                color={COLORS.LIGHT_GRAY}
                style={{ marginRight: 15 }}
              />
            </View>
            <ErrorMessage
              error={errors.confirmpassword}
              visible={touched.confirmpassword}
            />
            <View style={styles.privacycontainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <View style={{ width: wp("60%") }}>
                <Text style={styles.label}>
                  By clicking on submit, you agree to our Terms of Use and
                  Privacy Policy
                </Text>
              </View>
            </View>
            <SubmitButton title="Signup" />
          </>
        )}
      </Formik>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginVertical: 25,
        }}
      >
        <Text style={styles.accounttext}>Already have an account?</Text>
        <Text style={styles.logintext}>LOGIN</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  logocontainer: {
    alignItems: "center",
    marginTop: 40,
  },
  imglogo: {
    width: wp("29%"),
    height: hp("30%"),
  },

  textwelcome: {
    color: COLORS.PURPLE,
    fontSize: 24,
    fontFamily: FONTS.REGULAR,
    marginLeft: 15,
    letterSpacing: 1.5,
    marginTop: 20,
  },
  textnewaccount: {
    fontSize: 13,
    fontFamily: FONTS.REGULAR,
    marginLeft: 15,
  },
  textinputcontainer: {
    width: wp("90%"),
    height: hp("12%"),
    backgroundColor: COLORS.WHITE,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: COLORS.LIGHT_GRAY,
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  textinput: {
    fontFamily: FONTS.REGULAR,
    fontSize: 13,
    marginLeft: 10,
    width: wp("60%"),
  },
  textinputpassword: {
    width: wp("90%"),
    height: hp("12%"),
    backgroundColor: COLORS.WHITE,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: COLORS.LIGHT_GRAY,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },

  privacycontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 10,
  },
  label: {
    fontSize: 11,
    marginLeft: 5,
    color: COLORS.GRAY,
    fontFamily: FONTS.REGULAR,
  },
  accounttext: {
    fontSize: 10,
    fontFamily: FONTS.REGULAR,
  },
  logintext: {
    fontSize: 10,
    fontFamily: FONTS.REGULAR,
    color: COLORS.PURPLE,
    fontWeight: "bold",
  },
});
