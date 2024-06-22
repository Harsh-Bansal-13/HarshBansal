import React from "react";
import Link from "next/link";
const Navlink = ({ href, title }) => {
  return (
    <Link href={href} className="rounded-full hover:bg-hoverOverlay px-5 py-3">
      {title}
    </Link>
  );
};

export default Navlink;
