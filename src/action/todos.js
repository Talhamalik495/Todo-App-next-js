"use server";

import { revalidatePath } from "next/cache";

export async function addTodo(formData) {
  try {
    const todo = formData.get("todo");
    await fetch("http://localhost:3001/api/todos", {
      method: "POST",
      body: JSON.stringify({ todo }),
    });
    revalidatePath("/todos");
  } catch (error) {
    console.log(error);
  }
}
