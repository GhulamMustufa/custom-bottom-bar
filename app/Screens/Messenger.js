import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Messenger extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Messenger</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
