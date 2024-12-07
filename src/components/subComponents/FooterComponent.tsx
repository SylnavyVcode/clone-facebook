import React from "react";

const languages = [
  "English (US)",
  "Français (France)",
  "العربية",
  "Italiano",
  "Español",
  "Português (Portugal)",
  "Tiếng Việt",
  "Bahasa Indonesia",
  "Deutsch",
  "हिन्दी",
  "中文(简体)",
  "+",
];

const links = [
  "Sign Up",
  "Log In",
  "Messenger",
  "Facebook Lite",
  "Video",
  "Places",
  "Games",
  "Marketplace",
  "Meta Pay",
  "Meta Store",
  "Meta Quest",
  "Ray-Ban Meta",
  "Meta AI",
  "Instagram",
  "Threads",
  "Fundraisers",
  "Services",
  "Voting Information Center",
  "Privacy Policy",
  "Privacy Center",
  "Groups",
  "About",
  "Create ad",
  "Create Page",
  "Developers",
  "Careers",
  "Cookies",
  "Ad choices",
  "Terms",
  "Help",
  "Contact Uploading & Non-Users",
  "Settings",
];

const Footer: React.FC = () => {
  return (
    <footer className=" bg-white text-gray-600 text-sm py-4 px-2 sm:px-8 ">
      <div className="container mx-auto px-4 space-y-4 text-xs mt-24">
        {/* Section des langues */}
        <div className="flex flex-wrap  gap-2">
          {languages.map((language, index) => (
            <a
              key={index}
              href="#"
              className="hover:underline hover:text-blue-600 transition"
            >
              {language}
            </a>
          ))}
        </div>
        <hr className="border-t border-gray-300" />

        {/* Section des liens principaux */}

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-2 text-center"> */}
        <div className="flex flex-wrap  gap-x-5 gap-y-1 text-center">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:underline hover:text-blue-600 transition"
            >
              {link}
            </a>
          ))}
        </div>
        {/* Copyright */}
        <div className="text-center text-gray-700 mt-4">
          © {new Date().getFullYear()} Meta. Tous droits réservés by sv_code
          (Sylnavy Mabika)
        </div>
      </div>
    </footer>
  );
};

export default Footer;