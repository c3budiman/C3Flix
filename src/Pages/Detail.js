import '../App.css';
import React from 'react';
import NavHeader from '../components/parts/NavHeader'
import SearchBarResult from '../components/pages/Search/SearchBarResult'
import {useSelector} from "react-redux"
import DetailComponent from '../components/pages/Detail/Index'
import SearchError from '../components/pages/Search/SearchError'


function Detail() {
	let IsSearching = useSelector(state => state.searchOmdb.IsSearching)
	let errorSearch = useSelector(state => state.searchOmdb.error)
	// console.log(errorSearch)
	return (
		<>
			<div className="widthlap"> 
				<div className="container-widthlap">
					<NavHeader activeMenu="" />
					{
						!IsSearching ? 
						<> 
							<DetailComponent />
						</> 
						: 
						<> 
							{errorSearch === "" ? <SearchBarResult /> : <SearchError error={errorSearch}  />}
						</>
					}
					
				</div>
			</div>
		</>
	);
}

export default Detail;
