/* eslint-disable react/jsx-no-literals */
import React from 'react';
import Layout from '@theme/Layout';
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

function getMailLink() {
  const location = ExecutionEnvironment.canUseDOM ? window.location.href : null;
  const emailSubject = `Documentation broken link report`;
  const emailBody = `The link ${location} appears to be broken.`;
  return `mailto:info@mia-care.io?subject=${emailSubject}&body=${emailBody}`;
}

function NotFound() {
  return (
    <Layout title="Page Not Found">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Page Not Found</h1>
            <p>Sorry, we could not find what you were looking for.</p>
            <p>You can:</p>
            <ul>
              <li>Go back to the <a href="/">home page</a></li>
              <li><a href={getMailLink()} target="_blank" rel="noreferrer">Let us know about the broken link</a></li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
