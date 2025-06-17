import { Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import ActionButton from "../ui/ActionButton";
import { Expense, NewExpense } from "../../types/expense";
import DatePicker from "./DatePicker";

interface ExpenseFormProps {
  onCancel: () => void;
  onSubmit: (expense: NewExpense) => void;
  submitButtonLabel: string;
  selectedExpenseData: Expense | undefined;
}

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  selectedExpenseData,
}: ExpenseFormProps) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: selectedExpenseData ? selectedExpenseData?.amount.toString() : "",
      isValid: true,
      errorMsg: "Enter a valid number",
    },
    date: {
      value: selectedExpenseData ? selectedExpenseData?.date : new Date(),
      isValid: true,
      errorMsg: "Date must match this format YYYY-MM-DD",
    },
    description: {
      value: selectedExpenseData ? selectedExpenseData?.description : "",
      isValid: true,
      errorMsg: "Should not be empty",
    },
  });

  const handleOnChangeText = (
    inputIdentifier: keyof typeof inputs,
    enteredValue: string
  ) => {
    setInputs((prevInputValues) => {
      return {
        ...prevInputValues,
        [inputIdentifier]: {
          value: enteredValue,
          isValid: true,
          errorMsg: prevInputValues[inputIdentifier].errorMsg,
        },
      };
    });
  };
  const handleOnChangeDate = (selectedDate: Date) => {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        date: {
          value: selectedDate,
          isValid: true,
          errorMsg: prevInputs.date.errorMsg,
        },
      };
    });
  };

  const handleSubmission = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((prevInputs) => {
        return {
          amount: {
            value: prevInputs.amount.value,
            isValid: amountIsValid,
            errorMsg: prevInputs.amount.errorMsg,
          },
          date: {
            value: prevInputs.date.value,
            isValid: dateIsValid,
            errorMsg: prevInputs.date.errorMsg,
          },
          description: {
            value: prevInputs.description.value,
            isValid: descriptionIsValid,
            errorMsg: prevInputs.description.errorMsg,
          },
        };
      });

      return;
    }

    onSubmit(expenseData);
  };

  return (
    <View className="mt-10">
      <Text className="font-bold text-2xl text-center mx-5 text-white">
        Your Expense
      </Text>
      <View className="flex-row justify-between items-baseline">
        <Input
          isValid={inputs.amount.isValid}
          errorMsg={inputs.amount.errorMsg}
          className="flex-1"
          label="Amount"
          inputOptions={{
            keyboardType: "decimal-pad",
            onChangeText: handleOnChangeText.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />

        <DatePicker
          label="Date"
          className="flex-1"
          value={inputs.date.value}
          onChangeDate={handleOnChangeDate}
        />
      </View>
      <Input
        isValid={inputs.description.isValid}
        errorMsg={inputs.description.errorMsg}
        label="Description"
        inputOptions={{
          multiline: true,
          onChangeText: handleOnChangeText.bind(this, "description"),
          value: inputs.description.value,
          // autoCorrect: false, //true -> default
          // autoCapitalize: 'sentences', // default
        }}
      />
      <View className="mx-20 flex-row gap-1">
        <ActionButton type="cancel" onPress={onCancel}>
          Cancel
        </ActionButton>
        <ActionButton type="ok" onPress={handleSubmission}>
          {submitButtonLabel}
        </ActionButton>
      </View>
    </View>
  );
};

export default ExpenseForm;
