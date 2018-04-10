/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    // return baseUrl + "docs/" + (language ? language + "/" : "") + doc;
    return baseUrl + "docs/" + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    // return baseUrl + (language ? language + "/" : "") + doc;
    return baseUrl + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home" style={{ visibility: "hidden" }}>
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("doc1.html")}>Getting Started</a>
            <a href={this.docUrl("doc2.html")}>Documentation</a>
            <a href={this.docUrl("doc3.html")}>API Reference</a>
          </div>
          <div>
            <h5>Terms</h5>
            {/* <a href={this.pageUrl('users.html' )}> */}
            <a href="http://quantum3d.com/privacy/" target="_blank">
              Privacy
            </a>
            <a href="http://quantum3d.com/terms-of-service/" target="_blank">
              Terms & Conditions of Sale
            </a>
            {/* <a href="https://discordapp.com/">Project Chat</a> */}
            <a href="http://quantum3d.com/terms-of-purchase/" target="_blank">
              Terms & Conditions of Purchase Order
            </a>
          </div>
          <div>
            <h5>Support</h5>

            <a href="http://quantum3d.com/contact/" target="_blank">
              Contact
            </a>

            {/* <a href={this.props.config.baseUrl + "blog"}>Contact</a>   
            <a href="https://github.com/">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>

            */}
          </div>
        </section>

        <a href="http://quantum3d.com/" target="_blank" className="fbOpenSource">
          {this.props.config.footerIcon && (
            <img
              src={this.props.config.baseUrl + this.props.config.footerIcon}
              alt={this.props.config.title}
              width="300"
              height="58"
            />
          )}
        </a>
        <a href="http://quantum3d.com/" target="_blank" className="fbOpenSource">
          {/* <img
            src={this.props.config.baseUrl + 'img/oss_logo.png'}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        */}
        </a>
        <section className="copyright">Copyright &copy; {currentYear} Quantum3D</section>
      </footer>
    );
  }
}

module.exports = Footer;
