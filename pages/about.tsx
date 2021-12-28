import React from "react";

type AboutProps = {
  name?: string;
};

export default function About({ name }: AboutProps) {
  return (
    <>
      <h1>About {name || ""}</h1>
      <div>This is a page</div>
    </>
  );
}
