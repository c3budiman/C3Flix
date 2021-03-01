import './navheader.css';
import React, { useState, useEffect  } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import store from '../../redux/store';
import {getSearchMovie} from '../../redux/actions/getOmdb'
import {Link} from 'react-router-dom'
import {clearSearchMovie} from '../../redux/actions/getOmdb'

const NavHeader = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [yScrollPosition, setYScrollPosition] = useState(0);
    const [MovieSearch, setMovieSearch] = useState("");
    // const [page, setPage] = useState(1);

    const [query, setQuery] = useState("");

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = (e) => {
            const currentScrollY = window.scrollY;
            setYScrollPosition(currentScrollY)
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        const timeOutId = setTimeout(() => { if(query !== "") store.dispatch(getSearchMovie(query, 1)) }, 500);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeOutId)
        }
    }, [query]);

    const handleMovieSearch = (movieName) => {
        setMovieSearch(movieName)
        setQuery(movieName)
    }

    return (
    <div>
        <Navbar id="navbarC3flix" className={yScrollPosition < 10 ? "bg-transparent" : "bg-black"}  fixed="top" dark expand="md">
            <NavbarBrand style={{marginLeft: 40}} href="/">C3flix</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse style={{margin: "0px 40px"}} className="menu-navigation" isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem onClick={() => store.dispatch(clearSearchMovie())}>
                        <Link to="/"><NavLink className={props.activeMenu === "beranda" ? "active" : ""} href="/">Beranda</NavLink></Link>
                    </NavItem>
                    <NavItem onClick={() => store.dispatch(clearSearchMovie())}>
                        <Link to="/tv"><NavLink className={props.activeMenu === "tv" ? "active" : ""} href="/tv">Acara TV</NavLink></Link>
                    </NavItem>
                    <NavItem onClick={() => store.dispatch(clearSearchMovie())}>
                        <Link to="/film"><NavLink className={props.activeMenu === "film" ? "active" : ""} href="/film">Film</NavLink></Link>
                    </NavItem>
                    <NavItem onClick={() => store.dispatch(clearSearchMovie())}>
                        <Link to="/latest"><NavLink className={props.activeMenu === "terbaru" ? "active" : ""} href="/latest">Terbaru</NavLink></Link>
                    </NavItem>
                </Nav>
                
                
                {
                    !isSearch ? <> 
                        <NavbarText onClick={() => setIsSearch(true)} className="pointer searchicon"><FontAwesomeIcon icon={faSearch} /> </NavbarText>
                    </> : <> 
                        <div onClick={() => setIsSearch(false)} className="notif-overlay-clickable">
                           
                        </div>
                        <div className="search-overlay">
                            <div className="form-group">
                                <label className="whiteColor" htmlFor="exampleInputEmail1">Movie Title : &nbsp;</label>
                                <input type="text" className="form form-input" style={{width: "300px"}} onChange={(e) => {handleMovieSearch(e.target.value)}} autoFocus value={MovieSearch} />
                            </div>
                        </div>
                    </>
                }
            </Collapse>
        </Navbar>
    </div>
    );
}

export default NavHeader;
