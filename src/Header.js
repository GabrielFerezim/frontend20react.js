import './Header.css';

function Header(props) {
  return (
    <div className="Header">
        <div className="headerLogo"> 
            <h1> Logo </h1>
        </div>
        <div className="headerMenu">
            <a href=""> Home</a>
            <a href=""> Sobre</a>
        </div>
    </div>
  );
}

export default Header;
