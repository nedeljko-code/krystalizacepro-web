import Dokumentace from "@/components/Dokumentace";
import { getListPage } from "@/lib/contentParser";

const { frontmatter } = getListPage("dokumentace/-index.md", "cs");

const { title, description, product_label, documents, actions } = frontmatter;

const natrixDocuments = [
  {
    title: documents.technical_sheet,
    href: "/documents/natrix/technicky-list.pdf",
  },
  {
    title: documents.safety_sheet,
    href: "/documents/natrix/bezpecnostni-list.pdf",
  },
  {
    title: documents.declaration,
    href: "/documents/natrix/prohlaseni-o-vlastnostech.pdf",
  },
  {
    title: documents.application_guide,
    href: "/documents/natrix/aplikacni-navod.pdf",
  },
  {
    title: documents.transport_conditions,
    href: "/documents/natrix/dopravni-podminky.pdf",
  },
  {
    title: documents.terms_conditions,
    href: "/documents/natrix/vseobecne-obchodni-podminky.pdf",
  },
];

const prixDocuments = [
  {
    title: documents.technical_sheet,
    href: "/documents/prix/technicky-list.pdf",
  },
  {
    title: documents.safety_sheet,
    href: "/documents/prix/bezpecnostni-list.pdf",
  },
  {
    title: documents.declaration,
    href: "/documents/prix/prohlaseni-o-vlastnostech.pdf",
  },
  {
    title: documents.application_guide,
    href: "/documents/prix/aplikacni-navod.pdf",
  },
  {
    title: documents.transport_conditions,
    href: "/documents/prix/dopravni-podminky.pdf",
  },
  {
    title: documents.terms_conditions,
    href: "/documents/prix/vseobecne-obchodni-podminky.pdf",
  },
];

export default function DokumentacePage() {
  return (
    <section className="section mt-32 sm:mt-28">
      <div className="container" data-aos="fade-up-sm">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-h2">{title}</h1>

          <p className="mx-auto max-w-[650px] text-gray-600">{description}</p>
        </div>

        <div className="mx-auto max-w-[1080px]">
          <div className="row">
            <div className="col-12 lg:col-6">
              <Dokumentace
                id="prix"
                productName="Prix"
                documents={prixDocuments}
                downloadAllHref="/documents/prix/prix-dokumentace.zip"
                productLabel={product_label}
                previewLabel={actions.preview}
                downloadLabel={actions.download}
                downloadAllLabel={actions.download_all}
              />
            </div>

            <div className="col-12 mt-8 lg:mt-0 lg:col-6">
              <Dokumentace
                id="natrix"
                productName="Natrix"
                documents={natrixDocuments}
                downloadAllHref="/documents/natrix/natrix-dokumentace.zip"
                productLabel={product_label}
                previewLabel={actions.preview}
                downloadLabel={actions.download}
                downloadAllLabel={actions.download_all}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
