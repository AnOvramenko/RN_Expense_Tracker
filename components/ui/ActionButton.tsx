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
        "flex-1 rounded-lg" + (type === "ok" ? " bg-primary500" : "")
      }
      style={{overflow: 'hidden'}}
    >
      <Pressable 
      onPress={onPress} 
      style={({pressed}) => [pressed && {backgroundColor: Colors.white}]}
      className="items-center justify-center p-4 active:opacity-70"
      android_ripple={{color: Colors.primary100 }}
      >
        <Text className="text-primary50">{children}</Text>
      </Pressable>
    </View>
  );
};

export default ActionButton;
