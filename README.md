# React & Express - Login System

## 📌 Project Overview
Sistem login sederhana menggunakan **React** untuk frontend dan **Express 4** sebagai backend. Autentikasi pengguna menggunakan **JWT (JSON Web Token)** dengan database yang sudah disediakan, sehingga siapa pun yang ingin meng-clone proyek ini tidak perlu membuat database dari awal.

---
## 🛠️ Installation & Setup
### **1️⃣ Clone Repository**
```sh[
https://github.com/ammarkhocan/react-login-system.git
cd react-login-system
```

### **2️⃣ Setup Database**
1. **Buka MySQL / MariaDB**
2. **Import file database**
```sh
mysql -u root -p < database/authentication.sql
```
3. **Cek tabel pengguna**
```sql
SELECT * FROM users;
