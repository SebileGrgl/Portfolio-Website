"use client";
import { LinkType } from "../types/types";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }: { link: LinkType }) => {
  const pathName = usePathname();
  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url && "bg-black text-white"
      }`}
      href={link.url}
      key={link.title}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
