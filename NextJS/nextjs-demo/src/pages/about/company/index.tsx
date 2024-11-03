import { useRouter } from "next/router";

export default function AboutCompanyIndexPage () {

    const router = useRouter();

    return (
        <div className="flex gap-3">
            <span>{"This is a About Company Page"}</span>
            <span className="cursor-pointer" onClick={()=>{router.push("/about")}}>Go back to About Page</span>
        </div>
    )
}