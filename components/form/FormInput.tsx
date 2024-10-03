"use client";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "../../lib/formSchemas";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
// creating the appropriate type for the form values
type LoginFormValues = z.infer<typeof loginSchema>;
interface FormInputProps {
  form: UseFormReturn<LoginFormValues>;
  name: keyof LoginFormValues;
  label: string;
  placeholder: string;
}
const FormInput = ({ form, name, label, placeholder }: FormInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormInput;
