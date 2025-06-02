import type {
    CheckboxProps,
    InputProps,
    RadioGroupProps,
    SelectProps,
    SwitchProps,
    TextAreaProps,
} from "@heroui/react";
import type { RegisterOptions } from "react-hook-form";

export type BaseField<T> = {
    name: string;
    className?: string;
    rules?: RegisterOptions;
    initialValue?: T;
};

// ---- TEXT / PASSWORD ----
export type TextField = {
    type: "text" | "password";
} & BaseField<string> &
    InputProps;

// ---- TEXTAREA ----
export type TextareaField = {
    type: "textarea";
} & BaseField<string> &
    TextAreaProps;

// ---- RADIO ----
export type RadioField = {
    type: "radio";
    options: { label: string; value: string }[];
} & BaseField<string> &
    RadioGroupProps;

// ---- CHECKBOX ----
export type CheckboxField = {
    type: "checkbox";
} & BaseField<boolean> &
    CheckboxProps;

// ---- SELECT ----
export type SelectField = {
    type: "select";
    options: { label: string; value: string }[];
} & BaseField<string | string[]> &
    Omit<SelectProps, "children">;

// ---- SWITCH ----
export type SwitchField = {
    type: "switch";
} & BaseField<boolean> &
    SwitchProps;

// ---- UNIFIED TYPE ----
export type Fields =
    | TextField
    | CheckboxField
    | SwitchField
    | TextareaField
    | RadioField
    | SelectField;

export type DataForm = Record<string, Fields["initialValue"]>;
