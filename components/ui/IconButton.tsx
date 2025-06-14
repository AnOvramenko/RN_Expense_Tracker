import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

interface IconButtonProps {
  ionIconName: ComponentProps<typeof Ionicons>["name"];
  color?: string;
  size?: number;
  onPress: () => void;
}

const IconButton = ({
  ionIconName,
  color = "white",
  size = 24,
  onPress,
}: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="px-4 ">
      <Ionicons name={ionIconName} color={color} size={size} />
    </TouchableOpacity>
  );
};

export default IconButton;
