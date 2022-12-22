import "../../bootstrap/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = ({search}) => {
    const [searched, setSearched] = useState("");
    
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        e.preventDefault();
        setSearched(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searched}`);
    }

    return (
    <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
        <input onChange={(e)=>{handleOnChange(e)}} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    )
}

export default SearchBar;