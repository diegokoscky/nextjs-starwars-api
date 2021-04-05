import Link from 'next/link';

export async function getStaticProps(context) {
    const res = await fetch('https://swapi.dev/api/vehicles/');
    const data = await res.json();

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }
    }
}

export default function Veiculos({ data }) {
    return (
        <>
            <h1 className="text-center text-xl font-semibold my-6">Veiculos</h1>
            <div className="flex flex-wrap justify-center">
                { data.results.map(veiculos => {
                    const urlArr = veiculos.url.split("/");
                    const id = urlArr[urlArr.length - 2];
                    
                    return (
                        <div className="mx-2 mb-2 bg-gray-700 py-2 px-4 rounded-md text-white">
                            <Link href={ `/veiculos/${id}` }>
                                { veiculos.name }
                            </Link>
                        </div>
                    )
                }) }
            </div>
        </>
    )
}
