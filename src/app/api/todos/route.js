let todos = [
  {
    id: 1,
    todo: "talha",
    isCompleted: false,
  },
  {
    id: 2,
    todo: "owais",
    isCompleted: false,
  },
  {
    id: 3,
    todo: "sheroz",
    isCompleted: false,
  },
  {
    id: 4,
    todo: "owais",
    isCompleted: false,
  },
];

export async function GET(request) {
  return Response.json({
    data: todos,
    meassage: "Next js api",
  });
}
export async function POST(request) {
  let todo = await request.json();
  console.log("todo =>", todo);

  let obj = {
    id: todos.length + 1,
    ...todo,
    isCompleted: false,
  };
  console.log(obj);

  todos.push(obj);
  return Response.json({
    data: todos,
    meassage: "todos added successfully",
  });
}
