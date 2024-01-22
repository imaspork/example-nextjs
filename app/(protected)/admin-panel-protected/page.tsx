import Image from "next/image";
import Link from "next/link";
import styles from "./admin-panel-protected.module.scss";

const AdminPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Welcome to the admin page that is protected.
      <div className={styles.div2}>This is a module styled component </div>
    </main>
  );
};

export default AdminPage;
