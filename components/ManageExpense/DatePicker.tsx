import { View, Text, TextInput, Platform, Keyboard } from "react-native";
import React, { useState } from "react";
import { convertDateToString } from "../../utils/date";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

interface DatePickerProps {
  label: string;
  className?: string;
  value: Date;
  onChangeDate: (date: Date) => void;
}

const DatePicker = ({ label, className, value, onChangeDate }: DatePickerProps) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleOnChangeDate = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    setShowPicker(Platform.OS === "ios");

    if (selectedDate) {
      onChangeDate(selectedDate)
    }
  };

  return (
    <View className={`mx-1 my-2 ${className}`}>
      <Text className={`text-sm text-primary100 mb-1`}>{label}</Text>
      <TextInput
        value={convertDateToString(value)}
        className="bg-primary100 p-2 rounded-md text-lg text-primary700 border-2 border-transparent"
        placeholder="YYYY-MM-DD"
        onFocus={() => {
          Keyboard.dismiss();
          setShowPicker(true)
        }}
      />
      {showPicker && (
        <DateTimePicker
          display={Platform.OS === "ios" ? "spinner" : "default"}
          value={value}
          mode="date"
          onChange={handleOnChangeDate}
        />
      )}
    </View>
  );
};

export default DatePicker;
