function Error({ statusCode }: {statusCode: number}) {
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
   
  Error.getInitialProps = ({ res, err }: {res: {statusCode: number}, err: {statusCode: number} }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    console.log(res, err);
    return { statusCode }
  }
   
  export default Error