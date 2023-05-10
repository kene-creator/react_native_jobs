import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Images,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Kene</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
