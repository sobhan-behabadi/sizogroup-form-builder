import { Select, SelectItem } from "@heroui/react";
import { Controller, useFormContext } from "react-hook-form";
import type { SelectField } from "../types/type.ts";
import React from 'react';

export default function SelectField(props: SelectField) {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      control={control}
      rules={props.rules}
      render={({ field, fieldState: { error } }) => (
        <Select
          {...props}
          {...field}
          onClick={(e) => e.preventDefault()}
          onChange={undefined}
          selectedKeys={
            props.selectionMode === "multiple"
              ? Array.isArray(field.value)
                ? field.value
                : []
              : new Set([field.value])
          }
          onSelectionChange={(keys) => {
            const selected =
              props.selectionMode === "multiple"
                ? Array.from(keys)
                : keys.currentKey;
            field.onChange(selected);
          }}
          errorMessage={error?.message?.toString()}
          isInvalid={!!error}
          key={props.name}
        >
          {props.options.map((item) => (
            <SelectItem key={item.value}>{item.label}</SelectItem>
          ))}
        </Select>
      )}
    />
  );
}
