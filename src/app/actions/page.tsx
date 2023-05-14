import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import React from "react";
export const runtime = "edge";
const users: {
  name: string;
  id: string;
}[] = [];
export default function page() {
  async function addUser(data: FormData) {
    "use server";
    users.push({
      name: data.get("name")?.toString() || "",
      id: data.get("id")?.toString() || "",
    });
    // revalidatePath("/actions");
    return users;
  }

  return (
    <>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <form action={addUser}>
        <input type="text" name="name" />
        <input type="text" name="id" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
