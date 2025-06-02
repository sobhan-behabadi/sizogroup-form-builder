import { Button, cn } from "@heroui/react";
import type { DataForm, Fields } from "@/types/type";
import { useForm, FormProvider } from "react-hook-form";
import TextField from "./TextField";
import CheckboxField from "./CheckboxField";
import { useMemo } from "react";
import TextareaField from "./TextareaField";
import RadioField from "./RadioField";
import SelectField from "./SelectField";
import SwitchField from "./SwitchField";
import React from 'react';

export default function FB({
  fields,
  formClassName,
  onSubmit,
}: {
  fields: Fields[];
  formClassName?: string;
  onSubmit: (data: DataForm) => void;
}) {
  const initialValues = useMemo(() => {
    return fields.reduce((acc, field) => {
      if (field.initialValue !== undefined) {
        acc[field.name] = field.initialValue;
      }
      return acc;
    }, {} as DataForm);
  }, [fields]);

  const methods = useForm({
    values: initialValues,
  });

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-5 w-full", formClassName)}
      >
        {fields.map((field) => renderedFields(field))}
        <Button type="submit" variant="solid">
          تایید
        </Button>
      </form>
    </FormProvider>
  );

  function renderedFields(field: Fields) {
    switch (field.type) {
      case "text":
      case "password":
        return <TextField {...field} />;

      case "textarea":
        return <TextareaField {...field} />;

      case "radio":
        return <RadioField {...field} />;

      case "checkbox":
        return <CheckboxField {...field} />;

      case "switch":
        return <SwitchField {...field} />;

      case "select":
        return <SelectField {...field} />;

      default:
        return null;
    }
  }
}
