import { useState } from "react";
import "./AppBar.css"

const AppBar = () => {
    const [search, setSearch] = useState("");
    const [toggleBar, setToggleBar] = useState(false);

    //set search state
    const handleChange = (e) => {
        setSearch(e.target.value)
    };

    // handle state of search bar
    const toggleSearch = (e) => {
        e.preventDefault()
        setToggleBar(!toggleBar)
    }

    //handle form submit, either by entering and click submit button
    const handleSubmit = (e) => {
        e.preventDefault()
    };

    return (
    <header className={`app-bar ${toggleBar ? "show": ""}`} data-testid="header">
        <button className="toggle-btn">
            <span className="screenreader">Menu</span>
            <img className="menu-img" src="/menu.svg" alt="menu icon"/> 
        </button>
        <h1 className="heading">Todo</h1>
        <button className="toggle-btn toggle-btn-search" onClick={toggleSearch}>
            <span className="screenreader">Search</span>
            <img className="loupe-img" src="/loupe.svg" alt="search icon"/> 
        </button>
        <form className="search-form" role="search" onSubmit={handleSubmit}>
            <label className="screenreader" htmlFor="header-search">
                Search
            </label>
            <input className="search-field" type="text" id="header-search" placeholder="Search by Title" value={search} onChange={handleChange} autoComplete="off"/>
            <button type="submit" className="screenreader">
                Search
            </button>
            <button className="toggle-btn toggle-btn-close" onClick={toggleSearch}>
                <span className="screenreader">Close Search</span>
                <span className="close"><img className="close-img" src="/close.svg" alt="close icon"/></span>
            </button>
        </form>
    </header>
    )
}

export default AppBar;