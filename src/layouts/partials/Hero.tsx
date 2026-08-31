
import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import ReferralText from "@/layouts/components/ReferralText";

const Hero = () => {
  const { hero } = getListPage("homepage/-index.md").frontmatter;

  return (
    <section
      className="section relative mb-22 lg:min-h-screen"
      style={{
        backgroundImage: `url('${hero.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container pt-24 sm:pt-24 lg:pt-32 pb-[280px] lg:pb-[228px] relative z-20">
        <p
          dangerouslySetInnerHTML={markdownify(hero.subtitle)}
          className="text-lg mb-9 text-center lg:text-left text-white/100"
          data-aos="fade-up-sm"
          data-aos-delay="20"
        />

        <CustomHeading
          as="h1"
          text={hero.title}
          className="h3 lg:text-[72px] xl:text-[80px] xl:tracking-[-3px] xl:leading-[88px] mb-16 text-center text-white/100 lg:text-left text-balance"
          dataAos="fade-up-sm"
          dataAosDelay="40"
        />

        <div
          className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4"
          data-aos="fade-up-sm"
          data-aos-delay="60"
        >
          {hero.buttons.map(
  (
    b: {
      enable: boolean;
      link: string;
      label: string;
      icon?: string;
    },
    i: number,
  ) =>
    b.enable && (
      <div key={i} className="contents">
        {/* MOBILE - direktan poziv */}
        <CustomButton
          link={b.link}
          label={b.label}
          className="w-fit md:hidden"
          variant={i % 2 === 0 ? "secondary" : "primary"}
          icon={b?.icon}
          data_aos="zoom-in-sm"
          data_aos_delay={80 + i * 20}
        />

        {/* DESKTOP - kontakt stranica */}
        <CustomButton
          link="/appointment"
          label="Kontaktujte nás"
          className="hidden w-fit md:inline-flex"
          variant={i % 2 === 0 ? "secondary" : "primary"}
          icon="FaArrowRightLong"
          data_aos="zoom-in-sm"
          data_aos_delay={80 + i * 20}
        />
      </div>
    ),
)}
        </div>
        
      </div>
      <ReferralText />

      <div
        className="absolute inset-0 w-[78%] h-full z-10 bg-gradient-to-r from-black/80 via-black/55 to-transparent"
        data-aos="fade-right-sm"
      />
    </section>
  );
};

export default Hero;