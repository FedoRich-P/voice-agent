import {UseControllerProps} from "react-hook-form";
import {BaseFormField, FormControl, FormItem, FormLabel, FormMessage, Input} from "@/shared/ui";

type AuthFormValues = {
    name?: string;
    email: string;
    password: string;
};

interface Props extends UseControllerProps<AuthFormValues>{
    label: string;
    placeholder?: string;
    type?: string;
}

export const FormField = ({ label, placeholder, type = "text", ...props }: Props) => {
    return (
        <BaseFormField
            {...props}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} type={type} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
