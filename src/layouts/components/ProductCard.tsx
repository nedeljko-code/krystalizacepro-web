import Link from "next/link";

type ProductCardProps = {
  type: string;
  usage: string;
  packageInfo: string;
  application: string;
  technicalSheet?: string;
  safetySheet?: string;
  contactLink: string;
};

const ProductCard = ({
  type,
  usage,
  packageInfo,
  application,
  technicalSheet,
  safetySheet,
  contactLink,
}: ProductCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="px-6 py-6">
        <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-primary">
          Technické informace
        </p>

        <div className="divide-y divide-border">
          <div className="grid grid-cols-[130px_1fr] gap-4 py-3 first:pt-0">
            <span className="font-semibold text-text">Typ produktu</span>
            <span className="text-text/70">{type}</span>
          </div>

          <div className="grid grid-cols-[130px_1fr] gap-4 py-3">
            <span className="font-semibold text-text">Použití</span>
            <span className="text-text/70">{usage}</span>
          </div>

          <div className="grid grid-cols-[130px_1fr] gap-4 py-3">
            <span className="font-semibold text-text">Balení</span>
            <span className="text-text/70">{packageInfo}</span>
          </div>

          <div className="grid grid-cols-[130px_1fr] gap-4 py-3">
            <span className="font-semibold text-text">Aplikace</span>
            <span className="text-text/70">{application}</span>
          </div>
        </div>

        {(technicalSheet || safetySheet) && (
          <div className="mt-5 border-t border-border pt-4">
            {technicalSheet && (
              <a
                href={technicalSheet}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between py-2 font-semibold text-text transition-colors hover:text-primary"
              >
                <span>Technický list</span>
                <span aria-hidden="true">↓</span>
              </a>
            )}

            {safetySheet && (
              <a
                href={safetySheet}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between py-2 font-semibold text-text transition-colors hover:text-primary"
              >
                <span>Bezpečnostní list</span>
                <span aria-hidden="true">↓</span>
              </a>
            )}
          </div>
        )}
      </div>

      <Link
        href={contactLink}
        className="block w-full bg-primary px-6 py-4 text-center font-semibold text-text-light transition-opacity hover:opacity-90"
      >
        Kontaktujte nás
      </Link>
    </div>
  );
};

export default ProductCard;