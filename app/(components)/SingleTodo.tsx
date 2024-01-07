import Link from 'next/link'
import { TodoType } from '../(models)/types'
import DeleteBlock from './DeleteBlock'


type SingleTodoProps = {
    todo: TodoType,
    id: string
}

const SingleTodo = ({ todo }: SingleTodoProps) => {
    return (
        <div className='flex items-center justify-between py-3.5 px-5 border-b'>
            <div className='flex order-last items-center'>
                <div className='ml-auto'>
                    <DeleteBlock id={todo._id} />
                </div>
            </div>

            <Link href={`/TodoPage/${todo._id}`} style={{display: "contents"}}>
                <h4>{todo.title}</h4>
            </Link>
        </div>
    )
}

export default SingleTodo
