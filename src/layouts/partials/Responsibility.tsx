import CustomHeading from "@/components/CustomHeading";
import ImageFallback from "@/helpers/ImageFallback";
import VideoPlayer from "@/helpers/VideoPlayer";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { ShieldCheck } from "lucide-react";

const Responsibility = () => {
  const { responsibility } = getListPage("homepage/-index.md").frontmatter;
  return (
    <section className="section-sm pt-0 relative">
      <div className="xl:absolute w-full max-xl:mb-14">
        <div className="container 2xl:mt-10">
          <p
            dangerouslySetInnerHTML={markdownify(responsibility.subtitle)}
            className="mb-6 text-primary text-base-sm max-xl:text-center"
            data-aos="fade-up-sm"
          />

          <CustomHeading
            as="h2"
            text={responsibility.title}
            className="text-h3 md:text-h2-sm mb-7 max-xl:text-center"
            dataAos="fade-up-sm"
            dataAosDelay="20"
          />
          <p
            dangerouslySetInnerHTML={markdownify(responsibility.content)}
            className="mb-7 xl:pl-[80px] max-xl:text-center text-text/80"
            data-aos="fade-up-sm"
            data-aos-delay="40"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between xl:items-baseline">
        <div className="md:w-[60%]">
          <div className="mt-auto flex flex-col xl:flex-row">
            <ImageFallback
              src={responsibility.image}
              alt="responsibility"
              width={594}
              height={492}
              className="xl:w-1/2 w-full object-cover"
              data_aos="fade-up-sm"
              data_aos_delay="60"
            />
            <div className="bg-primary flex flex-col justify-center gap-9 p-8">
              {responsibility.job.map(
                (
                  job: { icon: string; title: string; content: string },
                  i: number,
                ) => (
                  <div
                    key={i}
                    data-aos="fade-up-sm"
                    data-aos-delay={80 + i * 20}
                  >
                    <div className="mb-2 flex items-center gap-3">
                      {job.icon === "cz" ? (
                        <span className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-full">
                          <ImageFallback
                            src="/images/icons/cz.svg"
                            alt="Czech Republic"
                            width={20}
                            height={20}
                            className="h-full w-full object-cover"
                          />
                        </span>
                      ) : (
                        <ShieldCheck className="h-5 w-5 text-white" />
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
        <VideoPlayer video={responsibility.video} />
      </div>
    </section>
  );
};

export default Responsibility;
