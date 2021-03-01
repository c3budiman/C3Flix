import React, { 
	useEffect, 
	useState 
} from 'react';
import { useParams } from 'react-router-dom'
import store from '../../../redux/store';
import {getDetailOmdb} from '../../../redux/actions/getOmdb'
import {useSelector} from "react-redux"
import Skeleton from 'react-loading-skeleton'

const Detail = (props) => {
    const { id } = useParams()
    let loading = useSelector(state => state.omdbDetail.loading)
    let data = useSelector(state => state.omdbDetail.data)
    useEffect(() => {
        store.dispatch(getDetailOmdb(id))
	}, []);
    return (
        <>
            <div className="loRow">
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            {
                                loading ? <> 
                                    <Skeleton width="300px" height="429px" /> 
                                </> : <>
                                    <img className="img-fluid" src={data.Poster} alt="poster" />
                                </>
                            }
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-6">
                            {
                                loading ? <Skeleton height="40px" /> : <> <h1 className="colorWhite">{data.Title}  <span className="years">({data.Year})</span> </h1> </>
                            }

                            {
                                loading ? <Skeleton height="100px" /> : <> <p className="colorWhite">{data.Plot}</p> </>
                            }

                            <hr />

                            {
                                loading ? <Skeleton height="40px" /> : <> <p className="colorWhite lineheight20">Genre : {data.Genre}</p> </>
                            }
                            {
                                loading ? <Skeleton height="40px" /> : <> <p className="colorWhite lineheight20">Country : {data.Country}</p> </>
                            }
                            {
                                loading ? <Skeleton height="40px" /> : <> <p className="colorWhite lineheight20">Actors : {data.Actors}</p> </>
                            }

                            <br />

                            {
                                loading ? <Skeleton height="40px" /> : <> <p className="colorWhite bold">Rating : {data.imdbRating}</p> </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;