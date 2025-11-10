const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Product Here..."
        onChange={(e) => {
          searchHandler(e.target.value);
        }}
      />
      <button>Search</button>
    </div>
  );
};

export default Search;
