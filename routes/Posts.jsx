import { useState } from "react";
import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";
import { API_URL } from "../utils/constants";

function Posts() {
    return (
      <>
        <Outlet />
        <main>
          <PostList />
        </main>
      </>
    );
}

export default Posts;

export const loader = async () => {
  const response = await fetch(`${API_URL}/posts`)
  const resData = await response.json()

  return resData.posts
}