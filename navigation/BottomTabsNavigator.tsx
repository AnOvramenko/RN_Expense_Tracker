import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AllNavigationProps, BottomTabsParamsList } from "./types";
import { Colors } from "../GlobalStyles";
import IconButton from "../components/ui/IconButton";
import RecentExpenses from "../screens/RecentExpenses";
import AllExpenses from "../screens/AllExpenses";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator<BottomTabsParamsList>();

export const BottomTabsNavigation = () => {
  // const navigation = useNavigation<AllNavigationProps>();
  // const manageExpenseItem = () => {
  //   navigation.navigate("ManageExpenses");
  // };

  return (
    <Tabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: Colors.white,
        sceneStyle: { backgroundColor: Colors.primary700 },
        tabBarStyle: { backgroundColor: Colors.primary500 },
        tabBarActiveTintColor: Colors.accent500,
        headerRight: () => (
          <IconButton ionIconName="add" onPress={() => {
            navigation.getParent()?.navigate('ManageExpenses')
          }} />
        ),
      })}
    >
      <Tabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
          tabBarLabel: 'Recent',
        }}
      />
      <Tabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
