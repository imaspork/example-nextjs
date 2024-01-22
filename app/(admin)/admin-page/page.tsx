import Image from "next/image";
import Link from "next/link";

const AdminPageNotProtected: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Welcome to the admin page that is NOT protected
    </main>
  );
};

export default AdminPageNotProtected;
