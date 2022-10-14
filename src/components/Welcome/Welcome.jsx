import React from "react";

const Welcome = ({ greet }) => (
  <>
    <article className="mx-auto">
      <h2 className="text-8xl">{greet}</h2>
    </article>
  </>
);

export default Welcome;
