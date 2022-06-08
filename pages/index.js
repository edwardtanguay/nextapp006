import { DynamicHead } from '../components/DynamicHeader';
import styles from '../styles/Home.module.css';
import { SiteHeader } from '../components/SiteHeader';
import { Nav } from '../components/Nav';

export default function Home() {
    return (
        <>
        	<DynamicHead/>
            <SiteHeader />
            <Nav />
            <p>Welcome to this site.</p>
            <p className={styles.highlight}>More changes coming soon...</p>
        </>
    );
}
