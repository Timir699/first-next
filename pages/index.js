import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Blog | Home</title>
                <meta name="keywords" content="blogs" />
            </Head>
        <div className={styles.container}>
            <h1 className={styles.title}>Home</h1>
            <p className={styles.text}> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                corrupti incidunt, alias nobis iusto, architecto quibusdam odit
                quisquam unde rem perferendis officia debitis sunt itaque
                temporibus cupiditate nesciunt magni nam.
            </p>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                corrupti incidunt, alias nobis iusto, architecto quibusdam odit
                quisquam unde rem perferendis officia debitis sunt itaque
                temporibus cupiditate nesciunt magni nam.
            </p>
            <Link href="/blogs">
                <a className={styles.btn}> Blogs </a>
            </Link>
        </div>
        </div>
    );
}
