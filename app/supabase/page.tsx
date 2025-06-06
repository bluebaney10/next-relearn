import { getUser } from "@/auth/server";
import Link from "next/link";
import SignOutButton from "./SignOutButton";

async function SupabasePage() {
  const user = await getUser();
  return (
    <>
      {user ? (
        <div className="flex flex-col items-center gap-4">
          <p>User is logged in as {user.email}</p>

          <SignOutButton />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p>Not logged in</p>

          <Link
            href={"/supabase/login"}
            className="bg-emerald-700 p-2 w-40 text-white rounded-lg text-center"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
}

export default SupabasePage;
