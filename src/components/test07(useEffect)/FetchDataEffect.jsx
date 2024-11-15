import { useEffect, useState } from "react";

const FetchDataEffect = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            setPosts(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h3>First Post Title:</h3>
            {posts.length ? <h2>{posts[0].title}</h2> : <p>Loading...</p>}
        </div>
    );
};

export default FetchDataEffect;
