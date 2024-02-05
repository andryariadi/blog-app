"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./search.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    if (placeholder === "Search Posts...") {
      if (e.target.value) {
        params.set("q", e.target.value);
      } else {
        params.delete("q");
      }
    }

    if (placeholder === "Search Users...") {
      if (e.target.value) {
        params.set("query", e.target.value);
      } else {
        params.delete("query");
      }
    }

    replace(`${pathName}?${params}`);
  }, 500);

  return (
    <>
      <div className={styles.container}>
        <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
        <div className={styles.icon}>
          <IoSearchSharp size={20} color="#e5e5e5" />
        </div>
      </div>
    </>
  );
}
