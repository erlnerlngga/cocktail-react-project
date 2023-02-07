import React, { FC, ReactElement } from "react";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

const Home: FC = (): ReactElement => {
  return (
    <>
      <SearchForm />
      <CocktailList />
    </>
  );
};

export default Home;
