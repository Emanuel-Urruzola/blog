import Image from 'next/image'
import styles from './page.module.css'
import { getAllFilesMetadata } from '../lib/mdx'
import Link from 'next/link'
export default async function Home () {
  const posts = await getData()
  console.log(posts)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            By{' '}
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {posts.map(post => (
          <Link
            href={`/${post.slug}`}
            className={styles.card}
            key={post.date}
          >
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}

async function getData () {
  const posts = await getAllFilesMetadata()
  return posts
}
