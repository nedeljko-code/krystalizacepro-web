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
      <div className="px-5 py-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-primary">
          Technické informace
        </p>

        <div className="divide-y divide-border">
          <div className="grid grid-cols-[112px_1fr] gap-3 py-2.5 first:pt-0">
            <span className="text-sm font-semibold text-text">
              Typ produktu
            </span>
            <span className="text-sm leading-snug text-text/70">{type}</span>
          </div>

          <div className="grid grid-cols-[112px_1fr] gap-3 py-2.5">
            <span className="text-sm font-semibold text-text">Použití</span>
            <span className="text-sm leading-snug text-text/70">{usage}</span>
          </div>

          <div className="grid grid-cols-[112px_1fr] gap-3 py-2.5">
            <span className="text-sm font-semibold text-text">Balení</span>
            <span className="text-sm leading-snug text-text/70">
              {packageInfo}
            </span>
          </div>

          <div className="grid grid-cols-[112px_1fr] gap-3 py-2.5">
            <span className="text-sm font-semibold text-text">Aplikace</span>
            <span className="text-sm leading-snug text-text/70">
              {application}
            </span>
          </div>
        </div>

        {(technicalSheet || safetySheet) && (
          <div className="mt-4 border-t border-border pt-3">
            {technicalSheet && (
              <a
                href={technicalSheet}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between py-2 text-sm font-semibold text-text transition-colors hover:text-primary"
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
                className="flex items-center justify-between py-2 text-sm font-semibold text-text transition-colors hover:text-primary"
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
        className="block w-full bg-primary px-5 py-3.5 text-center text-sm font-semibold text-text-light transition-opacity hover:opacity-90"
      >
        Kontaktujte nás
      </Link>
    </div>
  );
};

export default ProductCard;