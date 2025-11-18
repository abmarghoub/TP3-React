function Notifications() {
  const notifications = 0;

  return (
    <div>
      <h3>Notifications</h3>
      {notifications > 0 && <p>Vous avez des notifications</p>}
      {notifications === 0 && <p>Vous n'avez aucun notification</p>}
    </div>
  );
}

export default Notifications;
