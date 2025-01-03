import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons";






import logo from "../public/logo.jpeg"
// Importation des composants
import ModelViewer from "./ ModelViewer.jsx";
import Footer from "./FOOTER/Footer.jsx";
import Home from "./MENU/Home";
import ParfumFemme from "./MENU/ParfumFemme";
import ParfumHomme from "./MENU/ParfumHomme";
import Promotion from "./MENU/Promotion";

export default function App() {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#f8f9fa",
      borderBottom: "1px solid #ddd",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      borderRadius: "60px",
      border: "1px solid #000",

    },
    links: {
      display: "flex",
      gap: "20px",
    },
    link: {
      textDecoration: "none",
      color: "#000",
      fontWeight: "bold",
      fontSize: "14px",
      transition: "color 0.3s ease",

    },
    linkHover: {
      color: "#6351ce",
    },
    icons: {
      display: "flex",
      gap: "15px",
    },
    icon: {
      fontSize: "20px",
      color: "#000",
      transition: "transform 0.3s ease, color 0.3s ease",
    },
    iconHover: {
      color: "#6351ce",
      transform: "scale(1.2)",
    },
  };

  return (
    <>
      <Router>
        <div>
          <nav style={styles.navbar}>
            <div style={styles.logo}>
              <img src="../public/logo.jpeg" alt="Logo" style={{ height: "40px" }} />
            </div>

            <div style={styles.links}>
              <Link
                to="/"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
              >
                Accueil
              </Link>
              <Link
                to="/parfum-femme"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
              >
                Parfum femme
              </Link>
              <Link
                to="/parfum-homme"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
              >
                Parfum Homme
              </Link>
              <Link
                to="/promotion"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
              >
                Promotion
              </Link>
            </div>

            <div style={styles.icons}>
              <Link
                to="/account"
                style={styles.icon}
                onMouseEnter={(e) => {
                  e.target.style.color = styles.iconHover.color;
                  e.target.style.transform = styles.iconHover.transform;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = styles.icon.color;
                  e.target.style.transform = "scale(1)";
                }}
              >
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <Link
                to="/search"
                style={styles.icon}
                onMouseEnter={(e) => {
                  e.target.style.color = styles.iconHover.color;
                  e.target.style.transform = styles.iconHover.transform;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = styles.icon.color;
                  e.target.style.transform = "scale(1)";
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </Link>
              <Link
                to="/cart"
                style={styles.icon}
                onMouseEnter={(e) => {
                  e.target.style.color = styles.iconHover.color;
                  e.target.style.transform = styles.iconHover.transform;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = styles.icon.color;
                  e.target.style.transform = "scale(1)";
                }}
              >
                <FontAwesomeIcon icon={faShoppingBag} />
              </Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parfum-femme" element={<ParfumFemme />} />
            <Route path="/parfum-homme" element={<ParfumHomme />} />
            <Route path="/promotion" element={<Promotion />} />
          </Routes>
        </div>
      </Router>
      <ModelViewer />
      <Footer />
    </>
  );
}
