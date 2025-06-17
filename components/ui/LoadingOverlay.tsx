import { View, ActivityIndicator } from "react-native";
import React from "react";

const LoadingOverlay = () => {
  return (
    <View className="flex-1 items-center justify-center p-6 bg-primary700">
      <ActivityIndicator size={"large"} color={"white"} />
    </View>
  );
};

export default LoadingOverlay;
