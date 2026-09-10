import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import ServiceSection from "@/partials/ServiceSection";

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

const Services = async ({ params }: ServicesPageProps) => {
  const { locale } = await params;

  const { title, meta_title, description, image } =
    getListPage("services/-index.md", locale).frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />

      <ServiceSection hero locale={locale} />

      <CallToAction locale={locale} />
    </>
  );
};

export default Services;