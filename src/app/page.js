import { addTodo } from "@/action/todos";

export default async function Home() {
  let getData = await fetch("http://localhost:3001/api/todos", {
    cache: "no-cache",
  });
  getData = await getData.json();
  return (
    <div className="w-full min-h-screen bg-red-500 flex flex-col justify-center items-center gap-10 overflow-hidden py-14">
      <h1 className="text-3xl font-bold text-white">Todo List</h1>
      <div className=" w-[800px] flex gap-3">
        <form className="w-[800px] flex gap-3" action={addTodo}>
          <input
            type="text"
            name="todo"
            className="w-[800px] h-14 outline-none rounded-md px-2"
          />
          <input
            className="w-32 h-14 bg-white rounded-md cursor-pointer"
            type="submit"
            value={"Add Todo"}
          />
        </form>
      </div>

      {getData.data.map((item) => {
        return (
          <div
            className="w-[800px] h-14  outline-none rounded-md border-2 border-white text-white flex items-center px-2"
            key={item.id}
          >
            <p>{item.todo}</p>
          </div>
        );
      })}
    </div>
  );
}
