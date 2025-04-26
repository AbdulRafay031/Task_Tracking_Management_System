import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4 shadow-md bg-black">
      {/* Logo */}
      <Image src="/logo-2.png" alt="Logo" width={96} height={96} />

      {/* Sign In Button */}
      <Link href="/auth/Signin">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
          Sign In
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
