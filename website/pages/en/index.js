/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + "/siteConfig.js");

function imgUrl(img) {
  return siteConfig.baseUrl + "img/" + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + "docs/" + (language ? language + "/" : "") + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + "/" : "") + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || "";
    return (
      <SplashContainer>
        <Logo img_src={imgUrl("docusaurus.svg")} />
        <div className="inner  ">
          <ProjectTitle />
          <PromoSection>
            {/* <Button href="#try">Try It Out</Button> */}
            <a href={docUrl("doc1.html", language)} className="whiteFont">
              Get Started
            </a>
            <a href={docUrl("doc2.html", language)} className="whiteFont">
              Documentation and APIs
            </a>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container padding={["bottom", "top"]} id={props.id} background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: "Write code using Quantum API to control objects, scenes and implement game logic.",
        image: imgUrl("asset.png"),
        imageAlign: "top",
        title: "Asset Implementation"
      },
      {
        content: "Simple, small and blazing fast build workflow. No more configuration debugging!",
        image: imgUrl("lean.png"),
        imageAlign: "top",
        title: "Lean Developer Experience"
      },
      {
        content: "Lightweight and adaptable community driven base for agile development.",
        image: imgUrl("future.png"),
        imageAlign: "top",
        title: "Playground for Future Development"
      }
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div className="productShowcaseSection paddingBottom" style={{ textAlign: "center", paddingBottom: " 40px" }}>
    <h2>Sign Up Here to Join The Developer List</h2>
    <p>Sign up to receive new announcements, product release dates, and more.</p>
    <div>
      <div class="grid">
        <div class="grid__col--12">
          <form id="contact-form" method="post" action="send_email.php">
            <label for="inputName">Name</label>
            <input
              style={{
                boxShadow: "none",
                border: "none",
                padding: "20px 50px 20px 20px",
                margin: "10px",
                fontSize: "15px"
              }}
              className="form__input"
              id="inputName"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <br />
            <label for="inputEmail">Email</label>
            <input
              style={{
                boxShadow: "none",
                border: "none",
                padding: "20px 50px 20px 20px",
                margin: "10px",
                fontSize: "15px"
              }}
              className="form__input"
              id="inputEmail"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              style={{ color: "black", border: "1px solid", cursor: "pointer", fontSize: "15px" }}
              className="btn moreBtn"
              id="email-submit-btn"
              type="submit"
              value="JOIN"
              name="emailSubmit"
            />
          </form>
        </div>
      </div>
    </div>
    {/* <MarkdownBlock>These are features of this project</MarkdownBlock> */}
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: "Talk about learning how to use this",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "right",
        title: "Learn How"
      }
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: "Talk about trying this out",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "left",
        title: "Try it Out"
      }
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: "This is another description of how this project is useful",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "right",
        title: "Description"
      }
    ]}
  </Block>
);

const NewPanel = props => (
  <div className="mycolor">
    <p className="bgSize">INSPIRATION TO GET YOU STARTED</p>
    <p>Discover what's possible with our API</p>
    <a href="#" className="moreBtn">
      Learn More
    </a>
  </div>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl("users.html", props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <NewPanel />
          <FeatureCallout />
          {/* <LearnHow className="mycolor" />
           <TryOut />   
             <Description />  
              <Showcase language={language} /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
