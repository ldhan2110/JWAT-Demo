import Link from "next/link";

export default function IndexPage (){
    return (
        <div className="flex gap-3">
            <span>{"This is a About Page"}</span>
            <Link href="/about/company">Go to About Company Page</Link>
        </div>
    )
}