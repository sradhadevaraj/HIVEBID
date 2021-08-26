// SignupScreen

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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import COLORS from "../constants/Colors";
import IMAGES from "../constants/Images";
import FONTS from "../constants/Fonts";

import ErrorMessage from "../components/forms/ErrorMessage";
import SubmitButton from "../components/forms/SubmitButton";

export default function SignupScreen({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    confirmPassword: Yup.string().oneOf(
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
      <View style={styles.logoContainer}>
        <Image source={IMAGES.LOGO} style={styles.imgLogo} />
      </View>
      <View style={styles.wlmContainer}>
        <Text style={styles.textWelcome}>WELCOME!</Text>
        <Text style={styles.textNewAccount}>Create a New Account</Text>
      </View>

      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          confirmPassword: "",
        }}
        onSubmit={() => navigation.navigate("HomeScreen")}
        validationSchema={validationSchema}
      >
        {({ handleChange, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="User Name"
                autoCapitalize="words"
                autoCorrect={false}
                onBlur={() => setFieldTouched("name")}
                onChangeText={handleChange("name")}
              />
            </View>
            <ErrorMessage error={errors.name} visible={touched.name} />
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
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
            <View style={styles.textInputPassword}>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry={!showPassword}
                textContentType="password"
              />
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={18}
                color={COLORS.GRAY}
                style={{ marginRight: 15 }}
                onPress={() => setShowPassword(!showPassword)}
              />
            </View>
            <ErrorMessage error={errors.password} visible={touched.password} />
            <View style={styles.textInputPassword}>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("confirmPassword")}
                onChangeText={handleChange("confirmPassword")}
                placeholder="Confirm Password"
                secureTextEntry
                textContentType="password"
              />
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={18}
                color={COLORS.GRAY}
                style={{ marginRight: 15 }}
                onPress={() => setShowPassword(!showPassword)}
              />
            </View>
            <ErrorMessage
              error={errors.confirmPassword}
              visible={touched.confirmPassword}
            />
            <View style={styles.privacyContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkBox}
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
        <Text style={styles.accountText}>Already have an account?</Text>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  imgLogo: {
    width: wp("29%"),
    height: hp("30%"),
  },

  textWelcome: {
    color: COLORS.PURPLE,
    fontSize: 24,
    fontFamily: FONTS.REGULAR,
    marginLeft: 15,
    letterSpacing: 1.5,
    marginTop: 20,
  },
  textNewAccount: {
    fontSize: 13,
    fontFamily: FONTS.REGULAR,
    marginLeft: 15,
  },
  textInputContainer: {
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
  textInput: {
    fontFamily: FONTS.REGULAR,
    fontSize: 13,
    marginLeft: 10,
    width: wp("60%"),
  },
  textInputPassword: {
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
  privacyContainer: {
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
  accountText: {
    fontSize: 10,
    fontFamily: FONTS.REGULAR,
  },
  loginText: {
    fontSize: 10,
    fontFamily: FONTS.REGULAR,
    color: COLORS.PURPLE,
    fontWeight: "bold",
  },
});
