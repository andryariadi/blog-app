import Link from "next/link";
import NavLinks from "./links/NavLink";

export default function Navbar() {
  return (
    <>
      <div>
        <div>Logo</div>
        <div>
          <NavLinks />
        </div>
      </div>
    </>
  );
}
