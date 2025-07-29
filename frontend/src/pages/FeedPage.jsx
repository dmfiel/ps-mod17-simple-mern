import { useState, useEffect } from "react";
import { backendClient } from "../clients/backendClient";
import Post from "../components/Post";

function FeedPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await backendClient.get("/posts", {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("social-app-token"),
            )}`,
          },
        });

        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await backendClient.post(
        "/posts",
        { title, body },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("social-app-token"),
            )}`,
          },
        },
      );

      console.log(res);

      setTitle("");
      setBody("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex flex-col gap-2 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Feed Page</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2  p-5 rounded-md"
      >
        <h2 className="text-m font-bold">What's in your mind?</h2>
        <label htmlFor="title" />
        <input
          type="text"
          title={title}
          placeholder="Title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="outline p-2 rounded-md w-full"
          required
        />

        <label htmlFor="body" />
        <input
          type="text"
          name="body"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="outline p-2 rounded-md w-full"
          required
        />

        <input
          type="submit"
          value="Post"
          className="outline p-2 rounded-md w-full hover:bg-emerald-400 hover:text-white hover:cursor-pointer"
        />
      </form>
      <hr className="mt-2 w-full" />
      <div>
        {posts.length > 0 && (
          <>
            <h2 className="text-xl font-bold mb-5">Posts</h2>
            {posts.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </>
        )}
      </div>
    </main>
  );
}

export default FeedPage;
