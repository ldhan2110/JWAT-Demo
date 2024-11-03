type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function BlogPage ({post}:{post: Post}) {
    return (
        <>
            <div>Id: {post?.id}</div>
            <div>Title: {post?.title}</div>
            <div>UserId: {post?.userId}</div>
            <div>Completed: {post?.body}</div>
        </>
    )
}

export async function getStaticProps(context: { params: {id: string} }) {
    const { params } = context
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )
    const data = await response.json()
  
    if (!data.id) {
      return {
        notFound: true
      }
    }
  
    return {
      props: {
        post: data
      }
    }
  }
  
  export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const paths = data.map((post:Post) => {
      return {
        params: { id: `${post.id}` }
      }
    })
  
    return {
      paths: paths,
      fallback: true
    }
  }