import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-svh items-center flex-col justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full h-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-start gap-2 self-center font-semibold"
        >
          <Image
            src="/logos/logo.svg"
            alt="Doc Central"
            width={20}
            height={20}
          />
          Doc Central
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
