import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Service } from "@/types";

const ServiceCard = ({ service }: { service: Service }) => {
  const { title, card_image, card_description, description, banner } =
    service.frontmatter;

  const image = card_image || banner;
  const text = card_description || description;

  return (
    <a
      href={`/services/${service.slug}`}
      className="group block h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
    >
      {image && (
        <div className="mb-5 flex h-48 items-center justify-center rounded-xl ">
          <ImageFallback
            src={image}
            alt={title}
            width={220}
            height={220}
            className="max-h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <h5
        dangerouslySetInnerHTML={markdownify(title)}
        className="mb-3 text-xl font-bold text-[#070735] [&>br]:hidden"
      />

      {text && (
        <p className="mb-5 text-sm leading-relaxed text-gray-600">
          {text}
        </p>
      )}

      <span className="font-semibold text-[#e07a00]">
        Zobrazit produkt →
      </span>
    </a>
  );
};

export default ServiceCard;