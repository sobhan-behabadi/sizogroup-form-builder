import { Checkbox } from "@heroui/react";
import type { CheckboxField as CheckboxFieldType } from "../types/type.ts";
import { Controller, useFormContext } from "react-hook-form";
import React from 'react';

export default function CheckboxField(props: CheckboxFieldType) {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      control={control}
      rules={props.rules}
      render={({ field, fieldState: { error } }) => (
        <Checkbox
          {...props}
          {...field}
          onChange={undefined}
          isSelected={field.value}
          onValueChange={(val) => field.onChange(val)}
          errorMessage={error?.message?.toString()}
          isInvalid={!!error}
        >
          {props.title}
        </Checkbox>
      )}
    />
  );
}
