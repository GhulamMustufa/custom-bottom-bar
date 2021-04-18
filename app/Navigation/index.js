import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Blog from "../Screens/Blog";
import Messenger from "../Screens/Messenger";
import Vendor from "../Screens/Vendor";
import Favourite from "../Screens/Favourite";
import Icon from "../Common/Icon";
import Color from "../Utils/Colors";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabScreens() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#ff6961",
        inactiveTintColor: Color.gray,
        showLabel: false,
        tabBarSelectedItemStyle: {
          borderBottomWidth: 5,
          borderBottomColor: "red",
        },
      }}
    >
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({ focused, color, size }) => (
            <Icon.Entypo
              name={"list"}
              color={color}
              style={{
                borderBottomColor: focused ? "#ff6961" : "",
                borderBottomWidth: focused ? 2 : 0,
                paddingBottom: 5,
              }}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Vendor"
        component={Vendor}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Icon.Entypo
              name={"windows-store"}
              color={color}
              style={{
                borderBottomColor: focused ? "#ff6961" : "",
                borderBottomWidth: focused ? 2 : 0,
                paddingBottom: 5,
              }}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => (
            <View>
              <View
                style={{
                  width: 70,
                  height: 35,
                  borderBottomLeftRadius: 35,
                  borderBottomRightRadius: 35,
                  backgroundColor: "white",
                  shadowColor: "#808080",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    bottom: 5, // space from bottombar
                    height: 65,
                    width: 65,
                    borderRadius: 68,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    borderColor: "#ff6961",
                    borderWidth: 2,
                    backgroundColor: "#ff6961",
                  }}
                >
                  <Icon.Entypo name={"rocket"} color={"white"} size={30} />
                </View>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Messenger"
        component={Messenger}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Icon.Feather
              name={"message-circle"}
              style={{
                borderBottomColor: focused ? "#ff6961" : "",
                borderBottomWidth: focused ? 2 : 0,
                paddingBottom: 5,
              }}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => (
            <Icon.MaterialIcons
              name={"favorite"}
              style={{
                borderBottomColor: focused ? "#ff6961" : "",
                borderBottomWidth: focused ? 2 : 0,
                paddingBottom: 5,
              }}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabScreens">
        <Stack.Screen
          name="TabScreens"
          component={TabScreens}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
