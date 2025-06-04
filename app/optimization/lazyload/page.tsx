"use client";

import React, { useState } from "react";
import HeavyComponent from "./HeavyComponent";
import dynamic from "next/dynamic";

dynamic(() => import("./HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

function LazyLoadPage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div>LazyLoadPage</div>
      <button onClick={() => setIsVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
    </>
  );
}

export default LazyLoadPage;
