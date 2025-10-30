import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getMyOrders } from "../../api/orderApi";
import { useNavigate } from "react-router-dom";
import styles from "./Orders.module.css";

export default function Orders() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await getMyOrders(user.email);
        setOrders(res.data);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger vos commandes.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, navigate]);

  if (loading) return <p className={styles.message}>Chargement des commandes...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <h2>Mes commandes</h2>

      {orders.length === 0 ? (
        <p className={styles.message}>Vous n’avez pas encore passé de commande.</p>
      ) : (
        <div className={styles.orderList}>
          {orders.map((order, index) => (
            <div key={order.id} className={styles.orderCard}>
              <div className={styles.header}>
                <span className={styles.orderId}>Commande #{index+1}</span>
                <span className={styles.date}>
                  {new Date(order.createdAt || Date.now()).toLocaleDateString("fr-FR")}
                </span>
              </div>

              <div className={styles.details}>
                <p><strong>Statut :</strong> {order.status || "En cours"}</p>
                <p><strong>Total :</strong> {order.totalPrice ? `${order.totalPrice.toFixed(2)} €` : "—"}</p>
                {order.items && order.items.length > 0 && (
                  <ul className={styles.itemsList}>
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.productName} × {item.quantity} — {item.price} €
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}