import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import { getListPage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import { ArrowDown, FileText, Mail } from "lucide-react";

type ReferralContent = {
  title: string;
  meta_title: string;
  description: string;
  eyebrow: string;
  intro: string;
  steps_title: string;
  steps_link: string;
  steps: { title: string; text: string }[];
  conditions_title: string;
  conditions: { title: string; text: string }[];
  reward_title: string;
  reward_paragraphs: string[];
  download_title: string;
  download_label: string;
  download_status: string;
  download_note: string;
  email_label: string;
  legal_note: string;
};

const referralEmail = "doporuceni@4beton.cz";

export default async function ReferralPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getListPage("doporucte-nas/-index.md", locale)
    .frontmatter as ReferralContent;

  return (
    <>
      <SeoMeta title={content.title} meta_title={content.meta_title} description={content.description} />

      <section className="section mt-32 py-18 sm:mt-28 xl:py-21">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <div className="min-w-0">
              <p className="mb-6 text-base-sm font-medium uppercase tracking-widest text-primary">{content.eyebrow}</p>
              <CustomHeading as="h1" text={content.title} className="mb-8 text-h3 text-balance md:text-h2 lg:text-h1-sm" />
              <p className="max-w-[700px] text-lg leading-relaxed text-text/80 lg:text-[22px]">{content.intro}</p>
              <a href="#postup" className="mt-8 inline-flex items-center gap-3 font-medium underline decoration-primary underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary">
                {content.steps_link}<ArrowDown className="h-5 w-5 shrink-0" aria-hidden="true" />
              </a>
            </div>
            <div className="min-w-0 rounded-2xl bg-text p-7 text-white sm:p-10">
              <FileText className="mb-8 h-10 w-10 text-secondary" strokeWidth={1.5} aria-hidden="true" />
              <h2 className="mb-5 text-h4 text-white">{content.download_title}</h2>
              <p className="mb-7 text-white/85">{content.download_note}</p>
              <span id="download-note" className="mb-4 inline-block rounded-full border border-secondary/40 px-3 py-1 text-base-sm text-secondary">{content.download_status}</span>
              <button type="button" disabled aria-describedby="download-note" className="flex w-full cursor-default! items-center justify-between gap-4 rounded border border-white/30 bg-white/10 px-5 py-4 text-left text-base-sm leading-relaxed text-white/80">
                {content.download_label}<ArrowDown className="h-5 w-5 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="postup" aria-labelledby="steps-title" className="section scroll-mt-28 bg-light py-18 xl:py-21">
        <div className="container">
          <h2 id="steps-title" className="mb-12 text-h3 md:text-h2">{content.steps_title}</h2>
          <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.steps.map((step, index) => (
              <li key={index} className="min-w-0 rounded-xl border border-border bg-white p-7 sm:p-8">
                <span aria-hidden="true" className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-medium text-text">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mb-4 text-h5">{step.title}</h3>
                <p className="text-text/80">
                  {index === 2 ? (
                    <>
                      {step.text.split(referralEmail)[0]}
                      <span className="inline-block whitespace-nowrap">
                        <a href={`mailto:${referralEmail}`} className="font-medium text-text underline decoration-primary underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{referralEmail}</a>
                        {step.text.split(referralEmail)[1]}
                      </span>
                    </>
                  ) : step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="conditions-title" className="section py-18 xl:py-21">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <h2 id="conditions-title" className="text-h3 md:text-h2">{content.conditions_title}</h2>
            <div className="min-w-0 divide-y divide-border">
              {content.conditions.map((condition, index) => (
                <div key={index} className={index === 0 ? "border-l-2 border-primary pb-7 pl-6" : "py-7"}>
                  <h3 className="mb-3 text-h5">{condition.title}</h3>
                  <p className="leading-relaxed text-text/80">{condition.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-6 rounded-xl bg-light p-7 sm:p-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <h2 className="text-h3">{content.reward_title}</h2>
            <div className="space-y-5 text-text/80">
              {content.reward_paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0 pb-18 xl:pb-21">
        <div className="container">
          <div className="grid items-start gap-8 rounded-2xl bg-text p-7 text-white sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:p-14">
            <div className="min-w-0">
              <Mail className="mb-6 h-9 w-9 text-secondary" aria-hidden="true" />
              <h2 className="mb-5 text-h3 text-white">{content.email_label}</h2>
              <CustomButton link={`mailto:${referralEmail}`} label={referralEmail} variant="secondary" className="max-w-full break-all normal-case! text-base-sm! sm:text-base!" />
            </div>
            <p className="border-l border-white/30 pl-6 text-base-sm leading-relaxed text-white/85">{content.legal_note}</p>
          </div>
        </div>
      </section>
    </>
  );
}
