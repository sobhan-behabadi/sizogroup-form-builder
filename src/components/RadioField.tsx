import { Radio, RadioGroup } from "@heroui/react";
import { Controller, useFormContext } from "react-hook-form";
import type { RadioField as RadioFieldType } from "../types/type.ts";
import React from 'react';

export default function RadioField(props: RadioFieldType) {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      control={control}
      rules={props.rules}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col gap-1">
          <RadioGroup
            {...props}
            {...field}
            errorMessage={error?.message?.toString()}
            isInvalid={!!error}
            key={props.name}
          >
            {props.options.map((item) => (
              <Radio key={item.value} value={item.value}>
                {item.label}
              </Radio>
            ))}
          </RadioGroup>
        </div>
      )}
    />
  );
}
