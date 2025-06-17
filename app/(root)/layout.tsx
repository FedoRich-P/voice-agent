import {ReactNode} from "react";
import Link from "next/link";
import Image from "next/image";
import {isAuthenticated} from "@/entities/user";
import {redirect} from "next/navigation";

export default async function RootLayout({children}: Props) {

    const isUserAuthenticated = await isAuthenticated();

    if (!isUserAuthenticated) redirect("/sign-in");

    return <div className="root-layout">
        <nav>
            <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
                <h2 className="text-primary-100">PrepWise</h2>
            </Link>
        </nav>

        {children}
    </div>
}

interface Props {
    children: ReactNode;
}