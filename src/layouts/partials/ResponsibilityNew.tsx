import CustomHeading from "@/components/CustomHeading";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { ShieldCheck } from "lucide-react";

type ResponsibilityJob = {
  icon: string;
  title: string;
  content: string;
};

const ResponsibilityNew = () => {
  const { responsibility } = getListPage(
    "homepage/-index.md",
  ).frontmatter;

  return (
    <section className="section-sm relative pt-10">
      {/* TEKSTUALNI BLOK
          Na mobilnom je u normalnom toku.
          Na desktopu je preko grida i prati globalni container. */}
      <div className="relative z-10 w-full lg:pointer-events-none lg:absolute lg:inset-x-0 lg:top-0">
        <div className="container">
          <div className="flex py-14 lg:h-[342px] lg:w-[60%] lg:items-center lg:py-0">
            <div className="w-full lg:pointer-events-auto lg:pr-12 -mt-8 ">
              <p
                dangerouslySetInnerHTML={markdownify(
                  responsibility.subtitle,
                )}
                className="mb-6 text-base-sm text-primary max-lg:text-center"
                data-aos="fade-up-sm"
              />

              <CustomHeading
                as="h2"
                text={responsibility.title}
                className="mb-7 text-h3 max-lg:text-center md:text-h2-sm"
                dataAos="fade-up-sm"
                dataAosDelay="20"
              />

              <p
                dangerouslySetInnerHTML={markdownify(
                  responsibility.content,
                )}
                className="text-text/80 max-lg:text-center lg:pl-[80px]"
                data-aos="fade-up-sm"
                data-aos-delay="40"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ZAKLJUČANI GRID */}
      <div className="grid grid-cols-1 lg:min-h-[760px] lg:grid-cols-[60%_40%]">
        {/* LEVI DEO */}
        <div className="grid lg:grid-rows-[45%_55%]">
          {/* Na desktopu rezerviše prostor iza apsolutnog teksta */}
          <div className="hidden lg:block" />

          {/* DONJI LEVI RED */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* LEVA FOTOGRAFIJA */}
            <div
              className="relative min-h-[360px] overflow-hidden lg:min-h-0"
              data-aos="fade-up-sm"
              data-aos-delay="60"
            >
              <ImageFallback
                src={responsibility.image}
                alt="Profesionální aplikace H-KRYSTAL"
                width={800}
                height={800}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* NARANDŽASTI BLOK */}
            <div className="flex flex-col justify-center gap-9 bg-primary p-8 xl:p-10">
              {responsibility.job.map(
                (job: ResponsibilityJob, i: number) => (
                  <div
                    key={`${job.icon}-${job.title}`}
                    data-aos="fade-up-sm"
                    data-aos-delay={80 + i * 20}
                  >
                    <div className="mb-2 flex items-center gap-3">
                      {job.icon === "cz" ? (
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden rounded-full">
                          <ImageFallback
                            src="/images/icons/cz.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="h-full w-full object-cover"
                          />
                        </span>
                      ) : (
                        <ShieldCheck
                          className="h-5 w-5 shrink-0 text-white"
                          aria-hidden="true"
                        />
                      )}

                      <h6
                        dangerouslySetInnerHTML={markdownify(job.title)}
                        className="mb-0 text-text-light"
                      />
                    </div>

                    <p
                      dangerouslySetInnerHTML={markdownify(job.content)}
                      className="text-base-sm text-text-light/80"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* DESNA FOTOGRAFIJA */}
        <div
          className="relative min-h-[560px] overflow-hidden lg:min-h-0"
          data-aos="zoom-in-sm"
        >
          <ImageFallback
            src={responsibility.side_image}
            alt="Profesionální aplikace H-KRYSTAL"
            width={900}
            height={1400}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ResponsibilityNew;