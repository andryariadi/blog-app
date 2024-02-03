import { IoPersonAddSharp } from "react-icons/io5";
import { useFormStatus } from "react-dom";
export default function ButtonUser() {
  const { pending } = useFormStatus();
  return (
    <>
      <button>
        <div>
          <IoPersonAddSharp size={20} />
        </div>
        <span>{pending ? "Adding..." : "Add"}</span>
      </button>
    </>
  );
}
