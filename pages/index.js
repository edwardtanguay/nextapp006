import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { SiteHeader } from '../components/SiteHeader';
import { Nav } from '../components/Nav';

export default function Home() {
    return (
        <>
            <Head>
                <title>Tech Resources</title>
                <meta name="description" content="Tech Resource Site" />
                <link rel="icon" href="/globe.ico" />
            </Head>
            <SiteHeader />
            <Nav />
            <p>Welcome to this site.</p>
            <p className={styles.highlight}>More changes coming soon...</p>
        </>
    );
}
