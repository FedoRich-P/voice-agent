import {FormField} from "@/shared/ui";
import {UseFormReturn} from "react-hook-form";
import {AuthFormSchema} from "@/features/auth";

export function AuthFormFields({ form, isSignIn }: Props) {
    return (
        <>
            {!isSignIn && (
                <FormField
                    control={form.control}
                    name="name"
                    label="Name"
                    placeholder="Your Name"
                    type="text"
                />
            )}
            <FormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="Your email address"
                type="email"
            />
            <FormField
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
            />
        </>
    );
}

interface Props {
    form: UseFormReturn<AuthFormSchema>;
    isSignIn: boolean;
}