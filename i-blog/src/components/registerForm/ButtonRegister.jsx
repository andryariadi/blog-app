import { useFormStatus } from "react-dom";

export default function ButtonRegister() {
  const { pending } = useFormStatus();

  return (
    <>
      <button>{pending ? "Registering..." : "Register"}</button>
    </>
  );
}
