import React, { FC, ReactElement } from "react";
import Cocktail from "./Cocktail";
import {
  LoaderFunctionArgs,
  useSubmit,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { getAllData } from "../util";
import { CockstailsType } from "../interfaces/IData";
import Loading from "./Loading";

export const listLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  let search = url.searchParams.get("search");

  if (!search) {
    search = "a";
  }

  return getAllData(search);
};

const CocktailList: FC = (): ReactElement => {
  const { conData } = useLoaderData() as { conData: CockstailsType[] };
  const navigation = useNavigation();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("search");

  let render;
  if (searching) {
    render = [
      <Loading />,
      <Loading />,
      <Loading />,
      <Loading />,
      <Loading />,
      <Loading />,
    ];
  } else {
    render = conData?.map((item) => (
      <Cocktail
        id={item.id}
        name={item.name}
        info={item.info}
        glass={item.glass}
        image={item.image}
      />
    ));
  }

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto my-0 mb-24">
        <h1 className="text-5xl text-teal-500 font-bold text-center tracking-widest">
          Cocktails
        </h1>
      </div>
      <div className="max-w-6xl mx-auto my-0 text-white grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-14 gap-y-20">
        {render}
      </div>
    </section>
  );
};

export default CocktailList;
