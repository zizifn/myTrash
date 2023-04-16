"use client";

import React from "react";
const SearchableRepo = ({ search, children }: any) => {
  const [searchTerm, setSearchTerm] = React.useState(search);

  function refershPage(search: string) {
    window.history.replaceState(null, "", `?search=${search}`);
    setSearchTerm(search);
    window.location.reload();
  }
  return (
    <>
      <input
        className="border border-blue-300"
        type="text"
        name=""
        id=""
        value={searchTerm}
        onChange={(e) => refershPage(e.target.value)}
      />
      {children}
    </>
  );
};

export { SearchableRepo };
