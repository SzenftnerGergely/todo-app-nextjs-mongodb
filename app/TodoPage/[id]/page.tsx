import TodoForm from "@/app/(components)/TodoForm";
import { TodoType } from "@/app/(models)/types";

type UpdateTodoData = TodoType | { _id: string };

type Props = {
  params: { id: string };
};

const getTicketbyId = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/Todos/${id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }

  return res.json();
}

const TodoPage = async ({ params }: Props) => {
  const EDITMODE = params.id === "new" ? false : true
  let updateTodoData: UpdateTodoData | {} = {}

  if (EDITMODE) {
    const todoData = await getTicketbyId(params.id)
    updateTodoData = todoData.foundTodo
  } else {
    updateTodoData = {
      _id: "new",
    };
  }

  return (
    <>
      <TodoForm todo={updateTodoData} />
    </>
  );
};

export default TodoPage;