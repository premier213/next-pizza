import { Loginform } from "@/component/loginForm";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <Loginform />
      </div>
    </div>
  );
}
