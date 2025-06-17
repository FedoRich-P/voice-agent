"use client";

import {Form} from "@/shared/ui";
import {AuthFormFields, AuthFormFooter, AuthFormHeader, useAuthForm} from "@/features/auth";

export function AuthForm({type}: Props) {
    const { form, onSubmit, isSignIn } = useAuthForm(type);

    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <AuthFormHeader />
                <h3>Practice job interviews with AI</h3>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full space-y-6 mt-4 form"
                    >
                        <AuthFormFields form={form} isSignIn={isSignIn} />
                    </form>
                </Form>
                <AuthFormFooter isSignIn={isSignIn} />
            </div>
        </div>
    );
}

interface Props {
    type: FormType
}