import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work using the links below.
              </p>

              <p2>
                <a href ="http://github.com/Brianhin94">Github</a>
              </p2>
              <p3><a href = "https://www.linkedin.com/in/brian-hinchey/"> LinkedIn </a> </p3>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}