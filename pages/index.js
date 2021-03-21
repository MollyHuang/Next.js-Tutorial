import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio obcaecati excepturi neque quo voluptatem placeat vero rem tempore ut reprehenderit debitis, distinctio dolores! Sapiente iusto voluptatibus perspiciatis praesentium autem?</p>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel animi a maiores ex earum architecto consequatur, optio sit atque enim labore ipsa corporis suscipit est omnis, perspiciatis odio tempore recusandae.</p>
      <Link href="/mollyListing">
        <a className={styles.btn}>See Molly Listing</a>
      </Link>
    </div>
  )
}
