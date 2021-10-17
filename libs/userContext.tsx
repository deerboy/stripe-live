import { onAuthStateChanged } from "@firebase/auth";
import { doc, getDoc } from "@firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { User } from "../types/User";

// 箱を定義
const AuthContext = createContext<{
  user: User | null;
}>({
  user: null,
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // ログインユーザー監視
    const watch = onAuthStateChanged(auth, async (user) => {
      const querySnapshot = await getDoc(doc(db, `users/${user?.uid}`));
      const fbUser = querySnapshot.data() as User;
      setUser(fbUser);
    });

    return () => {
      watch();
    };
  }, []);

  return (
    // 中身を詰めて、箱を配る人を用意する
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

// 箱を開ける作業
export const useAuth = () => useContext(AuthContext);
