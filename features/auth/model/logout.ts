import { signOut } from "@/entities/user";
import { redirect } from "next/navigation";

export async function logoutAction() {
    await signOut();
    redirect("/login");
}