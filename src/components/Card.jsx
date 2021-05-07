

const CardComponent = ({data}) =>{
    return( 
        <div className="card my-5">
            <div className="card py-5">
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <h6 className="card-subtitle mb-4 text-muted">By {data.authors}</h6>
                <p className="card-text">{data.numberOfPages} pages</p>
                <p className="card-text">From: {data.country}</p>
                <p className="card-text">Released: {data.released.slice(0, 10)}</p>
            </div>
            </div>            
        </div>
    )
};

export default CardComponent;