import * as React from "react";
import Head from "next/head";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons'

export default class Home extends React.Component {
  render() {
    return <>
      <Head>
        <title>Tom Wiesing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <header className="row">
        <div className="col s4">
          <h3>Tom Wiesing</h3>
        </div>
        <div className="col s8" style={{paddingTop: '2em', float: 'right'}}>
            <a href="mailto:tom@tkw01536.de" className="waves-effect waves-light btn blue"><i className="material-icons left">email</i>tom@tkw01536.de</a>
            &nbsp;
            <a href="https://github.com/tkw1536" className="btn teal" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            &nbsp;
            <a href="https://mastodon.social/@tkw01536" className="btn teal" target="_blank" rel="me"><FontAwesomeIcon icon={faMastodon} /></a>
        </div>        
      </header>

      <div className="row" style={{marginTop: '-1em'}}>
        <div className="col s12 l6">
          <div className="card">
            <div className="card-content">
              <img src="/profile.png" width="100" height="100" alt="Profile Image" />
              <p>
                Hi, my name is Tom Wiesing and I am a <em>PhD candidate</em> in the <em>KWARC Group at FAU Erlangen-N&uuml;rnberg</em> and work at the <em>FAU Competence Center for Research Data and Information</em>
              </p>
              <br />
              <p>
                In my free time I like to code and make random websites.
              </p>
            </div>
            <div className="card-action">
              <a href="https://guys.wtf/" target="_blank" rel="noreferrer noopener">Collection of Random websites</a>
              <a href="https://www.cdi.fau.de/en/" target="_blank" rel="noreferrer noopener">FAU-CDI</a>
              <a href="https://kwarc.info/" target="_blank" rel="noreferrer noopener">KWARC</a>
            </div>
           </div>


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
                <p>
                  You may best contact me by sending an email to <em>tom@tkw01536.de</em>.
                  I prefer plain text emails in english, but I also speak german.
                </p>
                <ClientSideScript src='https://inform.everyone.wtf/legal.min.js' data-site-id='4694798b-f1f9-43fe-a26a-5188d6e241ec' />
              </div>
            </div>
          </div>

          <div className="col s12 l6">

            <div className="card">
              <div className="card-content">
                <span className="card-title">Research Summary</span>
                  <p>
                    Modern science relies on an ever-increasing amount of data, a fact that is broadly acknowledged by politics, funding agencies and universities alike.
                    Scientists author, curate, and eventually use or search through varying amounts of data and datasets, which frequently revolve around objects.
                    Some examples of such objects include artifacts of cultural heritage or mathematical structures.
                    <hr />
                    It is well established that datasets should be Findable, Accessible, Interoperable and Reuseable - <em>FAIR</em> for short - in order to become useable in a broader and possibly public context.
                    Typical research questions involve more than a single dataset, instead relying on <em>a large group of datasets that effectively act as a single (possibly federated) dataset</em>.
                    Such <em>Research Data Commons</em> accelerate science and prevent duplicate datasets.
                    <hr />
                    I asked the following research questions:
                    <ol>
                      <li>
                          How can researchers be enabled to answer their questions using a Research Data Commons?
                      </li>
                      <li>
                          What types of software are required for a Research Data Commons? In particular, is it necessary to provide an explicit infrastructure?
                      </li>
                      <li>
                          Which costs and benefits are associated with designing, developing, deploying and using a Research Data Commons?
                      </li>
                    </ol>
                    <hr />
                    To answer these questions, I explored the design space of Research Data Commons software by designing three systems - MathDataHub, the WissKI Distillery and the WissKI Data Viewer - which demonstrate that there is a disconnect between the costs and benefits of Research Data Commons.
                    Costs need to be payed upfront at the beginning of a research project, whereas the benefits only come into effect much later.
                    The latter are also conditional: They only arise if other researchers invest likewise.
                    To minimize its effect, and enable the formation of Research Data Commons, it becomes necessary to decrease costs or to increase benefits.
                  </p>
                </div>

              <div className="card-action">
                <a href="https://github.com/MathHubInfo/mhd" target="_blank" rel="noreferrer noopener">MathDataHub</a>
                <a href="https://github.com/fau-cdi/wisski-distillery" target="_blank" rel="noreferrer noopener">WissKI Distillery</a>
                <a href="https://github.com/fau-cdi/hangover" target="_blank" rel="noreferrer noopener">WissKI Data Viewer</a>
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