import React from "react"
import ContactForm from "../components/ContactForm"
import Layout from "../components/layout"
import SEO from "../components/seo"
import map from "../images/map.png"
export default () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="section contain">
        <div className="section" style={{ textAlign: "center" }}>
          <h2 className="title is-3 has-text-centered">Contact us</h2>
          <p className="is-size-4 has-text-centered">
            To schedule an appointment, please call, send us a message, or
            schedule an appointment with Calandly below.
          </p>
        </div>
        <div className="columns">
          <div className="column">
            <div>
              <div className="number-wrap">
                <h2 className="is-size-4">
                  Email:
                  <span className="is-size-5">
                    <a href="mailto:support@lumiri.com"> support@lumiri.com</a>
                  </span>{" "}
                </h2>
                <h2 className="is-size-4">
                  Phone:
                  <span className="is-size-5">
                    {" "}
                    <a href="tel:(240) 241-0420">(240) 241-0420</a>
                  </span>{" "}
                </h2>

                <h2 className="is-size-4">
                  Fax:
                  <span className="is-size-5">
                    {" "}
                    <a
                      href="tel:(862)
                    298-0732"
                    >
                      (862) 298-0732
                    </a>
                  </span>
                </h2>

                <h2 className="is-size-4">Address:</h2>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://goo.gl/maps/ZZBcm28HgATFGErp6"
                >
                  <div className="is-size-5">
                    <p>5550 Friendship Blvd Suite 360</p>
                    <p> Chevy Chase, MD 20815</p>
                  </div>
                  <img src={map} alt="Map of Lumiri location" />
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div>
              <ContactForm />
            </div>
            <div className="section">
              <h3 className="is-size-3">Schedule an appointment:</h3>
              <div className="iframe-container-cal">
                <iframe title="calendly iframe" src={"/calendar.html"}></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
