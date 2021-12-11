import Image from 'next/image'
import igLogo from '../public/instagram_logo.jpg'
import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={footerStyles.blankLines}></div>
            <a href="https://www.instagram.com/bkek.podcast/" target='_blank' rel="noreferrer">
                <div className={footerStyles.logo}>
                    <Image
                        src={igLogo}
                        alt='BK Instagram'
                        width={30}
                        height={30}
                        layout='responsive'
                    />
                </div>
            </a>
        </div>
    )
}

export default Footer
