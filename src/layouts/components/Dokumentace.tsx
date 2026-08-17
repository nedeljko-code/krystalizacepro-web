

type DocumentItem = {
  title: string;
  href: string;
};

type DokumentaceProps = {
  id: string;
  productName: string;
  description?: string;
  documents: DocumentItem[];
  downloadAllHref?: string;
};

const PreviewIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12s3.5-6 9.75-6 9.75 6 9.75 6-3.5 6-9.75 6S2.25 12 2.25 12Z"
    />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14"
    />
  </svg>
);

const Dokumentace = ({
  id,
  productName,
  description,
  documents,
  downloadAllHref,
}: DokumentaceProps) => {
  return (
    <div
      id={id}
      className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white shadow-sm"
    >
      <div className="p-7">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#e07a00]">
          Dokumentace k produktu
        </p>

        <h2 className="mb-3 text-3xl font-bold text-[#070735]">
          {productName}
        </h2>

        {description && (
          <p className="mb-8 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        )}

        <div>
          {documents.map((document) => (
            <div
              key={document.title}
              className="flex items-center justify-between border-b border-gray-200 py-3.5 last:border-b-0"
            >
              <span className="text-sm font-medium text-[#070735]">
                {document.title}
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={document.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Zobrazit ${document.title}`}
                  title="Zobrazit"
                  className="text-gray-400 transition-colors duration-300 hover:text-[#e07a00]"
                >
                  <PreviewIcon />
                </a>

                <a
                  href={document.href}
                  download
                  aria-label={`Stáhnout ${document.title}`}
                  title="Stáhnout"
                  className="text-[#e07a00] transition-transform duration-300 hover:translate-y-0.5"
                >
                  <DownloadIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {downloadAllHref && (
        <a
          href={downloadAllHref}
          className="mt-auto rounded-b-2xl bg-[#e07a00] px-8 py-3 text-center font-semibold text-white transition-opacity duration-300 hover:opacity-90"
        >
          Stáhnout vše ↓
        </a>
      )}
    </div>
  );
};

export default Dokumentace;