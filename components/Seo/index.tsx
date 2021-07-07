import { FC } from 'react';
import Head from 'next/head';

import { BASE_URL, IMG_BASE_URL } from '@configs/endpoint';
import seo from '@configs/seo';

type SeoProps = {
  title?: string;
};

const Seo: FC<SeoProps> = ({ title }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />

      <link rel="preconnect" href={BASE_URL} />
      <link rel="preconnect" href={IMG_BASE_URL} />

      <title>{title ? `${title} | ${seo.brand}` : seo.brand}</title>
    </Head>
  );
};

export default Seo;
