import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import RemixRumble from "@site/static/img/remix_rumble_logo.webp";
import Head from "@docusaurus/Head";
// import { evaluateSync } from "@mdx-js/mdx";
import styles from "./index.module.css";
// import MDXComponents from "@site/src/theme/MDXComponents";
// import Test from "./test.mdx";
// import * as runtime from "react/jsx-runtime";
// import MDXContent from "@theme/MDXContent";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.header_wrapper)}>
      <div className={clsx("container", styles.zIndex1)}>
        <img src={RemixRumble} className={styles.header_img} />
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--lg", styles.header_button)}
            to="docs/season10/category/1티어-덱"
          >
            공략 바로가기
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  // string 형태의 mdx 파일을 아래와 같이 렌더링할 수 있음. (단 ::: 같은 remark 문법은 사용하지 못하는듯함)
  // const A = evaluateSync(`# 안녕`, {
  //   ...(runtime as any),
  //   useMDXComponents: () => ({ ...MDXComponents }),
  //   // remarkPlugins: [Admonition()],
  // }).default;
  //
  // <MDXContent>
  //   <A />
  // </MDXContent>

  return (
    <Layout
      title={"시즌 10 TFT"}
      description="롤체공략, TFT, 전략적팀전투, 롤체 시즌10 공략. 롤체 공략"
    >
      <Head>
        <meta
          name="naver-site-verification"
          content="e5c139d82cd88100b1b9ec71856f8b6ad6033ade"
        />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
