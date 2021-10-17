import { useAuth } from "../libs/userContext";

const UserCard = () => {
  // 中身取り出す
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>ユーザーカード</h2>
      {user.premium && <p>プレミアム会員</p>}
      <p>{user.customerId}</p>
    </div>
  );
};

export default UserCard;
