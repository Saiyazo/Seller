const users = [
  { email: "buyer@gmail.com", password: "buyer123", role: "buyer", name: "ผู้ซื้อ" },
  { email: "seller@gmail.com", password: "seller123", role: "seller", name: "Somsak Rakdeaw" },
  { email: "admin@gmail.com", password: "admin123", role: "admin", name: "แอดมิน" },
];

export function loginMock(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.email === email);
      if (!user) return reject({ message: "ไม่พบผู้ใช้" });
      if (user.password !== password) return reject({ message: "รหัสผ่านไม่ถูกต้อง" });

      const token = btoa(`${email}:${Date.now()}`);
      resolve({ name: user.name, role: user.role, email: user.email, token });
    }, 500);
  });
}

export function saveAuth(payload) {
  localStorage.setItem("auth", JSON.stringify(payload));
}
export function getAuth() {
  const raw = localStorage.getItem("auth");
  return raw ? JSON.parse(raw) : null;
}
export function logout() {
  localStorage.removeItem("auth");
}
