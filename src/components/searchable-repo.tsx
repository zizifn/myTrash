"use client";

import React from "react";
const SearchableRepo = ({ repos }: { repos: any[] }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredRepos = repos.filter((repo: { name: string }) => {
    return repo.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <>
      <input
        className="border border-blue-300"
        type="text"
        name=""
        id=""
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredRepos.map((repo: { name: string; id: number }) => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    </>
  );
};

export { SearchableRepo };
