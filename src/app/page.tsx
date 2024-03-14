//Root page example

import Link from "next/link"

export default function App(): React.ReactNode {
    return (
        <div>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
            <h1>App</h1>
        </div>
    )
}