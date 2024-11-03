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

    return (
        <>
            <div>Id: {data.id}</div>
            <div>Title: {data.title}</div>
            <div>UserId: {data.userId}</div>
            <div>Completed: {data.completed}</div>

            <button onClick={()=> router.back()}>Go back to Todo List</button>
        </>
    )
}

export async function getServerSideProps(context: { params: {id: string}; }) {
    const {params} = context;

    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
}