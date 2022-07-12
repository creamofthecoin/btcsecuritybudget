import Head from "next/head";

export default function Metatags() {
  return (
    <Head>
      <title>
        BTC Security Budget | Bitcoin Decentralization | Bitcoin Miner Reward
      </title>
      <meta
        name="description"
        content="Bitcoin security budget: The block reward is vanishing, and depending on transaction fees for security may not be a sufficient incentive to keep up with network value (or market cap). State actors are also motivated by ideology, not profit. So, help us keep BTC safe by engaging in the discussion."
      ></meta>
      <meta
        property="og:title"
        content="BTC Security Budget | Bitcoin Decentralization | Bitcoin Miner Reward"
        key="title"
      />
      <meta property="og:title" content="Bitcoin Security Budget" />
      <meta property="og:url" content="https://www.btcsecuritybudget.com/" />
      <meta
        property="og:description"
        content="Will Bitcoin thrive once it has to depend on transaction fees to incentivize miners to keep mining? Play with this thought experiment and join the discussion!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="./BtcSecurityBudget-OpenGraph.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  );
}
