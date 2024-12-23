import { useRouter } from "next/router"

export default function InfoIdPage (){
    const router = useRouter();
    return (<>
        {router.query.id}
        <button onClick={()=> {router.push("/todo", "/todo?counter=10", {shallow:true})}}>Redirect</button>
    </>)
}