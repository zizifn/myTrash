"use client";

import React, { useEffect } from "react";
import { useRouter, redirect } from "next/navigation";

export default function ClientRedirect() {
  // due to nextjs issue, this method can be used to redirect via meta refresh
  // https://github.com/vercel/next.js/pull/47345 maybe 13.3.2 fix this
  // redirect("/api/login");
  const { push } = useRouter();

  useEffect(() => {
    push("/api/login");
  }, []);
  return <div>client-redirect</div>;
}
