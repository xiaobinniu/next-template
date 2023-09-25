export default function Test({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1> id: {params.id} </h1>
        </div>
    );
}

export async function generateStaticParams() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((post) => ({
        id: post.toString(),
    }))
}

