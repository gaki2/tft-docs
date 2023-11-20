import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RemixRumble from '@site/static/img/remix_rumble_logo.png';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.header_wrapper)}>
      <div className={clsx("container", styles.zIndex1)}>
        <img src={RemixRumble} className={styles.header_img} />
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--lg", styles.header_button)}
            to="docs/season10/category/1티어-덱">
            공략 바로가기
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
