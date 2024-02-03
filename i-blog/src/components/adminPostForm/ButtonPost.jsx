import { IoAddCircle } from "react-icons/io5";
import { useFormStatus } from "react-dom";
export default function ButtonPost() {
  const { pending } = useFormStatus();
  return (
    <>
      <button>
        <div>
          <IoAddCircle size={20} />
        </div>
        <span>{pending ? "Adding..." : "Add"}</span>
      </button>
    </>
  );
}
