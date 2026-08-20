import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import ImageFallback from "@/helpers/ImageFallback";
import SeoMeta from "@/partials/SeoMeta";

const About = () => {
  return (
    <>
      <SeoMeta
        title="O nás"
        meta_title="O nás"
        description="Specialisté na hydroizolaci betonových konstrukcí"
      />

      <section className="section">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between gap-14 lg:gap-10 items-center">
            <div className="lg:w-[55%]">
              <div className="relative">
                <ImageFallback
                  src="/images/about/1.jpeg"
                  alt="Hydroizolace betonových konstrukcí"
                  width={549}
                  height={465}
                  className="rounded w-full lg:w-[92%] object-cover"
                  data_aos="zoom-in-sm"
                />

                <ImageFallback
                  src="/images/about/2.jpeg"
                  alt="Krystalizační směsi pro beton"
                  width={470}
                  height={317}
                    className="absolute rounded right-[-20]  -bottom-20 w-[52%] object-cover shadow-lg max-md:hidden"
                  data_aos="zoom-in-sm"
                  data_aos_delay="20"
                />
              </div>
            </div>

            <div className="lg:w-[38%]">
              <p
                className="mb-6 text-base-sm text-primary text-center lg:text-left uppercase font-medium"
                data-aos="fade-up-sm"
              >
                O NÁS
              </p>

              <CustomHeading
                as="h1"
                text="Specialisté na hydroizolaci betonových konstrukcí"
                className="text-h3 md:text-h2 text-balance mb-7 text-center lg:text-left"
                dataAos="fade-up-sm"
                dataAosDelay="50"
              />

              <p
                className="mb-6 text-center lg:text-left text-text/80"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                Specializujeme se na vývoj a výrobu vysoce kvalitních
                hydroizolačních krystalizačních směsí pro dlouhodobou ochranu
                betonových konstrukcí.
              </p>

              <p
                className="mb-8 text-center lg:text-left text-text/80"
                data-aos="fade-up-sm"
                data-aos-delay="130"
              >
                Díky osobnímu přístupu, odborným znalostem a otevřené komunikaci
                pomáháme nacházet řešení, která skutečně fungují.
              </p>

              <div
                className="w-full flex justify-center lg:justify-start"
                data-aos="fade-up-sm"
                data-aos-delay="160"
              >
                <CustomButton
                  link="/services"
                  label="Prohlédnout produkty"
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