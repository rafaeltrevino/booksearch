import React from 'react';

function SearchBox(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m12">
                    <form>
                        <div className="form-group">
                        <label htmlFor="search">Search:</label>
                        <input
                            onChange={props.handleInputChange}
                            value={props.search}
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Book Title"
                            id="search"
                        />
                        <br />
                        <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
