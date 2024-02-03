import { IoPersonAddSharp } from "react-icons/io5";
import { useFormStatus } from "react-dom";
export default function ButtonUser() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button>Adding...</button>
      ) : (
        <>
          <button>
            <div>
              <IoPersonAddSharp size={20} />
            </div>
            <span>Add</span>
          </button>
        </>
      )}
    </>
  );
}
