import { IoAddCircle } from "react-icons/io5";
import { useFormStatus } from "react-dom";
export default function ButtonPost() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button>Adding...</button>
      ) : (
        <>
          <button>
            <div>
              <IoAddCircle size={20} />
            </div>
            <span>Add</span>
          </button>
        </>
      )}
    </>
  );
}
