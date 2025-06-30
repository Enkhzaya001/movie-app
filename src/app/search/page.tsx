import { Suspense } from "react";
import { Search } from "./_components/SearchClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <Search />
    </Suspense>
  );
}
