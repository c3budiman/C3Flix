import '../../parts/LoRow.css';
import React, { 
	useEffect, 
	useState 
} from 'react';
import store from '../../../redux/store';
import {getFeatureMovie} from '../../../redux/actions/getOmdb'
import {useSelector} from "react-redux"
import Skeleton from 'react-loading-skeleton'
import {checkImage} from '../../../utils/strHelpers'

const LoRow = (props) => {
	useEffect(() => {
		store.dispatch(getFeatureMovie(props.movieName, props.year))

		}, [props.movieName, props.year]);
	const [delayHandler, setDelayHandler] = useState(null)
	let LoadingFeature = useSelector(state => state.omdbReducer.getFeaturePending)
	let FeaturedMovie = useSelector(state => state.omdbReducer.featureMovie)

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

	return (
		<div className="loRow">
			<div className="container-fluid">
				<div className="row">
					{
						LoadingFeature ? <>
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
							}
						</>
					}
				</div>
			</div>
		</div>
	)
}

export default LoRow;
