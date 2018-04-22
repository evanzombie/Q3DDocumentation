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
    return baseUrl + "docs/" + (language ? language + "/" : "") + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + "/" : "") + doc;
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
            <a href={this.docUrl("doc1.html", this.props.language)}>Getting Started</a>
            <a href={this.docUrl("doc2.html", this.props.language)}>Guides</a>
            <a href={this.docUrl("doc3.html", this.props.language)}>API Reference</a>
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
