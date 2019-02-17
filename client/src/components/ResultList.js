import React from "react";

function ResultList(props) {
  return (
    <div className="container">
        <div className="row">
            {props.results.map(result => (
            <div key={result.id} className="col s12 m8">
                <h5 className="header"><strong>{result.volumeInfo.title}</strong></h5>
                <div className="card horizontal hoverable">
                    <div className="card-image">
                        <img src={result.volumeInfo.imageLinks.thumbnail} alt={result.title} target="_blank"/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>By <strong>{result.volumeInfo.authors}</strong></p>
                            <div dangerouslySetInnerHTML={{ __html: props.checkSnippet(result.searchInfo)}}/>
                        </div>
                        <div className="card-action">
                            <a href={result.volumeInfo.previewLink}>Preview book</a>
                            <a href={result.volumeInfo.previewLink}>Click to save</a>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default ResultList;
