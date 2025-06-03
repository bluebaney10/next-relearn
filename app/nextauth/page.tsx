import React from "react";
import Link from "next/link";

const AuthPage = () => {
  return (
    <div>
      <Link href="/nextauth/auth/signin">Login</Link>
    </div>
  );
};

export default AuthPage;
