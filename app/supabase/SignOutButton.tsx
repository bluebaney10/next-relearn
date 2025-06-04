"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { signOutAction } from "./action/users";

function SignOutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClickSignOutButton = () => {
    startTransition(async () => {
      console.log("startTransition called");
      const { errorMessage } = await signOutAction();
      if (errorMessage) {
        // toast.error(errorMessage);
        console.log("Sign out failed:", errorMessage);
      } else {
        // toast.success("Sign out successful");
        router.push("/supabase");
        console.log("Sign out successful");
      }
    });
  };

  return (
    <button
      onClick={handleClickSignOutButton}
      className="rounded-lg p-2 text-white flex justify-center bg-emerald-700 w-40"
      disabled={isPending}
    >
      {isPending ? "Signing out..." : "Sign Out"}
    </button>
  );
}

export default SignOutButton;
