import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabsNavigation } from "./BottomTabsNavigator";
import ManageExpenses from "../screens/ManageExpenses";
import { RootParamList } from "./types";
import { Colors } from "../GlobalStyles";

const Stack = createNativeStackNavigator<RootParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.white,
        contentStyle: {backgroundColor: Colors.primaryModalBg }
      }}
    >
      <Stack.Screen
        name="ExpensesOverview"
        component={BottomTabsNavigation}
        options={{ headerShown: false, animation: undefined }}
      />
      <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
    </Stack.Navigator>
  );
};
