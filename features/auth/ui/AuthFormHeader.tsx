import Image from "next/image";

export function AuthFormHeader() {
    return (
        <header className="flex flex-row gap-2 justify-center">
            <Image src="/logo.svg" alt="PrepWise Logo" height={32} width={38} />
            <h2 className="text-primary-100">PrepWise</h2>
        </header>
    );
}