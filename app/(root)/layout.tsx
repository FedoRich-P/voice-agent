import {ReactNode} from "react";
import {Toaster} from "sonner";

export default function RootLayout({children}: Props) {
    return <>
        {children}
        <Toaster />
    </>
}

interface Props {
    children: ReactNode;
}