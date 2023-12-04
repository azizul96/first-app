
const DynamicPage = ({params,searchParams}) => {
    console.log(params,searchParams); 
    return (
        <div>
            <h2>This is Dynamic Page {params.id}</h2>
            <h2>This is Dynamic Page {params.searchParams}</h2>
        </div>
    );
};

export default DynamicPage;