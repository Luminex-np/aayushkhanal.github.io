import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta name="description" content="Aayush Khanal — Aerospace Engineer specializing in aerodynamics, CFD, propulsion, and design. Portfolio showcasing projects and experience." />
        <meta name="keywords" content="aerospace engineer, CFD, aerodynamics, portfolio, Aayush Khanal" />
        <meta property="og:title" content="Aayush Khanal — Aerospace Engineer" />
        <meta property="og:description" content="Aerospace engineering portfolio featuring CFD, aerodynamic design, and propulsion projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luminex-np.github.io/aayushkhanal.github.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/aayushkhanal.github.io/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
