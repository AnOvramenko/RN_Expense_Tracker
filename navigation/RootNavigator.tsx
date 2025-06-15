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
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: Colors.white,
        contentStyle: {backgroundColor: Colors.primary800 }
      }}
    >
      <Stack.Screen
        name="ExpensesOverview"
        component={BottomTabsNavigation}
        options={{ headerShown: false}}
      />
      <Stack.Screen name="ManageExpenses" component={ManageExpenses} options={{
        presentation: 'modal',
      }}/>
    </Stack.Navigator>
  );
};
