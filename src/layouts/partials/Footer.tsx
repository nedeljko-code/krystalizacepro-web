"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import config from "@/config/config.json";
import menu from "@/config/menu.json";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";

type Locale = "cs" | "en" | "de" | "sk" | "mk";

type LocalizedText = Record<Locale, string>;

const locales: Locale[] = ["cs", "en", "de", "sk", "mk"];

const Footer = () => {
  const { copyright, footer_description } = config.params;
  const { footer } = menu;

  const pathname = usePathname();

  const pathLocale = pathname.split("/")[1] as Locale;
  const locale: Locale = locales.includes(pathLocale) ? pathLocale : "cs";

  const getLabel = (value: string | LocalizedText) =>
    typeof value === "string" ? value : value[locale];

  const getLocalizedUrl = (url: string) =>
    `/${locale}/${url.replace(/^\/+/, "")}`;

  return (
    <footer className="bg-text py-16 lg:py-20">
      <div className="container">
        <div className="row max-lg:g-8 max-md:justify-center">
          {/* LEFT SIDE */}
          <div className="col-12 min-h-full lg:col-5">
            <div
              className="flex h-full flex-col"
              data-aos="fade-up-sm"
            >
              <div>
                <ImageFallback
                  src={config.site.footer_logo}
                  width={184}
                  height={53}
                  alt="KrystalizacePro"
                  data-aos="fade-in-sm"
                  className="mb-6"
                />

                <p
                  className="max-w-[390px] text-base-sm leading-relaxed text-text-light/60"
                  dangerouslySetInnerHTML={markdownify(footer_description[locale])}
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                />
              </div>
            </div>

            <p
              className="hidden text-base-sm text-text-light/50 [&>a]:text-text-light lg:block mt-10"
              dangerouslySetInnerHTML={markdownify(copyright[locale])}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="col-12 lg:col-7">
            <div className="row max-md:gy-8 lg:ml-auto lg:max-w-[780px]">
              {footer.map((item, index) => (
                <div
                  key={getLabel(item.title)}
                  className="col-6 pr-0 md:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={50 + index * 50}
                >
                  <p className="mb-7 font-medium text-text-light">
                    {getLabel(item.title)}
                  </p>

                  <ul>
                    {item.children.map((child) => {
                      const url = child.url;

                      const isWebLink =
                        url?.startsWith("http://") ||
                        url?.startsWith("https://");

                      const isDirectLink =
                        url?.startsWith("mailto:") ||
                        url?.startsWith("tel:");

                      const childName = getLabel(child.name);

                      return (
                        <li
                          key={`${getLabel(item.title)}-${childName}`}
                          className="mb-4 text-base-sm text-text-light/70 transition-colors duration-300 last:mb-0"
                        >
                          {!url ? (
                            <span className="cursor-default text-text-light/45">
                              {childName}
                            </span>
                          ) : isWebLink ? (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-secondary"
                            >
                              {childName}
                            </a>
                          ) : isDirectLink ? (
                            <a
                              href={url}
                              className="hover:text-secondary"
                            >
                              {childName}
                            </a>
                          ) : (
                            <Link
                              href={getLocalizedUrl(url)}
                              className="hover:text-secondary"
                            >
                              {childName}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE COPYRIGHT */}
        <div className="block lg:hidden">
          <p
            className="mt-12 text-base-sm text-text-light/50 [&>a]:text-text-light"
            dangerouslySetInnerHTML={markdownify(copyright[locale])}
            data-aos="fade-up-sm"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;