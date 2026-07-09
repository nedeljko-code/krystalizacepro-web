import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import config from "@/config/config.json";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";

const AppointmentPage = () => {
  const { title, subtitle, description, meta_title, contact_way, form, contact_title } = getListPage(
    "appointment/-index.md",
  ).frontmatter;

  const { appointment_form_action }: { appointment_form_action: string } =
    config.params;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
      />
      <section className="section mt-24 sm:mt-20" data-aos="fade-up-sm">
        <div className="container">
          <div className="mb-24" data-aos="fade-up-sm">
            <p
              dangerouslySetInnerHTML={markdownify(subtitle!)}
              className="text-primary text-base-sm mb-4 text-left"
              data-aos="fade-up-sm"
            />

            <CustomHeading
              as="h1"
              text={title}
              className="text-h3 md:text-h2 lg:text-h1 text-left"
              dataAos="fade-up-sm"
            />
          </div>
          <div className="row justify-center lg:justify-between g-5">
            <div
              className="col-12 lg:col-6 order-2 lg:order-1"
              data-aos="fade-up-sm"
            >
              <div
                className="p-10 bg-light rounded-lg"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                <form action={appointment_form_action} method="POST">
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="120"
                      >
                        <label htmlFor="f-name" className="form-label">
                          {" "}
                          {form.first_name_label}
                        </label>
                        <input
                          id="f-name"
                          name="f-name"
                          className="form-input"
                          placeholder={form.first_name_placeholder}
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="140"
                      >
                        <label htmlFor="l-name" className="form-label">
                          {" "}
                          {form.last_name_label}
                        </label>
                        <input
                          id="l-name"
                          name="l-name"
                          className="form-input"
                          placeholder={form.last_name_placeholder}
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="160"
                      >
                        <label htmlFor="email" className="form-label">
                          {form.email_label}
                        </label>
                        <input
                          id="email"
                          name="email"
                          className="form-input"
                          placeholder={form.email_placeholder}
                          type="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="mb-6"
                        data-aos="fade-up-sm"
                        data-aos-delay="180"
                      >
                        <label htmlFor="message" className="form-label">
                          {" "}
                          {form.message_label}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-input"
                          placeholder={form.message_placeholder}
                          rows={9}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div
                      className="col"
                      data-aos="fade-up-sm"
                      data-aos-delay="200"
                    >
                      <CustomButton
                        label={form.submit_label}
                        variant="primary"
                        button_type="submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div
              className="col-12 lg:col-6 order-1 lg:order-2"
              data-aos="fade-up-sm"
            >
              <h2
                className="mb-10 h4"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                {contact_title}
              </h2>
              {contact_way.map((contact: { icon: string; value: string; name: string }, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-3 mb-6 last:mb-0"
                  data-aos="fade-up-sm"
                  data-aos-delay={100 + i * 20}
                >
                  <DynamicIcon
                    icon={contact.icon}
                    className="mr-4 shrink-0 text-primary text-xl"
                  />
                  <p
                    className="mb-0"
                    dangerouslySetInnerHTML={markdownify(contact.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default AppointmentPage;
