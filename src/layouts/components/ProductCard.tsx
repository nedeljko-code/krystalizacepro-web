import Link from "next/link";

type ProductCardLabels = {
  technical_info: string;
  type: string;
  usage: string;
  package: string;
  application: string;
  documentation: string;
  contact: string;
};

type ProductCardProps = {
  type: string;
  usage: string;
  packageInfo: string;
  application: string;
  documentationHref: string;
  contactLink: string;
  labels: ProductCardLabels;
};

const ProductCard = ({
  type,
  usage,
  packageInfo,
  application,
  documentationHref,
  contactLink,
  labels,
}: ProductCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="px-5 py-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-primary">
          {labels.technical_info}
        </p>

        <div className="divide-y divide-border">
          <div className="grid grid-cols-[112px_1fr] gap-3 py-2.5 first:pt-0">
            <span className="text-sm font-semibold text-text">
              {labels.type}
            </span>
            <span className="text-sm leading-snug text-text/70">{type}</span>
          </div>

          <div className="grid grid-cols-[112px_1fr] gap-3 py-2.5">
            <span className="text-sm font-semibold text-text">
              {labels.usage}
            </span>
            <span className="text-sm leading-snug text-text/70">{usage}</span>
          </div>

          <div className="grid grid-cols-[112px_1fr] gap-3 py-2.5">
            <span className="text-sm font-semibold text-text">
              {labels.package}
            </span>
            <span className="text-sm leading-snug text-text/70">
              {packageInfo}
            </span>
          </div>

          <div className="grid grid-cols-[112px_1fr] gap-3 py-2.5">
            <span className="text-sm font-semibold text-text">
              {labels.application}
            </span>
            <span className="text-sm leading-snug text-text/70">
              {application}
            </span>
          </div>
        </div>

        <div className="mt-4 border-t border-border pt-3">
          <a
            href={documentationHref}
            className="flex items-center justify-between py-2 text-sm font-semibold text-text transition-colors hover:text-primary"
          >
            <span>{labels.documentation}</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <Link
        href={contactLink}
        className="block w-full bg-primary px-5 py-3.5 text-center text-sm font-semibold text-text-light transition-opacity hover:opacity-90"
      >
        {labels.contact}
      </Link>
    </div>
  );
};

export default ProductCard;
