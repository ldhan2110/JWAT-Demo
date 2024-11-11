export default function HelloPage ({data}: {data: {name: string}}){
    return <>Hello: {data.name}</>
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/hello')
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
}