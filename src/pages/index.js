import Link from 'next/link';

export default function Home() {

    return (
        <div>
            <Link href={'/about'} className="text-3xl font-bold">
                About
            </Link>

            <Link
                className="text-3xl font-bold"
                href={'/productsList'}
                style={{
                    marginLeft: '10px'
                }}
            >
                productList
            </Link>
            <h1 className="text-3xl font-bold">Hello, Next.js!</h1>
        </div>
    )
}
