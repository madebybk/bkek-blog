import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>BKEK</span> Blog
            </h1>
            <p className={headerStyles.description}>
                Adventures Apart and Together
            </p>
        </div>
    )
}

export default Header
