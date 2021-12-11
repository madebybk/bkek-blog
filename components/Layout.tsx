import Meta from './Meta'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                    <Footer />
                </main>
            </div>
        </>
    )
}

export default Layout