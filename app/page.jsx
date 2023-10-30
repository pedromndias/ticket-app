import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      // Everytime we make this call we want to see if there is no data, not store it.
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    // Let's create a Set so we remove the duplicate results:
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  
  return (
    <div className="p-5">
      <div>
        {/* If we have tickets, let's map over the unique categories and arrange tickets by category: */}
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              {/* The following class will make the cards in a grid: 4 columns if we have a xl screen and 2 in a large screen. */}
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
};

export default Dashboard;
