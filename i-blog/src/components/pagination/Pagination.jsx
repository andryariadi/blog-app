"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";

export default function Pagination({ count }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);

  const ITEM_PER_PAGE = 6;

  const handlePrev = ITEM_PER_PAGE * parseInt(page - 1) > 0;
  const handleNext = ITEM_PER_PAGE * parseInt(page - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    const newPage = type === "prev" ? parseInt(page) - 1 : parseInt(page) + 1;
    params.set("page", newPage);
    replace(`${pathName}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} disabled={!handlePrev} onClick={() => handleChangePage("prev")}>
        Prev
      </button>
      <button className={styles.btn} disabled={!handleNext} onClick={() => handleChangePage("next")}>
        Next
      </button>
    </div>
  );
}
