import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const About = () => {
  return (
    <>
      <SeoMeta title="O nás" meta_title="O nás" description="KrystalizacePro" />

      <section className="section-sm">
        <div className="container">
          <p className="text-primary font-medium uppercase mb-3">O NÁS</p>

          <h1 className="text-h2 mb-6">
            Specialisté na krystalizační hydroizolaci betonu
          </h1>

          <p className="max-w-[760px] text-text/80">
            KrystalizacePro dodává profesionální produkty pro ochranu,
            sanaci a hydroizolaci betonových konstrukcí. Pomáháme stavebním
            firmám i investorům zvolit správné řešení pro konkrétní typ
            konstrukce a zatížení vodou.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
