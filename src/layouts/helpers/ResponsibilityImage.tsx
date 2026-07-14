import ImageFallback from "./ImageFallback";

type ResponsibilityImageProps = {
  image: string;
};

const ResponsibilityImage = ({ image }: ResponsibilityImageProps) => {
  return (
    <div className="relative md:w-[40%]" data-aos="zoom-in-sm">
      <ImageFallback
        src={image}
        alt="Profesionální aplikace H-KRYSTAL"
        width={300}
        height={500}
        className="max-md:aspect-video max-md:w-full object-cover md:size-full"
        loading="lazy"
      />
    </div>
  );
};

export default ResponsibilityImage;