import React from "react";

export const Page = ({ children, title }) => {
  document.title = title;
  return <>{children}</>;
};
