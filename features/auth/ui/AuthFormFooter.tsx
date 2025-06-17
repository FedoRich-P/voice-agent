import Link from "next/link";

export function AuthFormFooter({ isSignIn }: Props) {
    return (
        <footer className="text-center">
            {isSignIn ? "No account yet?" : "Have an account already?"}
            <Link
                href={!isSignIn ? "/sign-in" : "/sign-up"}
                className="font-bold text-user-primary ml-1"
            >
                {!isSignIn ? "Sign In" : "Sign Up"}
            </Link>
        </footer>
    );
}

interface Props {
    isSignIn: boolean;
}
