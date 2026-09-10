import { getListPage } from "@/lib/contentParser";
import AboutSection from "@/partials/AboutSection";
// import BlogSection from "@/partials/BlogSection";
import CallToAction from "@/partials/CallToAction";
import CustomerSection from "@/partials/CustomerSection";
import Hero from "@/partials/Hero";
// import Responsibility from "@/partials/Responsibility";
import SeoMeta from "@/partials/SeoMeta";
import ServiceSection from "@/partials/ServiceSection";
import Testimonials from "@/partials/Testimonials";
import Responsibility from "@/partials/ResponsibilityNew";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const Home = async ({ params }: HomePageProps) => {
  const { locale } = await params;

  const { testimonial } = getListPage(
    "homepage/-index.md",
    locale,
  ).frontmatter;

  return (
    <>
      <SeoMeta />
      <Hero locale={locale} />
      <ServiceSection locale={locale}/>
      <AboutSection locale={locale} />
      <Responsibility locale={locale} />
      <CustomerSection locale={locale} />

      {testimonial.enable && (
        <hr className="border-t border-border" data-aos="fade-up-sm" />
      )}

      <Testimonials data={testimonial} />
      {/* <BlogSection locale={locale} /> */}
      <CallToAction locale={locale} />
    </>
  );
};

export default Home;