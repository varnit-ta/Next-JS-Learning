// [...slug] catch all segment
// [[...slug]] optional catch all segment

interface DocsProps {
    params: {
        slug: string[];
    };
}

const Docs: React.FC<DocsProps> = ({ params }) => {
    if( params.slug?.length === 2){
        return (
            <div>
                <h1>
                    Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
                </h1>
            </div>
        );
    }else if( params.slug?.length === 1){
        return (
            <div>
                <h1>
                    Viewing docs for feature {params.slug[0]}
                </h1>
            </div>
        );
    }

    return <h1>Docs Home Page</h1>
};

export default Docs;