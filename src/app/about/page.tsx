import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";

const About = () => {
  const {
    title,
    subtitle,
    meta_title,
    description,
    image_primary,
    image_secondary,
    paragraphs,
    button_label,
    button_link,
  } = getListPage("about/-index.md").frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
      />

      <section className="section">
        <div
          className="container pt-16 lg:pt-20"
          
          data-aos="fade-up-sm"
          data-aos-delay="100"
        >
          <div className="flex flex-col items-center justify-between gap-14 lg:flex-row lg:gap-10">
            <div className="lg:w-[55%]">
              <div className="relative">
                <ImageFallback
                  src={image_primary}
                  alt={title}
                  width={549}
                  height={465}
                  className="w-full rounded object-cover lg:w-[92%]"
                  data_aos="zoom-in-sm"
                />

                <ImageFallback
                  src={image_secondary}
                  alt={title}
                  width={470}
                  height={317}
                  className="absolute -bottom-20 right-[-20px] w-[52%] rounded object-cover shadow-lg max-md:hidden"
                  data_aos="zoom-in-sm"
                  data_aos_delay="20"
                />
              </div>
            </div>

            <div className="lg:w-[38%] ">
              <p
                className="mb-6 text-center text-base-sm font-medium uppercase text-primary lg:text-left"
                data-aos="fade-up-sm"
              >
                {subtitle}
              </p>

              <CustomHeading
                as="h1"
                text={title}
                className="mb-8 text-balance text-center text-h3 md:text-h2 lg:text-left"
                dataAos="fade-up-sm"
                dataAosDelay="50"
              />

              {paragraphs.map((paragraph: string, i: number) => (
                <p
                  key={i}
                  className={`text-center text-text/80 lg:text-left ${
                    i === paragraphs.length - 1 ? "mb-8" : "mb-6"
                  }`}
                  data-aos="fade-up-sm"
                  data-aos-delay={100 + i * 30}
                >
                  {paragraph}
                </p>
              ))}

              <div
                className="flex w-full justify-center lg:justify-start"
                data-aos="fade-up-sm"
                data-aos-delay="160"
              >
                <CustomButton
                  link={button_link}
                  label={button_label}
                  className="btn-sm! sm:btn!"
                  variant="secondary"
                  icon="FaArrowRightLong"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;