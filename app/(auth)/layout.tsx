import {ReactNode} from "react";

export default function AuthLayout({children}: Props) {
    return <div className="auth-layout">
        {children}
    </div>
}

interface Props {
    children: ReactNode;
}