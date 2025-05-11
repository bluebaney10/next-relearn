"use client";
import { useRouter } from "next/navigation";
import React from "react";

const RouterPage = () => {
  const router = useRouter();
  return (
    <button
      className="btn btn-primary"
      onClick={() => router.push("/basic/fetchdata")}
    >
      Create
    </button>
  );
};

export default RouterPage;
