import styles from "./navLinks.module.css";
import Links from "./links/Links";

export default function NavLinks() {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <>
      <div className={styles.links}>
        {links.map((link) => (
          <Links item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <Links item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <Links item={{ title: "Login", path: "/login" }} />
        )}
      </div>
    </>
  );
}
