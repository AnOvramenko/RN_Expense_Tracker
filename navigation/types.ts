import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootParamList = {
  ExpensesOverview: undefined;
  ManageExpenses: {
    id: string;
  } | undefined;
};

export type BottomTabsParamsList = {
  AllExpenses: undefined;
  RecentExpenses: undefined;
};

export type AllNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<RootParamList>,
  BottomTabNavigationProp<BottomTabsParamsList>
>;

export type AllExpensesScreenProps = BottomTabScreenProps<
  BottomTabsParamsList,
  "AllExpenses"
>;
export type RecentExpensesScreenProps = BottomTabScreenProps<
  BottomTabsParamsList,
  "RecentExpenses"
>;
export type ManageExpensesScreenProps = NativeStackScreenProps<
  RootParamList,
  "ManageExpenses"
>;
