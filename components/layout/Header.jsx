import Link from "next/link";
import Logo from "../ui/logo";

export default function Header() {
  return (
    <div className="h-[5.5rem] ">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="">
          <Logo />
        </div>
        <nav className="">
          <ul className="flex">
            <li className="px-[5px] py-[20px]">
              <Link href="/projects"> home</Link>
            </li>
            <li className="px-[5px] py-[20px]">
              <Link href="/projects">Blog</Link>
            </li>
          </ul>
        </nav>
        <div>
          <button>contact me</button>
        </div>
      </div>
    </div>
  );
}
