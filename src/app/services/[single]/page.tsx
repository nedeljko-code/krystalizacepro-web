import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import CustomHeading from "@/components/CustomHeading";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import similarItems from "@/lib/utils/similarItems";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Service } from "@/types";
import styles from "./product-page.module.css";

export const dynamicParams = false;

export const generateStaticParams: () => { single: string }[] = () => {
  const services: Service[] = getSinglePage("services");

  return services.map((service) => ({
    single: service.slug!,
  }));
};

const ServiceSingle = async (props: {
  params: Promise<{ single: string }>;
}) => {
  const params = await props.params;

  const allServices: Service[] = getSinglePage("services");
  const service = allServices.find((page) => page.slug === params.single);

  if (!service) {
    return null;
  }

  const { title, meta_title, description, image, banner, card_image, product_details } =
    service.frontmatter;

  const productImage = card_image || image || banner;

  const similarServices =
    similarItems(service, allServices, service.slug!) || [];

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />

      <section className="section mt-40 sm:mt-36">
        <div className="container">
          <div className="row items-start justify-between ">
            {/* LEVI BLOK */}
            <div
              className={`col-12 lg:col-7 xl:col-6 content ${styles.productContent}`}
            >
              {title && (
                <CustomHeading
                  as="h1"
                  text={title}
                  className="mb-8 text-balance text-h3 md:text-h2 lg:text-h1-sm [&>br]:hidden"
                  dataAos="fade-up-sm"
                />
              )}

              <article className="max-w-[760px]">
                <div className="content">
                  <MDXContent content={service.content} />
                </div>
              </article>
            </div>

            {/* DESNI BLOK */}
            <div
              className="col-12 mt-12 self-stretch lg:col-5 lg:mt-0 xl:col-4"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              <div className="lg:sticky lg:top-24">
                {productImage && (
                  <div className="mb-2 flex h-[220px] items-center justify-center">
                    <ImageFallback
                      src={productImage}
                      alt={title || "Produkt"}
                      width={360}
                      height={360}
                      className="mx-auto h-[220px] w-auto max-w-full object-contain drop-shadow-xl"
                      loading="eager"
                    />
                  </div>
                )}

                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <ProductCard
                      type={product_details.type}
                      usage={product_details.usage}
                      packageInfo={product_details.package_info}
                      application={product_details.application}
                      documentationHref={`/dokumentace#${service.slug}`}
                      contactLink={config.navigation_button.link}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
  <h2
    className="mb-16 text-center text-h3 md:text-h2"
    data-aos="fade-up-sm"
  >
    Další produkty
  </h2>

  <div className="row gy-5">
    {similarServices.slice(0, 3).map((service, i: number) => {
      const product = service as Service;

      return (
        <div
          key={product.slug}
          className="col-12 sm:col-6 lg:col-4"
          data-aos="fade-up-sm"
          data-aos-delay={100 + i * 50}
        >
          <ServiceCard service={product} />
        </div>
      );
    })}
  </div>
</div>
      </section>

      <CallToAction />
    </>
  );
};

export default ServiceSingle;
