import React from "react"
import Layout from "../../components/layout"
import auth from "../../documents/authtoreceive.pdf"
import consent from "../../documents/consenttotreat.pdf"
import information from "../../documents/releaseofinformation.pdf"

export default () => {
  return (
    <Layout>
      <div className="section contain">
        <h2 className="title is-2 has-text-centered">Documents</h2>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h4 className="is-size-4">Consent to Treat</h4>
              <button className="button is-primary">
                <a href={consent} target="_blank" rel="noopener noreferrer">
                  Download Form
                </a>
              </button>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h4 className="is-size-4">
                Authorization to Receive Medical Information
              </h4>
              <div>
                <button className="button is-primary">
                  <a href={auth} target="_blank" rel="noopener noreferrer">
                    Download Form
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h4 className="is-size-4">Release of Information</h4>
              <div>
                <button className="button is-primary">
                  <a
                    href={information}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Form
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
