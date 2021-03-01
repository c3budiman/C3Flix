import '../App.css';
import React, { 
	useState 
} from 'react';
import Banner from '../components/parts/Banner'
import LoRow from '../components/parts/LoRow'
import NavHeader from '../components/parts/NavHeader'
import SearchBarResult from '../components/pages/Search/SearchBarResult'
import {useSelector} from "react-redux"
import SearchError from '../components/pages/Search/SearchError'

function Home() {
	let IsSearching = useSelector(state => state.searchOmdb.IsSearching)
	let errorSearch = useSelector(state => state.searchOmdb.error)

	return (
		<>
			<div className="widthlap"> 
				<div className="container-widthlap">
					<NavHeader activeMenu="beranda" />
					{
						!IsSearching ? 
						<> 
							<Banner 
								imgBanner="/img/mainbanner.webp" 
								imgTitle="/img/title.webp" 
								synopsis="Kekonyolan terjadi setelah tiga detektif swasta mengambil pekerjaan yang mengadu mereka satu sama lain. Namun, ada plot lebih jahat yang siap mengancam." 
								onClickPlay={() => {console.log("play clicked")}}
								onClickDetails={() => {console.log("details clicked")}}
							/>
							<LoRow />
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

export default Home;
