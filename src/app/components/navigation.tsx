import Link from "next/link";

const Navigation = () => {
  return (
    <div className="fixed bottom-0 left-0 rounded-t-xl w-full bg-black/30 backdrop-blur p-4 border-t border-white/10">
      <div className="w-full max-w-md text-center mx-auto flex items-center justify-between rounded-t-xl">
        <Link href={"/"} className="w-full text-center text-sm">
          Home
        </Link>
        <Link href={"/explore"} className="w-full text-center text-sm">
          Explore
        </Link>
        <Link href={"/profile"} className="w-full text-center text-sm">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
