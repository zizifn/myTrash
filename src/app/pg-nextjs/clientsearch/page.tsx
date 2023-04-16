import React from "react";
// import { SearchableRepo } from "../../../components/searchable-repo";

export const metadata = {
  title: "client search demo",
  description: "trash app by zizifn",
};

type Repo = {
  name: string;
};

export default async function Repos() {
  // let uint8Array = new Uint8Array([
  //   123, 10, 32, 32, 34, 117, 115, 101, 114, 73, 100, 34, 58, 32, 49, 44, 10,
  //   32, 32, 34, 105, 100, 34, 58, 32, 49, 44, 10, 32, 32, 34, 116, 105, 116,
  //   108, 101, 34, 58, 32, 34, 100, 101, 108, 101, 99, 116, 117, 115, 32, 97,
  //   117, 116, 32, 97, 32, 102, 97, 108, 115, 101, 10, 125,
  // ]);

  // console.log(new TextDecoder().decode(uint8Array)); // Hello

  const repoRsp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(repoRsp.ok);
  if (!repoRsp.ok) {
    return <div>failed to fetch repos</div>;
  }

  // const readable = repoRsp.body!.getReader();
  // while (true) {
  //   const { done, value } = await readable.read();
  //   if (done) {
  //     break;
  //   }
  //   // console.log(value);
  //   const uint8Array = value.slice(0);
  //   const text = new TextDecoder().decode(uint8Array);
  //   console.log(text);
  // }

  const repos: Repo[] = await repoRsp.json();
  console.log(repos);
  // const repos: Repo[] = [];
  return (
    <>
      {/* <SearchableRepo repos={repos}></SearchableRepo> */}
      <div></div>
    </>
  );
}
