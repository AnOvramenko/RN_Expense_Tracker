import { View, Text, Pressable } from "react-native";
import React from "react";
import { Colors } from "../../GlobalStyles";

interface ActionButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  type: "cancel" | "ok";
}

const ActionButton = ({ children, onPress, type }: ActionButtonProps) => {
  return (
    <View
      className={
        "flex-grow rounded-lg w-0" + (type === "ok" ? " bg-primary" : "")
      }
      style={{overflow: 'hidden'}}
    >
      <Pressable 
      onPress={onPress} 
      style={({pressed}) => [pressed && {backgroundColor: 'white'}]}
      className="items-center justify-center p-4 active:opacity-70"
      android_ripple={type === 'ok' ? {color: Colors.secondary } : null}
      >
        <Text className="text-secondary">{children}</Text>
      </Pressable>
    </View>
  );
};

export default ActionButton;
