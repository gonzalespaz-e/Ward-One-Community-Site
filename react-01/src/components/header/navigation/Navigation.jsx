import "./Navigation.css";

const Navigation = ({ isOpen }) => {
    return (
        <nav id="header-nav" className={isOpen ? "columns" : "columns hidden"}>
            <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">Photos</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
