import Link from 'next/link'

const Home = () => {
    return(
        <>
        <Link href="/">Home</Link>< br />
        <Link href="/about">About</Link><br />
        <Link href="/posts">Posts</Link><br />
        <Link href="/postsWithBlocking">Posts with blocking</Link><br />
        <Link href="/postsWithFalse">Posts with false</Link><br />
        <Link href="/postsWithTrue">Posts with true</Link><br />
        <Link href="/postsWithSSR">Posts with SSR</Link><br />
        </>
    )
}
export default Home