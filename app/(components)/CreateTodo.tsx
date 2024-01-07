import Link from 'next/link'

const CreateTodo = () => {
  return (
    <Link href="/TodoPage/new" className='flex items-center bg-white rounded-md mb-6 py-5 px-5'>
      <p>Create a new todo...</p>
    </Link>
  )
}

export default CreateTodo
