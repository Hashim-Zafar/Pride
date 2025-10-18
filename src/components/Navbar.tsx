import { navList } from "../utils/constants";
import { useEffect } from "react";
import gsap from "gsap";

function Navbar() {
  return (
    <nav>
      <div>
        <a href="#">
          <p>Pride</p>
        </a>
        <ul>
          {navList.map((item, index) => (
            <li key={index}>
              <a href={item.navLink}>{item.navItem}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
