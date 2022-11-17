import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';

export default function NavbarHeader() {
  //this shit is really ugly jeez
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleOpen1 = () => {
    setOpen1(!open1);
    setOpen2(false);
    setOpen3(false);
  };
  const handleOpen2 = () => {
    setOpen1(false);
    setOpen2(!open2);
    setOpen3(false);
  };
  const handleOpen3 = () => {
    setOpen3(!open3);
    setOpen2(false);
    setOpen1(false);
  };

  return (
    <div className="navbarDiv">
      <Link to="/" id="linkBrand">
        Jack Regan
      </Link>

      <p className="link" onClick={handleOpen1}>
        {open1 ? (
          <ul className="menu">
            <li className="menu-item">
              <Link to="/py" className="linkDropdown">
                <div className="dropdownButton">Python</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/cpage" className="link">
                C
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/hc" className="link">HTML / CSS</Link>
            </li>
          </ul>
        ) : null}
        Programming
      </p>

      <p className="link" onClick={handleOpen2}>
        {open2 ? (
          <ul className="menu">
            <li className="menu-item">
              <Link to="/ca1" className="link">CA1-4</Link>
            </li>
            <li className="menu-item">
              <Link to="/ca2" className="link">CA5-8</Link>
            </li>
          </ul>
        ) : null}
        Content Areas
      </p>

      <p className="link" onClick={handleOpen3}>
        {open3 ? (
          <ul className="menu">
            <li className="menu-item">
              <Link to="/UIUX" className="link">UI/UX</Link>
            </li>
          </ul>
        ) : null}
        Projects
      </p>
      <Link to="/placement" className="link">
        Industry Placement
      </Link>
      <Link to="/event" className="link">
        Events
      </Link>
      <Link to="/blog" className="link">
        Blogs
      </Link>
      <Link to="/masterclass" className="link">
        Masterclass
      </Link>
      <Link to="/contact" className="link">
        Contact
      </Link>
    </div>
  );
}