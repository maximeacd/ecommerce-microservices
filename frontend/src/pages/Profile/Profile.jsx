import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getProfile } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        setProfile(res.data);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger le profil.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user, navigate]);

  if (loading) return <p className={styles.message}>Chargement du profil...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <h2>Mon profil</h2>

      {profile ? (
        <div className={styles.card}>
          <div className={styles.avatar}>
            <span>{profile.email?.charAt(0).toUpperCase()}</span>
          </div>
          <div className={styles.info}>
            <p><strong>Email :</strong> {profile.email || "—"}</p>
          </div>
          <button onClick={logout} className={styles.logoutBtn}>
            Se déconnecter
          </button>
        </div>
      ) : (
        <p className={styles.message}>Aucune donnée de profil trouvée.</p>
      )}
    </div>
  );
}