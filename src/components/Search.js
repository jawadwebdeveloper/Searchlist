import React, { useRef } from 'react';

const Search = ({ handleSearch }) => {
    const searchRef = useRef(null);

    const handleChange = () => {
        handleSearch(searchRef.current.value);
    };

    return (
        <div>
            <input
                style={{borderRadius:"5px", marginLeft:"-1%"}}
                type="text"
                ref={searchRef}
                onChange={handleChange}
                placeholder="Search items..."
            />
        </div>
    );
};

export default Search;
