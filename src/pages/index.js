import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";

import Logo from "../components/Logo";
import Feature from "../components/Feature";
import HowToBox from "../components/HowToBox";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";
import PropTypes from "prop-types";

const features = [
  {
    type: "feature",
    title: "Getting Started",
    icon: "rocket",
    toUrl: "/docs/p4samd/overview",
    description: `Learn the main concepts of Mia-Care P4SaMD and how it supports Software as a Medical Device development`,
  },
  {
    type: "feature",
    title: "Frequently Asked Questions",
    icon: "learn",
    toUrl: "/docs/p4samd/faq",
    description: `Find answers to the most common questions about Mia-Care P4SaMD`,
  },
  {
    type: "feature",
    title: "Release Notes",
    icon: "releaseNotes",
    toUrl: "/docs/p4samd/release_notes",
    description: `Stay up to date with the latest changes and improvements to Mia-Care P4SaMD`,
  }
];

function Home() {
  const {siteConfig = {}} = useDocusaurusContext();

  return (
    <Layout
      description="The official handbook for Mia-Care P4SaMD — the Platform for Software as a Medical Device."
      title={siteConfig.title}
    >
      <div className={styles.container}>
        <header style={styles.header}>
          <div className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
              <Logo />
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
          </div>
        </header>
      </div>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <div className="col col--12">
                  <div className="row">
                    {features.map((props, idx) => {
                      if (props.type === 'feature') {
                        return <Feature key={idx} {...props} />;
                      } else {
                        const {title, description, links} = props;
                        return (
                          <HowToBox
                            description={description}
                            key={idx}
                            links={links}
                            title={title}
                          />
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

Home.propTypes = {
  description: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  type: PropTypes.string
};

export default Home;
