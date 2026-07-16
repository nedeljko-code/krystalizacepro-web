"use client";

import Link from "next/link";

import config from "@/config/config.json";
import menu from "@/config/menu.json";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";

const Footer = () => {
  const { copyright, footer_description } = config.params;
  const { footer } = menu;

  return (
    <footer className="section bg-text lg:py-[135px]">
      <div className="container">
        <div className="row max-lg:g-5 max-md:justify-center">
          <div className="col-12 min-h-full lg:col-5">
            <div className="flex h-full flex-col justify-between">
              <div>
                <ImageFallback
                  src={config.site.footer_logo}
                  width={184}
                  height={53}
                  alt="KrystalizacePro"
                  data-aos="fade-in-sm"
                  className="mb-5"
                />

                <p
                  className="max-w-[420px] text-base-sm leading-relaxed text-text-light/60"
                  dangerouslySetInnerHTML={markdownify(footer_description)}
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                />
              </div>

              <p
                className="hidden text-base-sm text-text-light/60 [&>a]:text-text-light lg:block"
                dangerouslySetInnerHTML={markdownify(copyright)}
                data-aos="fade-up-sm"
              />
            </div>
          </div>

          <div className="col-12 lg:col-7">
            <div className="row justify-between max-md:gy-8">
              {footer.map((item, index) => (
                <div
                  key={item.title}
                  className="col-6 pr-0 md:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={50 + index * 50}
                >
                  <p className="mb-8 font-medium text-text-light">
                    {item.title}
                  </p>

                  <ul>
                    {item.children.map((child) => (
                      <li
                        key={child.url}
                        className="mb-4 text-base-sm text-text-light/80 transition-all duration-300 ease-in-out last:mb-0 hover:text-secondary"
                      >
                        {child.url.startsWith("http") ? (
                          <a
                            href={child.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {child.name}
                          </a>
                        ) : (
                          <Link href={child.url}>{child.name}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <p
            className="mt-12 text-base-sm text-text-light/60 [&>a]:text-text-light"
            dangerouslySetInnerHTML={markdownify(copyright)}
            data-aos="fade-up-sm"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;