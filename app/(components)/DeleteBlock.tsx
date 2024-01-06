"use client"

import { faX } from '@fortawesome/free-solid-svg-icons/faX'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'

type Props = {
  id: number;
}

const DeleteBlock: React.FC<Props> = ({ id }) => {
  const router = useRouter()

  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE"
    })
    if(res.ok) {
      router.refresh()
    }
  }

  return (
    <>
      <FontAwesomeIcon 
        icon={faX} 
        className='text-red-400 hover:cursor-pointer hover:text-red-200' 
        onClick={deleteTicket}
      />
    </>
  )
}

export default DeleteBlock