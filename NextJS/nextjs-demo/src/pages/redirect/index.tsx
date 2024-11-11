export default function RedirectPage () {
    return (
        <>
            <form action="/api/redirect">
                <input placeholder="Username" name="username"/>
                <input placeholder="Password" name="password"/>               
                <input type="submit" value="submit"/>
            </form>
        </>
    )
}
