import SearchBar from "../../components/SearchBar";

const filterlist = [
  "All",
 "Ordered",
  "Parts Here",
];

const RadioFilter = ({ currentFilter, changeFilter }) => {

 

  const handelClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter By:</p>
        {filterlist.map((f) => (
          <button
            key={f}
            onClick={() => handelClick(f)}
            className={currentFilter === f ? "active" : ""}
          >
            {f}
          </button>
          
        ))}
      
      </nav>
    </div>
  );
};

export default RadioFilter;
