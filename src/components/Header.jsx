import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header className="header">
            <h1>Redux Blog</h1>
            <nav>
                <ul><Link to="/">Home</Link></ul>
                <ul><Link to="post">Post</Link></ul>
            </nav>
        </header>
    )
}

export default Header;