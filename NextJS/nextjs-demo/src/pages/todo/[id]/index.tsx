/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router";

export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default function TodoItemPage (props: {data: Todo}) {
    const {data} = props;
    const router = useRouter();

    console.log(data);

    return (
        <>
            <div className="mx-2">Id: {data.id}</div>
            <div>Title: {data.title}</div>
            <div>UserId: {data.userId}</div>
            <div>Completed: {data.completed}</div>

            <button onClick={()=> router.back()}>Go back to Todo List</button>
        </>
    )
}

// export async function getServerSideProps(context: { params: {id: string}; }) {
//     const {params} = context;

//     // Fetch data from external API
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
//     const data = await res.json()
   
//     // Pass data to the page via props
//     return { props: { data } }
// }

// This also gets called at build time
export async function getStaticProps({ params }:{params: {id: string}}) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const post = await res.json()
   
    // Pass post data to the page via props
    return { props: { data: post } }
  }

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const posts = await res.json() as any[]

    const MAX = 10;
   
    // Get the paths we want to pre-render based on posts
    const paths: any[] = [];
    for (let i = 0; i < MAX; i++) {
        paths.push({
            params: { id: posts[i].id?.toString() },
        })
    }

    // const paths = posts.map((post: {id: number}, index) => {
    //     if (index > 10)
    //     return ({
    //         params: { id: post.id?.toString() },
    // })})
   
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}