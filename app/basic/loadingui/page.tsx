import React, { Suspense } from "react";
import UserTable from "../sorttable/UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const LoadingUiPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log("sort order:", sortOrder);
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default LoadingUiPage;
