import Link from 'next/link'

export default function Nav() {
    return (
        <div className="py-4 px-8 bg-gray-700 text-white flex justify-between">
            <div className="text-xl">
                <Link href="/">
                    Starwars API
                </Link>
            </div>
            <div className="flex items-center">
                <div className="ml-8">
                    <Link href="/pessoas">
                        Pessoas
                    </Link>
                </div>
                <div className="ml-8">
                    <Link href="/planetas">
                        Planetas
                    </Link>
                </div>
                <div className="ml-8">
                    <Link href="/veiculos">
                        Veículos
                    </Link>
                </div>
            </div>
        </div>
    )
}
