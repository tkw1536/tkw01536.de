import * as React from "react";
import Head from "next/head";

export default class Home extends React.Component {
  render() {
    return <>
      <Head>
        <title>Tom Wiesing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <div className="row" id="header">
        <div className="col s12">
          <h2>Tom Wiesing</h2>

          <a href="mailto:tom@tkw01536.de" className="waves-effect waves-light btn blue"><i className="material-icons left">email</i>tom@tkw01536.de</a>
          <a href="https://github.com/tkw1536" className="btn teal" target="_blank"><i className="fa fa-github"></i></a>
        </div>
      </div>

      <div className="row">
        <div className="col s12 l6">
          <div className="card">
            <div className="card-content">
              <img src="/profile.png" width="100" height="100" alt="Profile Image" />
              <p>
                Hi, my name is Tom Wiesing and I am a <em>PhD candidate</em> in the <em>KWARC Group at FAU Erlangen-N&uuml;rnberg</em>.
              </p>
              <p>
                In my free time I like to code and make random websites.
                I also volunteer for the <em>Jacobs Alumni Association</em>, acting as their <em>Assessor of Information Technology</em>.
              </p>
            </div>
            <div className="card-action">
              <a href="https://kwarc.info/" target="_blank" rel="noreferrer noopener">KWARC Group</a>
              <a href="https://jacobs-alumni.de/" target="_blank" rel="noreferrer noopener">Jacobs Alumni</a>
              <a href="https://guys.wtf/" target="_blank" rel="noreferrer noopener">Collection of Random websites</a>
            </div>
           </div>

            <div className="card">
              <div className="card-content">
                <span className="card-title">Research</span>
                <p className="roman">
                  Mathematical practice typically consists of four aspects:
                </p>
                  <ol className="roman">
                      <li>
                          making <em>inferences</em> about mathematical knowledge;
                      </li>
                      <li>
                          writing <em>narrating</em> content about specific knowledge;
                      </li>
                      <li>
                          generating large amounts of informormation and <em>concretizing</em> it in some form of database; and
                      </li>
                      <li>
                          making <em>computations. </em>
                      </li>
                  </ol>
                <p className="roman">
                  These are connected by a central ontology.
                </p>
                <p>
                  My research topic is how to digitally support such <em>tetrapodal mathematics</em> with a focus on search.
                  I am performing this research using research systems such as <em>MathHub</em>, <em>MathWebSearch</em> and <em>MathDataHub</em>.
                </p>
                <p>
                  I am particularly interested in mathematical datasets, and how these are typicalled searched through in practice.
                  Datasets can include anything from simple listings of interesting mathematical objects; via corpora of papers written in LaTeX; to strictly defined objects in some logical system.
                </p>
                <p>
                  Search practices consists of queries and how to evaluate them. 
                  Queries can range from simple things like <i>find all groups with a specific generator</i> to more complex things like <i>find all papers that cite a paper which contains a formula that unifies with 
                  <svg role="math" xmlns="http://www.w3.org/2000/svg" width="100" height="30" style={{
                    'marginTop': -15,
                    position: 'relative',
                    top: 15,
                  }}>
                    <switch>
                      <foreignObject requiredExtensions="http://www.w3.org/1998/Math/MathML" width="70" height="30">
                        <math id="p1.1.m1.1" alttext="\frac{x+y}{x}" display="inline"><semantics id="p1.1.m1.1a"><mfrac id="p1.1.m1.1.1" xref="p1.1.m1.1.1.cmml"><mrow id="p1.1.m1.1.1.2" xref="p1.1.m1.1.1.2.cmml"><mi id="p1.1.m1.1.1.2.2" xref="p1.1.m1.1.1.2.2.cmml">x</mi><mo id="p1.1.m1.1.1.2.1" xref="p1.1.m1.1.1.2.1.cmml">+</mo><mi id="p1.1.m1.1.1.2.3" xref="p1.1.m1.1.1.2.3.cmml">y</mi></mrow><mi id="p1.1.m1.1.1.3" xref="p1.1.m1.1.1.3.cmml">x</mi></mfrac><annotation-xml encoding="MathML-Content" id="p1.1.m1.1b"><apply id="p1.1.m1.1.1.cmml" xref="p1.1.m1.1.1"><divide id="p1.1.m1.1.1.1.cmml" xref="p1.1.m1.1.1"></divide><apply id="p1.1.m1.1.1.2.cmml" xref="p1.1.m1.1.1.2"><plus id="p1.1.m1.1.1.2.1.cmml" xref="p1.1.m1.1.1.2.1"></plus><ci id="p1.1.m1.1.1.2.2.cmml" xref="p1.1.m1.1.1.2.2">𝑥</ci><ci id="p1.1.m1.1.1.2.3.cmml" xref="p1.1.m1.1.1.2.3">𝑦</ci></apply><ci id="p1.1.m1.1.1.3.cmml" xref="p1.1.m1.1.1.3">𝑥</ci></apply></annotation-xml></semantics></math>
                      </foreignObject>
                      <g>
                        <text y="15" fontSize="16">(x + y) / x</text>
                        <text x="70" y="15" fontSize="14">.</text>
                      </g>
                    </switch>
                    <switch>
                      <foreignObject requiredExtensions="http://www.w3.org/1998/Math/MathML" width="70" height="30" x="35" y="0">
                        <math><mtext>.</mtext></math>
                      </foreignObject>
                    </switch>
                  </svg>
                </i>
                </p>
              </div>
              <div className="card-action">
                <a href="https://mathhub.info/" target="_blank" rel="noreferrer noopener">MathHub</a>
                <a href="https://data.mathhub.info/" target="_blank" rel="noreferrer noopener">MathDataHub</a>
                <a href="https://github.com/MathWebSearch/mws" target="_blank" rel="noreferrer noopener">MathWebSearch</a>
              </div>
            </div>
          </div>

          <div className="col s12 l6">

            <div className="card">
              <div className="card-content">
                <span className="card-title">Other Associations</span>
                <p>
                  I have visited the <em>National Institute of Standards and Technology</em> four times between 2017 and 2021 in order to help work on <em>LaTeXML</em>, a software that transforms <em>LaTeX</em> documents into annotated <em>XHTML</em>.
                </p>
                <hr />
                <p>
                  I was formerly associated to <em>Jacobs University Bremen</em>, where I achieved a
                  <em>Master Of Science</em> in <em>Data Engineering</em> (Class of 2017) and a <em>Bachelor Of Science</em> in <em>Applied &amp; Computational Mathematics</em> (Class of 2015).
                  I was also the <em>President of the Graduate Student Association</em> of Jacobs University for the majority of my final two semesters.
                </p>
              </div>
              <div className="card-action">
                <a href="https://www.nist.gov/" target="_blank" rel="noreferrer noopener">NIST</a>
                <a href="https://dlmf.nist.gov/LaTeXML/" target="_blank" rel="noreferrer noopener">LaTeXML</a>
                <a href="https://www.jacobs-university.de/" target="_blank" rel="noreferrer noopener">Jacobs University</a>
              </div>
            </div>


            <div className="card">
              <div className="card-content">
                <span className="card-title">Contact</span>
                You may best contact me by sending an email to <em>tom@tkw01536.de</em>.
                I prefer plain text emails in english, but I also speak german.
                <br />
                My public PGP key has the fingerprint <em>CF21 1096 D46E 2650 6A1D 6F7B DABB 5DB5 A09C 64BA</em> and should be accessible from all of the commonly used keyservers.
                <br />
                If you want me to keep your message confidential, please send me a PGP encrypted email and I will respond accordingly.
              </div>
              <div className="card-action">
                <a href="./tom@tkw01536.de.pub">Download PGP Key</a>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <span className="card-title">Legal</span>
                <ClientSideScript src='https://inform.everyone.wtf/legal.min.js' data-site-id='4694798b-f1f9-43fe-a26a-5188d6e241ec' />
              </div>
            </div>
          </div>
        </div>
    </>
  }
}

interface ScriptBasedContentProps {
  src: string;
  [key: string]: string;
}

/**
 * ClientSideScript ensures that a script is only run client-side.
 * Performs no property escaping what-so-ever, and should only be run on trusted data!
 * 
 * It runs inside of a <p> Element.
 */
class ClientSideScript extends React.Component<ScriptBasedContentProps> {
  static asHTML(props: ScriptBasedContentProps) {
    const attributes = Object.entries(props)
      .filter(([_, value]) => typeof value === 'string')
      .map(([key, value]) => key + '="' + value + '"').join(" ")
    return '<script ' + attributes + '></script>'
  }
  render() {
    // See https://github.com/facebook/react/issues/10923#issuecomment-338715787
    // We are setting the content via dangerouslySetInnerHTML to prevent client-side overrides!
    const __html = ClientSideScript.asHTML(this.props);
    return <p dangerouslySetInnerHTML={{__html}}></p>
  }
}