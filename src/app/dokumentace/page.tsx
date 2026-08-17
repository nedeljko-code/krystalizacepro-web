import Dokumentace from "@/components/Dokumentace";

const natrixDocuments = [
  {
    title: "Technický list",
    href: "/documents/natrix/technicky-list.pdf",
  },
  {
    title: "Bezpečnostní list",
    href: "/documents/natrix/bezpecnostni-list.pdf",
  },
  {
    title: "Prohlášení o vlastnostech",
    href: "/documents/natrix/prohlaseni-o-vlastnostech.pdf",
  },
  {
    title: "Aplikační návod",
    href: "/documents/natrix/aplikacni-navod.pdf",
  },
  {
    title: "Dopravní podmínky",
    href: "/documents/natrix/dopravni-podminky.pdf",
  },
  {
    title: "Všeobecné obchodní podmínky",
    href: "/documents/natrix/vseobecne-obchodni-podminky.pdf",
  },
];

const prixDocuments = [
  {
    title: "Technický list",
    href: "/documents/prix/technicky-list.pdf",
  },
  {
    title: "Bezpečnostní list",
    href: "/documents/prix/bezpecnostni-list.pdf",
  },
  {
    title: "Prohlášení o vlastnostech",
    href: "/documents/prix/prohlaseni-o-vlastnostech.pdf",
  },
  {
    title: "Aplikační návod",
    href: "/documents/prix/aplikacni-navod.pdf",
  },
  {
    title: "Dopravní podmínky",
    href: "/documents/prix/dopravni-podminky.pdf",
  },
  {
    title: "Všeobecné obchodní podmínky",
    href: "/documents/prix/vseobecne-obchodni-podminky.pdf",
  },
];

export default function DokumentacePage() {
  return (
    <section className="section">
      <div className="container"
      data-aos="fade-up-sm"
      >

        <div className="mb-16 mt-8 text-center">
          <h1 className="mb-4 text-h2">
            Dokumentace
          </h1>

          <p className="mx-auto max-w-[650px] text-gray-600">
            Veškerá technická a produktová dokumentace přehledně
            na jednom místě.
          </p>
        </div>

        <div className="mx-auto max-w-[1080px]">
          <div className="row gy-8">
          <div className="col-12 lg:col-6">
            <Dokumentace
              id="natrix"
              productName="Natrix"
              documents={natrixDocuments}
              downloadAllHref="/documents/natrix/natrix-dokumentace.zip"
            />
          </div>

          <div className="col-12 lg:col-6">
            <Dokumentace
              id="prix"
              productName="Prix"
              documents={prixDocuments}
              downloadAllHref="/documents/prix/prix-dokumentace.zip"
            />
          </div>
          </div>
        </div>

      </div>
    </section>
  );
}