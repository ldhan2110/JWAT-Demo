export type Student = {
    studentName: string;
    className: string;
}

type StudentPageProps = {
    data: Student[];
}

export default function TodoListPage ({data}: StudentPageProps) {
    function handleRenderTodo  (values: Student[]){
        return (
            <>
                {values.map((item,indx) => {
                    return (
                            <div className="flex gap-2" key={indx}>
                                <span>{item.studentName}</span>
                                <span>{item.className}</span>
                            </div>
                    )
                })}
            </>
        )
    }

    return (
        <ul>
            <li>
                {handleRenderTodo(data)}
            </li>
        </ul>
    )
}

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3001/student')
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data }, revalidate: 10 }
}