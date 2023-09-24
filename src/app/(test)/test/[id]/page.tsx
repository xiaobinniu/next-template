export default function Test({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1> id: {params.id} </h1>
        </div>
    );
}


export async function generateStaticParams() {
    return [1, 2, 3].map((post) => ({
        id: post.toString(),
    }))
}

