import { Switch } from "@heroui/react";
import type { SwitchField } from "../types/type.ts";
import { Controller, useFormContext } from "react-hook-form";
import React from 'react';

export default function SwitchField(props: SwitchField) {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      control={control}
      rules={props.rules}
      render={({ field, fieldState: { error } }) => (
        <Switch
          {...props}
          {...field}
          onChange={undefined}
          isSelected={field.value}
          onValueChange={(val) => field.onChange(val)}
          errorMessage={error?.message?.toString()}
          isInvalid={!!error}
        >
          {props.title}
        </Switch>
      )}
    />
  );
}
