import React from "react";

const Test = () => {
  const text = ["a", "b", "c"].join("\n");
  return <div style={{ whiteSpace: 'pre' }}>{text}</div>;
};

export default Test;
