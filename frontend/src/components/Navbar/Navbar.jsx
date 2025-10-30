import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">🛒 MyShop</Link>
      </div>

      <ul className={styles.navLinks}>
        <li><Link to="/">Produits</Link></li>
        {user && <li><Link to="/orders">Mes commandes</Link></li>}
        {user && <li><Link to="/profile">Profil</Link></li>}
      </ul>

      <div className={styles.authButtons}>
        {!user ? (
          <>
            <Link to="/login" className={styles.loginBtn}>Connexion</Link>
            <Link to="/register" className={styles.signupBtn}>Inscription</Link>
          </>
        ) : (
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Déconnexion
          </button>
        )}
      </div>
    </nav>
  );
}