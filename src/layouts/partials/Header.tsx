"use client";

import CustomButton from "@/components/CustomButton";
import Logo from "@/components/Logo";
import NavDropDown from "@/components/NavDropDown";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import DynamicIcon from "@/helpers/DynamicIcon";
import { markdownify } from "@/lib/utils/textConverter";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface ChildNavigationLink {
  name: string;
  url: string;
}
export interface NavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: ChildNavigationLink[];
}

const Header = () => {
  const { main }: { main: NavigationLink[] } = menu;
  const { navigation_button, notification } = config;
  const sticky_header = config.settings?.sticky_header;

  // get current path
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const hideNavigationButton = pathname === "/" || pathname === "/appointment";

  // scroll to top on route change and initialize sticky header
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsScrolled(false);

    const header = document.querySelector(".header");
    let lastScroll = 0;

    const onScroll = () => {
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 250);

      if (
        sticky_header &&
        currentScroll > 300 &&
        currentScroll > lastScroll &&
        header
      ) {
        header.classList.add("header-reveal");
        header.classList.remove("absolute");
      } else if (currentScroll < 250 && header) {
        header.classList.remove("header-reveal");
        header.classList.add("absolute");
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", onScroll);

    const frame = requestAnimationFrame(() => {
      onScroll();
    });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname, sticky_header]);

  return (
    <>
      <div
        className="hidden absolute top-0 z-20 flex flex-col sm:flex-row justify-center items-center gap-4.5 w-full bg-primary py-2"
        data-aos="fade-down-sm"
      >
        <p
          className="text-text-light/80 text-base-sm"
          dangerouslySetInnerHTML={markdownify(notification.message)}
        />

        <a
          href={notification.link}
          className="text-text-light flex items-center"
        >
          <DynamicIcon icon={notification.icon} className="mr-2.5" />
          {notification.label}
        </a>
      </div>

      <header className="header z-50 absolute top-26 sm:top-12">
        <nav className="navbar mx-auto max-w-[1356px]! px-[30px]">
          {/* logo  */}
          <div
            className="order-0 flex items-center"
            data-aos="zoom-in"
            data-aos-delay="20"
          >
            <Logo />
          </div>
          <div className="flex items-center gap-4.5">
            {navigation_button.enable && !hideNavigationButton && (
              <CustomButton
                link={navigation_button.link}
                label={navigation_button.label}
                type="btn-sm"
                className="order-1 hidden lg:hidden! sm:inline-block"
                data_aos="zoom-in-sm"
              />
            )}

            {/* navbar toggler  */}
            <input id="nav-toggle" type="checkbox" className="hidden" />
            <label
              htmlFor="nav-toggle"
              className="order-3 cursor-pointer flex items-center lg:hidden text-text lg:order-1 bg-primary p-2 rounded"
            >
              <svg
                id="show-button"
                className="h-5 fill-text-light block"
                viewBox="0 0 20 20"
              >
                <title>Menu Open</title>
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
              </svg>
              <svg
                id="hide-button"
                className="h-5 fill-text-light hidden"
                viewBox="0 0 20 20"
              >
                <title>Menu Close</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                ></polygon>
              </svg>
            </label>

            {/* /navbar toggler  */}
            <ul id="nav-menu" className="navbar-nav">
              {main.map((menu, i: number) => (
                <React.Fragment key={i}>
                  {menu.hasChildren ? (
                    <NavDropDown menu={menu} pathname={pathname} />
                  ) : (
                    <li
                      className="nav-item"
                      data-aos="fade-up-sm"
                      data-aos-delay={100 + i * 50}
                    >
                      <a
                        href={menu.url}
                        className={`nav-link text-base-lg ${
                          isHome || isScrolled
                            ? "text-text lg:text-white"
                            : "text-text"
                        }`}
                      >
                        {menu.name}
                      </a>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
          {navigation_button.enable && !hideNavigationButton && (
            <CustomButton
              link={navigation_button.link}
              label={navigation_button.label}
              type="btn-sm"
              className="order-1 hidden lg:inline-block!"
              data_aos="zoom-in-sm"
            />
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
