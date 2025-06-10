import { Suspense } from "react";
import { Search } from "./SearchClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <Search />
    </Suspense>
  );
}
