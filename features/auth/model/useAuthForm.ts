"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { authFormSchema } from "@/features/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { signIn, signUp } from "@/entities/user";
import { z } from "zod";
import {auth} from "@/shared/firebase/client";

export function useAuthForm(type: FormType) {
    const router = useRouter();

    const formSchema = authFormSchema(type);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const isSignIn = type === "sign-in";

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            if (type === "sign-up") {
                const { name, email, password } = data;
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);

                const result = await signUp({
                    uid: userCredential.user.uid,
                    name: name!,
                    email,
                    password,
                });

                if (!result.success) {
                    toast.error(result.message);
                    return;
                }

                toast.success("Account created successfully. Please sign in.");
                router.push("/sign-in");
            } else {
                const { email, password } = data;

                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const idToken = await userCredential.user.getIdToken();

                if (!idToken) {
                    toast.error("Sign in Failed. Please try again.");
                    return;
                }

                await signIn({ email, idToken });

                toast.success("Signed in successfully.");
                router.push("/");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return { form, onSubmit, isSignIn };
}
