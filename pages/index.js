/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { DynamicHead } from '../components/DynamicHead';
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
        <img src="images/screenWithCode.jpg"/>
        </>
    );
}
