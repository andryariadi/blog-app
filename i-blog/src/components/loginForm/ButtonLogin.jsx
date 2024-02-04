import { useFormStatus } from "react-dom";

export default function ButtonLogin() {
  const { pending } = useFormStatus();

  return (
    <>
      <button>{pending ? "Logging in..." : "Login"}</button>
    </>
  );
}
