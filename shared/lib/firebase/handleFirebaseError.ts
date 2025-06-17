export function handleFirebaseError(error: unknown): string {
    if (typeof error === "object" && error !== null && "code" in error) {
        const firebaseError = error as { code: string; message?: string };

        switch (firebaseError.code) {
            case "auth/email-already-exists":
                return "This email is already in use.";
            case "auth/invalid-password":
                return "Password is invalid.";
            case "auth/user-not-found":
                return "User not found.";
            case "auth/invalid-email":
                return "Email address is invalid.";
            default:
                return "Unexpected Firebase error.";
        }
    }

    return "Something went wrong. Please try again.";
}
