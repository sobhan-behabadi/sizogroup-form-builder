import { Textarea } from "@heroui/react";
import type { TextareaField } from "../types/type.ts";
import { Controller, useFormContext } from "react-hook-form";
import React from 'react';

export default function TextareaField(props: TextareaField) {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      control={control}
      rules={props.rules}
      render={({ field, fieldState: { error } }) => (
        <Textarea
          {...props}
          {...field}
          errorMessage={error?.message?.toString()}
          isInvalid={!!error}
        />
      )}
    />
  );
}
