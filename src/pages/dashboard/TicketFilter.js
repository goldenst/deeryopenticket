

const filterlist = [
  "All",
  
  "New",
  "In Progress",
  "WOA",
  "WOP",
  "Parts Here",
];

const TicketFilter = ({ currentFilter, changeFilter }) => {

 

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

export default TicketFilter;
