import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";
import {Button} from 'ui';

type FeatureItem = {
  title: string;
  url: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '공략 기여',
    url: require('@site/static/img/poro1.webp').default,
    description: (
      <>
        공략 기여는 언제든지 환영합니다! <Link href={'https://open.kakao.com/o/gMgieVSf'}>카카오톡</Link>으로 문의해주세요.
      </>
    ),
  },
  {
    title: '깃허브 참여',
    url: require('@site/static/img/poro2.webp').default,
    description: (
      <>
        롤체 공략 사이트를 같이 만들어가실 기여자분들은 언제든 환영입니다!
      </>
    ),
  },
  {
    title: '버그 제보',
    url: require('@site/static/img/poro3.webp').default,
    description: (
      <>
        버그제보는 <Link href={'https://open.kakao.com/o/gMgieVSf'}>카카오톡</Link> 혹은 <Link href={'https://github.com/gaki2/tft-docs'}>깃허브</Link>로 알려주세요! 😄
      </>
    ),
  },
];

function Feature({title, url, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={url} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Button></Button>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}