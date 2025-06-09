"use client";

import { useOptimistic } from "react";

const LikeButton = () => {
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    (likes) => likes + 1,
    0
  );

  const handleLike = async () => {
    setOptimisticLikes();
    await fetch("/api/like", { method: "POST" });
  };

  return <button onClick={handleLike}>Likes: {optimisticLikes}</button>;
};

export default LikeButton;
