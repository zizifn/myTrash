import React, { Suspense } from "react";
import { SearchableRepo } from "./searchable-repo";

export const metadata = {
  title: "client search demo",
  description: "trash app by zizifn",
};

type Repo = {
  name: string;
  id: number;
};

export default function ServerSearch({ searchParams }: { searchParams: any }) {
  const { search } = searchParams;
  return (
    <>
      <h2 className="h-10 text-xl text-cyan-400">server search demo</h2>
      <SearchableRepo search={search}></SearchableRepo>
      <Suspense fallback={<div>loading repo...</div>}>
        <Repos searchParams={searchParams}></Repos>
      </Suspense>
    </>
  );
}

async function Repos({ searchParams }: { searchParams: any }) {
  const repoRsp = await fetch("https://api.github.com/users/zizifn/repos");
  console.log(repoRsp.ok);
  if (!repoRsp.ok) {
    return <div>failed to fetch repos</div>;
  }
  const repos: Repo[] = await repoRsp.json();

  const { search } = searchParams;
  // console.log(search);
  // console.log(repos);
  const filteredRepos = repos.filter((repo: { name: string }) => {
    return repo.name.toLowerCase().includes(search?.toLowerCase());
  });
  // console.log(filteredRepos);
  return (
    <>
      <ul>
        {filteredRepos.map((repo: { name: string; id: number }) => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    </>
  );
}
