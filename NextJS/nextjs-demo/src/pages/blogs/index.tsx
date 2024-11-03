import Link from "next/link";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type BlogsPageProps = {
    posts: Post[];
}

export default function BlogsPage ({posts}: BlogsPageProps) {
    function handleRenderBlog  (values: Post[]){
        return (
            <>
                {values.map(item => {
                    return (
                        <Link key={item.id} href={`/blogs/${item.id}`}>
                            <div className="flex gap-2">
                                <span>Title: {item.title}</span>
                                <span>Content: {item.body}</span>
                            </div>
                        </Link>
                    )
                })}
            </>
        )
    }
    return (
        <ul>
            <li>
                {handleRenderBlog(posts)}
            </li>
        </ul>
    )
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return {
      props: {
        posts,
      },
    }
}