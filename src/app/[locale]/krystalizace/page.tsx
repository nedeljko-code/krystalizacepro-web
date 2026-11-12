import CustomHeading from "@/components/CustomHeading";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Image from "next/image";

type KrystalizacePageProps = {
  params: Promise<{ locale: string }>;
};

const aiDisclosureLabels: Record<string, string> = {
  cs: "AI ilustrace",
  en: "AI illustration",
  de: "KI-Illustration",
  sk: "AI ilustrácia",
  mk: "Илустрација создадена со ВИ",
};

const KrystalizacePage = async ({ params }: KrystalizacePageProps) => {
  const { locale } = await params;

  const {
    title,
    subtitle,
    description,
    meta_title,
    intro,
    section_title,
    section_text,
    process_title,
    process_steps,
    process_image_alt,
  } = getListPage("krystalizace/-index.md", locale).frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
      />

      <section className="section mt-32 sm:mt-28">
        <div className="container">
          <div className="max-w-[900px]">
            <p className="mb-4 text-primary text-base-sm" data-aos="fade-up-sm">
              {subtitle}
            </p>

            <CustomHeading
              as="h1"
              text={title}
              className="mt3 mb-8 text-h3 md:text-h2 lg:text-h1"
              dataAos="fade-up-sm"
            />

            <p
              className="text-lg leading-relaxed lg:text-[22px] lg:leading-[1.5]"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              {intro}
            </p>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="max-w-[900px]">
            <h2 className="mb-8 text-h3 lg:text-h2" data-aos="fade-up-sm">
              {section_title}
            </h2>

            <div className="space-y-4">
              {section_text.map((text: string, i: number) => (
                <p
                  key={i}
                  className="leading-relaxed lg:text-[22px] lg:leading-[1.5]"
                  data-aos="fade-up-sm"
                  data-aos-delay={i * 50}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm bg-light">
        <div className="container">
          <div className="max-w-[900px]">
            <h2 className="mb-10 text-h3 lg:text-h2" data-aos="fade-up-sm">
              {process_title}
            </h2>

            <div className="space-y-4">
              {process_steps.map((step: string, i: number) => (
                <div
                  key={i}
                  className="flex gap-5"
                  data-aos="fade-up-sm"
                  data-aos-delay={i * 60}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
                    {i + 1}
                  </div>

                  <p className="text-lg leading-relaxed lg:text-[22px] lg:leading-[1.5]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-12" data-aos="fade-up-sm" data-aos-delay="100">
            <Image
              src="/images/krystalizace/princip-krystalizace.jpg"
              alt={process_image_alt}
              width={1279}
              height={582}
              className="h-auto w-full"
            />
            <span className="absolute bottom-3 right-3 z-10 max-w-[calc(100%-1.5rem)] rounded-sm bg-black/65 px-2 py-1 text-right text-[12px] leading-snug text-white">
              {aiDisclosureLabels[locale] || aiDisclosureLabels.cs}
            </span>
          </div>
        </div>
      </section>

      <CallToAction locale={locale} />
    </>
  );
};

export default KrystalizacePage;
