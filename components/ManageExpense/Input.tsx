import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";
import React from "react";
import { Colors } from "../../GlobalStyles";

interface InputProps {
  label: string;
  inputOptions: TextInputProps;
  className?: string;
  isValid: boolean;
  errorMsg: string;
}

const Input = ({
  label,
  inputOptions,
  className,
  isValid,
  errorMsg,
}: InputProps) => {
  const isMultiline = inputOptions && inputOptions.multiline;
  return (
    <View className={`mx-1 my-2 ${className}`}>
      <Text className={`text-sm text-primary100 mb-1`}>{label}</Text>
      <TextInput
        {...inputOptions}
        className="bg-primary100 p-2 rounded-md text-lg text-primary700"
        style={[
          { borderColor: "transparent", borderWidth: 2 },
          isMultiline && styles.multiline,
          !isValid && styles.error,
        ]}
      />
      {!isValid && <Text className="text-error50 text-sm">{errorMsg}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  error: {
    borderColor: Colors.error500,
  },
});
