import React from 'react';

const SearchError = (props) => {
    return (
		<>
            <div className="loRow">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{height: "200px"}}>

                            </div>
                            <center>
                                <h1 style={{color: "#fff"}}>
                                    {props.error}
                                </h1>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchError;