import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { useState } from "react";
import Image from "next/image";
import { storage } from "../libs/firebase";
import { useAuth } from "../libs/userContext";

const UserCard = () => {
  const [userImage, setUserImage] = useState<string>();

  // 中身取り出す
  const { user } = useAuth();

  // アップロード処理
  const upload = (event: any) => {
    // 選択された画像ファイル
    const file = event.target.files[0];

    // Firestorage上のアップロードする場所を指定
    const imageRef = ref(storage, "images/user");

    // アップロード処理
    uploadBytes(imageRef, file, {
      contentType: "image/jpeg",
    }).then(async (result) => {
      // 画像表示のためのURL取得
      const url = await getDownloadURL(result.ref);

      setUserImage(url);
    });
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      <input type="file" onChange={upload} />
      <h2>ユーザーカード</h2>
      {userImage && <Image layout="fill" src={userImage} alt="" />}
      {user.premium && <p>プレミアム会員</p>}
      <p>{user.customerId}</p>
    </div>
  );
};

export default UserCard;
