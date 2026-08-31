import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";

const CustomerSection = () => {
  const { customer } = getListPage("homepage/-index.md").frontmatter;
  const bbLogo = customer.logo.find((logo: string) =>
    logo.toLowerCase().includes("budzak"),
  );

  const partnerLogos = customer.logo
    .filter((logo: string) => !logo.toLowerCase().includes("budzak"))
    .sort((a: string, b: string) => {
      if (a.toLowerCase().includes("skanska")) return -1;
      if (b.toLowerCase().includes("skanska")) return 1;
      return 0;
    });
  return (
    <>
      {customer.enable && (
        <section className="section-sm pt-8 lg:pt-12">
          {/* BB — poseban nivo */}
          {bbLogo && (
            <div className="mb-16 lg:mb-20 text-center" data-aos="fade-up-sm">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                VE SPOLUPRÁCI S
              </p>

              <div className="flex justify-center">
                <ImageFallback
                  src={bbLogo}
                  alt="Budžak Building"
                  width={240}
                  height={90}
                  className="h-auto max-h-[90px] w-auto object-contain"
                />
              </div>
            </div>
          )}

          {/* Partneri */}
          <div className="mb-16 text-center lg:mb-20">
            <p className="mb-6 font-medium uppercase text-primary">PARTNEŘI</p>

            <h2 className="mb-8 text-h3 lg:text-h2">
              Firmy, které nám důvěřují
            </h2>

            <p className="mx-auto max-w-[700px]">
              Spolupracujeme s předními firmami ve stavebnictví a dodáváme
              ověřená řešení pro profesionální použití.
            </p>
          </div>

          <div className="mx-auto grid max-w-[1050px] grid-cols-2 items-center gap-8 md:grid-cols-4 lg:gap-12">
            {partnerLogos.map((logo: string, i: number) => (
              <div
                key={i}
                data-aos="fade-up-sm"
                data-aos-delay={i * 75}
                className={`flex items-center justify-center ${
                  logo.toLowerCase().includes("pro-doma")
                    ? "h-[72px] bg-[#d71920] px-4"
                    : "h-[90px] bg-white px-6"
                }`}
              >
                <ImageFallback
                  src={logo}
                  alt="logo"
                  width={180}
                  height={60}
                  className={`mx-auto max-h-[64px] w-auto object-contain ${
                    logo.toLowerCase().includes("skanska") ||
                    logo.toLowerCase().includes("cemex")
                      ? "scale-145"
                      : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default CustomerSection;
