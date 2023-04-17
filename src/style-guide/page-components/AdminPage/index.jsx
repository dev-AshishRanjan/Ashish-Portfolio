import React, { useState } from 'react';
import styles from './style.module.scss';
import AdminLogin from '@/style-guide/components/AdminLogin';
import AdminPanel from '@/style-guide/components/AdminPanel';

const AdminPage = () => {
  const [admin, setAdmin] = useState(false);
  return (
    <div className={styles.AdminPage}>
      {
        admin ? <AdminPanel /> : <AdminLogin setAdmin={setAdmin} />
      }
    </div>
  )
}

export default AdminPage