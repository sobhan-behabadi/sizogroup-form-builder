# @sizo-group/form-builder

Welcome to **@sizo-group/form-builder**, a powerful and flexible React component library designed to help you create dynamic forms with ease. Built with Tailwind CSS, HeroUI, and react-hook-form, this library provides a reusable form builder that supports various field types including text, password, textarea, select, radio, checkbox, and switch. Perfect for developers looking to streamline form creation in their React applications!

## Easy to use

- With @sizo-group/form-builder, you can effortlessly build forms using a unique and innovative approach. This library simplifies the process by offering a modern, customizable, and type-safe way to construct forms, allowing you to focus on creating great user experiences rather than dealing with complex form logic.

## Features
- **Multiple Field Types:** Supports text, password, textarea, select (single/multi), radio, checkbox, and switch.
- **Customizable Styling:** Leverage Tailwind CSS and HeroUI props like `color`, `radius`, and `variant`.
- **Validation:** Built-in support for react-hook-form validation rules.
- **TypeScript Support:** Fully typed with TypeScript for better developer experience.
- **Initial Values:** Set default values for fields effortlessly.

## Installation

To use `@sizo-group/form-builder` in your project, install it via npm:

```bash
npm install @sizo-group/form-builder
```

### Peer Dependencies
This library relies on the following peer dependencies, which you must install separately:

- `@heroui/react@^2.7.8`
- `framer-motion@^12.12.2`
- `react@^19.1.0`
- `react-dom@^19.1.0`
- `react-hook-form@^7.56.4`
- `uuid@^11.1.0`
- `tailwindcss@^3.4.17`

Install them with:

```bash
npm install @heroui/react framer-motion react react-dom react-hook-form uuid tailwindcss
```

## Usage

Here’s a comprehensive example demonstrating how to use the form builder with various field types:

```typescript
import type { DataForm, Fields } from "@sizo-group/form-builder";
import FB from "@sizo-group/form-builder";

function App() {
  const fields: Fields[] = [
      {
          type: "select",
          name: "singleSelect",
          label: "singleSelect",
          color: "primary",
          radius: "full",
          options: [
              { label: "red", value: "red" },
              { label: "blue", value: "blue" },
          ],
          selectionMode: "single",
          rules: {
              required: { value: true, message: "Required" },
          },
      },
      {
          type: "select",
          name: "multiSelect",
          label: "multiSelect",
          color: "secondary",
          radius: "none",
          options: [
              { label: "red", value: "red" },
              { label: "blue", value: "blue" },
              { label: "warning", value: "warning" },
              { label: "danger", value: "danger" },
          ],
          initialValue: ["red", "danger"],
          selectionMode: "multiple",
          rules: {
              required: { value: true, message: "Required" },
          },
      },
      {
          orientation: "horizontal",
          type: "radio",
          name: "radio",
          label: "What is your favorite car ?",
          color: "primary",
          options: [
              {
                  label: "BMW is the best",
                  value: "BMW",
              },
              {
                  label: "Benz is the best",
                  value: "benz",
              },
          ],
          initialValue: "",
          rules: {
              required: { value: true, message: "Required" },
          },
      },
      // ... more fields
  ];

  const onSubmit = (data: DataForm) => {
    console.log({ data });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full px-10">
      <FB fields={fields} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
```

## Available Props

The `Fields` type supports the following properties:

- `type`: `"text" | "password" | "textarea" | "radio" | "checkbox" | "switch" | "select"`
- Note: When you specify one of these type values in a field object, TypeScript automatically infers the field type and provides autocompletion for the allowed properties. For example, setting type: "select" will suggest options and selectionMode, while type: "checkbox" will suggest title and dir.
- `name`: string (required, unique identifier for the field)
- `label?`: string (optional label for the field)
- `initialValue?`: any (default value for the field)
- `rules?`: `RegisterOptions` (validation rules from react-hook-form)
- `options?`: `{ label: string; value: string }[]` (for select and radio)
- `selectionMode?`: `"single" | "multiple"` (for select)
- `color?`: `"primary" | "secondary" | "warning" | "danger" | "default"`
- `radius?`: `"none" | "sm" | "md" | "lg" | "full"`
- `variant?`: `"flat" | "bordered" | "faded"`
- `labelPlacement?`: `"inside" | "outside"`
- `orientation?`: `"horizontal" | "vertical"` (for radio)
- `title?`: string (for checkbox and switch)
- `dir?`: `"ltr" | "rtl"`

## Contributing

We welcome contributions! Please fork the repository, make your changes, and submit a pull request. For major changes, please open an issue first to discuss.

## License

This project is licensed under the [MIT License](LICENSE).

## Support

For issues or questions, please open an issue on our [GitHub repository](https://github.com/sobhan-behabadi/sizogroup-form-builder).