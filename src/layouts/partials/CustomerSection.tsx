
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";


const CustomerSection = () => {
  const { customer } = getListPage("homepage/-index.md").frontmatter;
  return (
    <>
      {customer.enable && (
        <section className="section-sm pt-8 lg:pt-12">
          <div className="container">
           <div className="text-center mb-18 lg:mb-20">
  <p className="text-primary font-medium uppercase mb-6">
    PARTNEŘI
  </p>

  <h2 className="text-h3 lg:text-h2 mb-8">
    Firmy, které nám důvěřují
  </h2>

  <p className="max-w-[700px] mx-auto">
    Spolupracujeme s předními firmami ve stavebnictví a dodáváme ověřená řešení
    pro profesionální použití.
  </p>
</div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 items-center">
              {customer.logo.map((logo: string, i: number) => (
                <div
                  key={i}
                  className={`flex items-center justify-center ${
                    logo.toLowerCase().includes("pro-doma")
                      ? "h-[72px] px-4 bg-[#d71920]"
                      : "h-[90px] px-6 bg-white"
                  }`}
                >
                  <ImageFallback
                    src={logo}
                    alt="logo"
                    width={180}
                    height={60}
                    className={`w-auto object-contain mx-auto ${
                      logo.includes("budzak") ? "max-h-[76px]" : "max-h-[64px]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CustomerSection;
