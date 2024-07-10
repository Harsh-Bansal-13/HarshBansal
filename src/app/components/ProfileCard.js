import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProfileCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="text-white">
      <div className="relative h-52 md:h-72 rounded-t-xl group">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-t-xl transition-all duration-500 group-hover:blur-sm"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-cardOverlay bg-opacity-0 group-hover:bg-opacity-90 flex items-center justify-center transition-all duration-500">
          <Link
            href={previewUrl}
            target="display"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-[#676c71] group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#676c71]" />
          </Link>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-menuOverlay py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 text-center">{title}</h5>
      </div>
    </div>
  );
};

export default ProfileCard;
