"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props = {
  id: number;
}

const DeleteBlock: React.FC<Props> = ({ id }) => {
  const router = useRouter()

  const deleteTodo = async () => {
    const res = await fetch(`http://localhost:3000/api/Todos/${id}`, {
      method: "DELETE"
    })
    if(res.ok) {
      router.refresh()
    }
  }

  return (
    <div className='hover:cursor-pointer hover:bg-slate-300 p-2 rounded-full' >
      <Image 
        src="/icon-cross.svg"
        alt='delete-icon'
        width={18}
        height={18}
        onClick={deleteTodo}
      />
    </div>
  )
}

export default DeleteBlock
