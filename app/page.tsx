import CreateTodo from "./(components)/CreateTodo";
import SingleTodo from "./(components)/SingleTodo";
import { TodoType } from "./(models)/types";

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Todos', {
      cache: "no-store"
    })

    return res.json()
  } catch (error) {
    console.log("Failed to get tickets", error);

  }
}

export default async function Home() {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }: { category: string }) => category)),
  ] as string[]

  return (
    <div className='w-1/4 flex flex-col'>
      <CreateTodo />
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h2>{uniqueCategory}</h2>
              <div className="bg-white shadow-md rounded-md">
                {tickets
                  .filter((ticket: { category: string }) => ticket.category === uniqueCategory)
                  .map((filteredTicket: TodoType, _index: string) => (
                    <div key={_index}>
                      <SingleTodo id={_index}  todo={filteredTicket} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
