import CustomHeading from "@/components/CustomHeading";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { Service } from "@/types";
import React from "react";
import ImageFallback from "@/helpers/ImageFallback";


const ServiceSection = ({ hero }: { hero?: boolean }) => {
  const { homepage_section_enable, subtitle, descriptions, title, home_title } =
    getListPage("services/-index.md").frontmatter;
  const allServices = getSinglePage("services");
  return (
    <>
      {homepage_section_enable && (
        <section
          className={`section ${hero && "mt-24 sm:mt-20"} ${!hero && "pt-0"}`}
        >
          <div className="container">
            <div className="row max-md:gy-5 md:g-1 lg:g-4 justify-center md:justify-between items-center">
              <div className="md:col-6 col-12">
                {subtitle && (
                  <p
                    dangerouslySetInnerHTML={markdownify(subtitle)}
                    className={`mb-6 text-base-sm text-primary text-center md:text-left`}
                    data-aos="fade-up-sm"
                  />
                )}
                {hero ? (
                  <CustomHeading
                    as="h1"
                    text={title}
                    className={`text-h2-sm lg:text-h1-sm lg:leading-[70px] text-center md:text-left max-xl:[&>br]:hidden`}
                    dataAos="fade-up-sm"
                  />
                ) : (
                  <CustomHeading
                    as="h2"
                    text={home_title}
                    className="text-h3 md:text-h2-sm text-balance text-center md:text-left"
                    dataAos="fade-up-sm"
                  />
                )}
              </div>
              <div className="col-6 md:w-[44%] col-12">
                {descriptions &&
                  descriptions.map((desc: string, i: number) => (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={markdownify(desc)}
                      className={`mb-6 last:mb-0 text-center md:text-left`}
                      data-aos="fade-up-sm"
                      data-aos-delay={50 + i * 50}
                    />
                  ))}
              </div>

              <div className="col-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16 lg:mt-24">
                  {allServices.map((service: Service, i: number) => (
                    <a
                      key={i}
                      href={`/services/${service.slug}`}
                      className="group flex h-full flex-col rounded-2xl   bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                      data-aos="fade-up-sm"
                      data-aos-delay={100 + i * 50}
                    >
                      {service?.frontmatter?.card_image && (
                        <div className="mb-7 flex h-[170px] items-center justify-center">
                          <ImageFallback
                            src={service.frontmatter.card_image}
                            alt={service.frontmatter.title || "Produkt"}
                            width={260}
                            height={190}
                            className="h-[160px] w-auto object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}

                      <h3
                        dangerouslySetInnerHTML={markdownify(service.frontmatter.title!)}
                        className="mb-3 text-xl font-semibold leading-tight"
                      />

                      <div className="mb-5 h-[2px] w-6 bg-primary transition-all duration-300 group-hover:w-12" />

                      {service?.frontmatter?.card_description && (
                       <p
                        dangerouslySetInnerHTML={markdownify(service.frontmatter.card_description)}
                        className="mb-6 text-sm leading-6 text-text/70"
                      />
                      )}

                      <span className="mt-auto inline-flex items-center gap-2 font-medium text-primary">
                        Detail produktu
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ServiceSection;
