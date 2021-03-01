import './LoRow.css';
import React, { 
	useEffect, 
	useState  
} from 'react';
import store from '../../redux/store';
import {getFeatureMovie} from '../../redux/actions/getOmdb'
import {useSelector} from "react-redux"
import Skeleton from 'react-loading-skeleton'
// import {getFeatureMovieWithPage} from '../../redux/actions/getOmdb'
import {checkImage} from '../../utils/strHelpers'

const LoRow = (props) => {
	const [delayHandler, setDelayHandler] = useState(null)
	// const [page, setPage] = useState(1)
	// const [load, setLoad] = useState(false)
	// const [initialLoad,setinitialLoad] = useState(true)
	let LoadingFeature = useSelector(state => state.omdbReducer.getFeaturePending)
	let FeaturedMovie = useSelector(state => state.omdbReducer.featureMovie)
	// let meta = useSelector(state => state.omdbReducer)

	useEffect(() => {
        store.dispatch(getFeatureMovie("man", ""))
		// setPage(page+1)
    }, []);

	const [shownDetailId, setShownDetail] = useState("");

	const ShownDetailMovie = (id) => {
		setDelayHandler(setTimeout(() => {
			setShownDetail(id)
        }, 0))
	}

	const handleMouseLeave = () => {
        clearTimeout(delayHandler)
		setShownDetail("")
    }

	// window.onscroll = function(ev) {
	// 	if ((window.innerHeight + window.scrollY) > document.body.offsetHeight) {
	// 		if((window.innerHeight + window.scrollY) < document.body.offsetHeight + 27) {
	// 			// you're at the bottom of the page
	// 			if(!load) {
	// 				setLoad(true)
	// 				setinitialLoad(false)
	// 				setTimeout(() => {
	// 					store.dispatch(getFeatureMovieWithPage("man", page, meta))
	// 					if(!LoadingFeature) {
	// 						setPage(page+1)
	// 						setLoad(false)
	// 					}
	// 				},400);
					
	// 			}
	// 		}
	// 	}
	// };

	

	return (
		<div className="loRow">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<h1 className="taglineLoRow">
							Featured Movie
						</h1>
					</div>
				</div>

				<div className="row">
					{
						LoadingFeature ? 
						<>
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
											<div onMouseLeave={() => handleMouseLeave()} onMouseEnter={() => ShownDetailMovie(index)}  key={item.imdbID} className="bagi5 mb-3">
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
			<div style={{paddingTop:"100px"}}>

			</div>
		</div>

		
	)
}

export default LoRow;
