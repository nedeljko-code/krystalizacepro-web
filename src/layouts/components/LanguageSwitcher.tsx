"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const languages = [
  { code: "CZ", locale: "cs", flag: "/images/flags/cz.svg" },
  { code: "EN", locale: "en", flag: "/images/flags/gb.svg" },
  { code: "DE", locale: "de", flag: "/images/flags/de.svg" },
  { code: "SK", locale: "sk", flag: "/images/flags/sk.svg" },
  { code: "MK", locale: "mk", flag: "/images/flags/mk.svg" },
];

interface LanguageSwitcherProps {
  light?: boolean;
}

const LanguageSwitcher = ({ light = false }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = pathname.split("/")[1] || "cs";

  const currentLanguage =
    languages.find((language) => language.locale === currentLocale) ??
    languages[0];

  const otherLanguages = languages.filter(
    (language) => language.locale !== currentLanguage.locale,
  );

  const changeLanguage = (locale: string) => {
    const segments = pathname.split("/");

    segments[1] = locale;

    const newPath = segments.join("/") || `/${locale}`;

    setIsOpen(false);
    router.push(newPath);
  };

  return (
    <div className="relative hidden lg:block">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1 text-base-lg transition-colors ${
          light ? "text-white" : "text-text"
        }`}
        aria-expanded={isOpen}
        aria-label="Vybrat jazyk"
      >
        <span>{currentLanguage.code}</span>

        <svg
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 fill-current transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="M5.25 7.5 10 12.25 14.75 7.5z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-3 min-w-[90px] rounded bg-white py-2 shadow-lg">
          {otherLanguages.map((language) => (
            <button
              key={language.locale}
              type="button"
              onClick={() => changeLanguage(language.locale)}
              className="flex w-full items-center gap-2 px-4 py-2 text-left text-base text-text transition-colors hover:bg-gray-100"
            >
              <img
                src={language.flag}
                alt=""
                className="h-3.5 w-5 object-cover"
              />

              <span>{language.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;