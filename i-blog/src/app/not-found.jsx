import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="error-container">
        <Image src="/images/error.svg" alt="error" width={1000} height={1000} />
      </div>
    </>
  );
}
