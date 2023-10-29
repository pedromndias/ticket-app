import TicketCard from "./(components)/TicketCard"

const Dashboard = () => {
  return (
    <div className="p-5">
      {/* The following class will make the cards in a grid: 4 columns if we have a xl screen and 2 in a large screen. */}
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  )
}

export default Dashboard