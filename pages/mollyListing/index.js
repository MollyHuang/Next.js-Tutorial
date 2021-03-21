// sfc + tab
// <Link href="/molly"> ==> molly/index.js
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/MollyListing.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      mollys: data
    }
  }
}

const MollyListing = ({ mollys }) => {
  return (
    <>
      <Head>
        <title>Molly List | All Mollys</title>
        <meta name="keywords" content="next.js react" />
      </Head >
      <div>
        <h1>All Mollys</h1>
        {mollys.map(user => (
          <Link href={'/mollyListing/' + user.id} key={user.id}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

export default MollyListing;