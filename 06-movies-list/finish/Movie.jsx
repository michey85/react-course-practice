function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;

    console.log('movie render');

    return (
        <div id={id} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {poster === 'N/A' ? (
                    <img
                        className="activator"
                        src={`https://via.placeholder.com/300x400?text=${title}`}
                    />
                ) : (
                    <img className="activator" src={poster} />
                )}
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {title}
                </span>
                <p>
                    {year} <span className="right">{type}</span>
                </p>
            </div>
        </div>
    );
}
export { Movie };
