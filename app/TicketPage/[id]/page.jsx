import TicketForm from "@/app/(components)/TicketForm"

// Let's create a functino to get the data of a single ticket:
const getTicketById = async (id) => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store"
    })
    if(!res.ok) {
      throw new Error("Failed to get ticket.")
    }

    return res.json()
  
}

const TicketPage = async ({params}) => {
  // Let's create a variable that will be false if we are editing a ticket or true if we are creating a new one (the url parameter will be either the id or "new"):
  const EDITMODE = params.id === "new" ? false : true
  // And create an empty object to then fill with the ticket data:
  let updateTicketData = {}

  if(EDITMODE) {
    updateTicketData = await getTicketById(params.id)
    updateTicketData = updateTicketData.foundTicket
  } else {
    updateTicketData = {
      _id: "new"
    }
  }
  return (
    <TicketForm ticket={updateTicketData}/>
  )
}

export default TicketPage