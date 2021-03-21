// sfc + tab
// <Link href="/molly"> ==> molly/index.js
import Head from 'next/head'
import styles from '../../styles/MollyListing.module.css'

const MollyListing = () => {
  return (
    <>
      <Head>
        <title>Molly List | All Mollys</title>
        <meta name="keywords" content="next.js react" />
      </Head >
      <div>
        <h1>All Mollys</h1>
      </div>
    </>
  );
}

export default MollyListing;