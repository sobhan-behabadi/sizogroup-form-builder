import { Input } from "@heroui/react";
import type { TextField } from "../types/type.ts";
import { Controller, useFormContext } from "react-hook-form";
import React from 'react';

export default function TextField(props: TextField) {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      control={control}
      rules={props.rules}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...props}
          {...field}
          errorMessage={error?.message?.toString()}
          isInvalid={!!error}
        />
      )}
    />
  );
}
