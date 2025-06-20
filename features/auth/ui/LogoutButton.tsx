"use client";

import {logoutAction} from "@/features/auth";

export function LogoutButton() {
    return (
        <form action={logoutAction}>
            <button type="submit" className="btn btn-secondary">
                Logout
            </button>
        </form>
    );
}