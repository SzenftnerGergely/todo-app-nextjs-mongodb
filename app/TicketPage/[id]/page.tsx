import TicketForm from "@/app/(components)/TicketForm";

type Ticket = {
  _id: string;
  title: string;
};

type UpdateTicketData = Ticket | { _id: string };

type Props = {
  params: { id: string };
};

const getTicketbyId = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }

  return res.json();
}

const TicketPage = async ({ params }: Props) => {
  const EDITMODE = params.id === "new" ? false : true
  let updateTicketData: UpdateTicketData | {} = {}

  if (EDITMODE) {
    const ticketData = await getTicketbyId(params.id)
    updateTicketData = ticketData.foundTicket
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return (
    <>
      <TicketForm ticket={updateTicketData} />
    </>
  );
};

export default TicketPage;