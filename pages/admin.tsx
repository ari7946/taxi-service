import type { NextPage } from 'next';
import Head from 'next/head';
import NavbarContainer from '../features/navbar/container/navbar.container';
import AdminLoginContainer from '../features/auth/components/admin/admin.container';

const AdminLoginPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Admin</title>
        <meta name="description" content="Login to view trips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarContainer />
      <AdminLoginContainer />
    </div>
  );
};

export default AdminLoginPage;
