import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-black flex justify-between text-gray-500 h-16">
      <div></div>
      <div>
        <Link href="#home">
          <GoogleMaterialIcons
            className={`
          p-1 m-2 rounded-full cursor-pointer
          border border-gray-500
          hover:text-gray-300 hover:border-gray-300
        `}
            iconName="arrow_upward"
          />
        </Link>
      </div>
    </div>
  );
};
