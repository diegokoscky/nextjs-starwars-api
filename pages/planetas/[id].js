export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch(`https://swapi.dev/api/planets/${id}`);
    const data = await res.json();

    return {
        props: { data }
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://swapi.dev/api/planets');
    const data = await res.json();

    const paths = data.results.map((post) => {
        const urlArr = post.url.split("/");
        const id = urlArr[urlArr.length - 2];

        return {
            params: { id: id }
        }
    });

    return { paths, fallback: false }
}

export default function Planetas({ data }) {
    return (
        <div>
            <h1 className="text-center text-xl font-semibold my-6">
                { `Planeta ${data.name}` }
            </h1>
            <p><span className="font-semibold">Nome: </span>{data.name}</p>
            <p><span className="font-semibold">Clima: </span>{data.climate}</p>
            <p><span className="font-semibold">Terreno: </span>{data.terrain}</p>
        </div>
    )
}