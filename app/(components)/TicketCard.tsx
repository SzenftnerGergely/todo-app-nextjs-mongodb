import Link from 'next/link'
import { TodoType } from '../(models)/types'
import DeleteBlock from './DeleteBlock'


type TicketCardProps = {
    ticket: TodoType,
    id: string
}

const TicketCard = ({ ticket }: TicketCardProps) => {
    return (
        <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
            <div className='flex items-center mb-3'>
                <div className='ml-auto'>
                    <DeleteBlock id={ticket._id} />
                </div>
            </div>

            <Link href={`/TicketPage/${ticket._id}`} style={{display: "contents"}}>
                <h4>{ticket.title}</h4>
            </Link>
        </div>
    )
}

export default TicketCard
