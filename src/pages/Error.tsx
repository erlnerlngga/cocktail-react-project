import React, { FC, ReactElement } from "react";
import { useRouteError } from "react-router-dom";

const Error: FC = (): ReactElement => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1 className="text-white text-xl">Opps!</h1>
      <p className="text-white text-lg">
        Sorry, an unexpected error has occurred.
      </p>
    </div>
  );
};

export default Error;
