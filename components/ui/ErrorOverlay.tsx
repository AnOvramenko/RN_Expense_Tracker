import { View, Text } from "react-native";
import React from "react";
import ActionButton from "./ActionButton";

interface ErrorOverlayProps {
  message: string;
  onConfirm: () => void;
}

const ErrorOverlay = ({ message, onConfirm }: ErrorOverlayProps) => {
  return (
    <View className="flex-1 p-6 bg-primary700 justify-center items-center">
      <Text className="text-center mb-2 text-xl font-bold text-white">
        An error occurred!
      </Text>
      <Text className="text-center mb-2 text-white">{message}</Text>
      <View className="h-14 w-32">
        <ActionButton type="ok" onPress={onConfirm}>
        Ok!
      </ActionButton>
      </View>
    </View>
  );
};

export default ErrorOverlay;
