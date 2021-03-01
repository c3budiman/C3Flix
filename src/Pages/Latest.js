import '../App.css';
import React from 'react';
import NavHeader from '../components/parts/NavHeader'
import SearchBarResult from '../components/pages/Search/SearchBarResult'
import {useSelector} from "react-redux"
import SearchRow from '../components/pages/Search/SearchRow'
import SearchError from '../components/pages/Search/SearchError'


function Tv() {
	let IsSearching = useSelector(state => state.searchOmdb.IsSearching)
	let errorSearch = useSelector(state => state.searchOmdb.error)
	return (
		<>
			<div className="widthlap"> 
				<div className="container-widthlap">
					<NavHeader activeMenu="terbaru" />
					{
						!IsSearching ? 
						<> 
							<SearchRow movieName="marvel" year="2019"/>
						</> 
						: 
						<> 
							{errorSearch === "" ? <SearchBarResult /> : <SearchError error={errorSearch} />}
						</>
					}
					
				</div>
			</div>
		</>
	);
}

export default Tv;
