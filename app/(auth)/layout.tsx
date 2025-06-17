import {ReactNode} from "react";
import {isAuthenticated} from "@/entities/user";
import {redirect} from "next/navigation";

export default async function AuthLayout({children}: Props) {

    const isUserAuthenticated = await isAuthenticated();

    if (isUserAuthenticated) redirect("/");

    return <div className="auth-layout">
        {children}
    </div>
}

interface Props {
    children: ReactNode;
}