import '../../parts/LoRow.css';
import React, { 
	// useEffect, 
	useState 
} from 'react';
import {useSelector} from "react-redux"
import Skeleton from 'react-loading-skeleton'
import {checkImage} from '../../../utils/strHelpers'
import {getSearchMovieWithYear} from '../../../redux/actions/getOmdb'
import store from '../../../redux/store';

const SearchBarResult = (props) => {
	const [delayHandler, setDelayHandler] = useState(null)
	const [year, setYear] = useState(2020)
	let SearchingLoaded = useSelector(state => state.searchOmdb.SearchingLoaded)
	let FeaturedMovie = useSelector(state => state.searchOmdb.searchMovieData)
	let keyword = useSelector(state => state.searchOmdb.keyword)

	const [shownDetailId, setShownDetail] = useState("");

	const ShownDetailMovie = (id) => {
		setDelayHandler(setTimeout(() => {
			setShownDetail(id)
				}, 700))
	}

	const handleMouseLeave = () => {
		clearTimeout(delayHandler)
		setShownDetail("")
	}

	const handleSearchByYear = (e) => {
		store.dispatch(getSearchMovieWithYear(keyword, 1, year))
	}

	return (
		<div className="loRow">
			<div className="container-fluid">
				<div className="row mt-3">
					<div className="col-md-5">
						<div className="form-group row">
							<label htmlFor="colFormLabel" className="col-sm-3 col-form-label colorWhite">Release Year :</label>
							<div className="col-sm-4">
								<input type="email" onChange={(e) => {setYear(e.target.value)}} className="form-control" id="colFormLabel" placeholder="2021" />
							</div>
							<div className="col-sm-4">
								<button onClick={handleSearchByYear} className="btn btn-danger">
									Search
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{
						!SearchingLoaded ? <>
							{
								[...Array(10).keys()].map(i => (
									<div key={i} className="bagi5 mb-3 px-3">
										<Skeleton className="moviePosterSkeleton" /> 
									</div>
								))
							}
						</>
						: 
						<> 
							{
                                typeof(FeaturedMovie) !== "undefined" ?
								FeaturedMovie.map((item, index) => {
									return (
										<div onClick={() => {window.location.href=`/detail/${item.imdbID}`}}>
											<div onMouseLeave={() => handleMouseLeave()} onMouseEnter={() => ShownDetailMovie(item.imdbID)} key={index} className="bagi5 mb-3">
												{
													shownDetailId === index
													? 
														<>
														<img className="moviePoster pointer"
															src={checkImage(item.Poster)} 
															alt="moviePoster" />
														</>
													:
														<>
															<img className="moviePoster pointer" 
															src={checkImage(item.Poster)} 
															alt="moviePoster" />
														</>
												}

											</div>
											<center>
												<p className="pointer movieTitle">{item.Title.substring(0,30)} </p>
												<p className="pointer movieTitle">{item.Year} </p>
											</center>
										</div>
									)
								})
                                : null
							}
						</>
					}
				</div>
			</div>
		</div>
	)
}

export default SearchBarResult;
