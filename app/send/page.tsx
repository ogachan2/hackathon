export default function Page({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    const matchdate = searchParams.matchdate;
  
    return (
      <>
        <h1>Page</h1>
        <p>matchdate: {matchdate}</p>
      </>
    );
  }