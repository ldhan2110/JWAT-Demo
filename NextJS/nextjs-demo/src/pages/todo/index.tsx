
import Link from "next/link";
import { Button } from "@modules/common/components/Button";

export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

type TodoListPageProps = {
    data: Todo[];
}

export default function TodoListPage ({data}: TodoListPageProps) {
    function handleRenderTodo  (values: Todo[]){
        return (
            <>
                {values.map(item => {
                    return (
                        <Link key={item.id} href={`/todo/${item.id}`}>
                            <div className="flex gap-2 mt-15xl text-michaeljackson">
                                <span>Title: {item.title}</span>
                                <input type="checkbox" checked={item.completed}/>
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
                {handleRenderTodo(data)}
                <Button/>
            </li>
        </ul>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = 
    await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    console.log(process.env.NODE_ENV)
    // Pass data to the page via props
    return { props: { data }}
}

TodoListPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
      <>
        <span className="font-semibold" >This is the Todo List Page Layout</span>
        <>{page}</>
      </>
    )
}