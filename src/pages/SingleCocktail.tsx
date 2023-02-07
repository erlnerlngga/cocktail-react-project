import React, { FC, ReactElement } from "react";
import { CocktailDetailType } from "../interfaces/IData";
import { getDetailData } from "../util";
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingSingle from "../components/LoadingSingle";

export const singleLoader = async ({ params }: LoaderFunctionArgs) => {
  let id = 0;
  if (params.id) {
    id = parseInt(params?.id);
  }
  return getDetailData(id);
};

const SingleCocktail: FC = (): ReactElement => {
  const { conData } = useLoaderData() as { conData: CocktailDetailType };
  const navigation = useNavigation();

  const {
    id = 0,
    name = "erlan",
    info = "water",
    glass = "bottle",
    image = "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    category = "water",
    instructons = "nothing",
    ingredients = ["water", "earth", "fire"],
  } = conData;

  if (navigation.state === "loading") {
    return (
      <div className="grid place-items-center h-screen">
        <LoadingSingle />
      </div>
    );
  }

  return (
    <section className="text-center pb-24 h-[744px]">
      <div className="max-w-6xl px-8 my-0 mx-auto">
        <button className="uppercase text-white py-2 px-4 bg-teal-900 hover:bg-teal-500 rounded-md tracking-widest transition duration-400 mb-8">
          <Link to="/">Back Home</Link>
        </button>
        <h1 className="text-5xl text-teal-500 font-bold  tracking-widest mb-20">
          {name}
        </h1>
        <div className="flex gap-14 items-center justify-center">
          <img
            className="object-fit w-96 h-96 rounded-md"
            src={image}
            alt={name}
          />

          <ul className="flex flex-col items-start gap-8 text-left">
            <li>
              <span className="capitalize mr-4 py-1 px-2 bg-teal-100 text-lg font-semibold text-teal-900 rounded-md">
                Name :
              </span>
              <span className="text-white text-lg font-semibold">{name}</span>
            </li>
            <li>
              <span className="capitalize mr-4 py-1 px-2 bg-teal-100 text-lg font-semibold text-teal-900 rounded-md">
                category :
              </span>
              <span className="text-white text-lg font-semibold">
                {category}
              </span>
            </li>
            <li>
              <span className="capitalize mr-4 py-1 px-2 bg-teal-100 text-lg font-semibold text-teal-900 rounded-md">
                info :
              </span>
              <span className="text-white text-lg font-semibold">{info}</span>
            </li>
            <li>
              <span className="capitalize mr-4 py-1 px-2 bg-teal-100 text-lg font-semibold text-teal-900 rounded-md">
                glass :
              </span>
              <span className="text-white text-lg font-semibold">{glass}</span>
            </li>
            <li>
              <span className="capitalize mr-4 py-1 px-2 bg-teal-100 text-lg font-semibold text-teal-900 rounded-md">
                instructons :
              </span>
              <span className="text-white text-lg font-semibold leading-8">
                {instructons}
              </span>
            </li>
            <li>
              <span className="capitalize mr-4 py-1 px-2 bg-teal-100 text-lg font-semibold text-teal-900 rounded-md">
                ingredients :
              </span>
              <span className="text-white text-lg font-semibold">
                {ingredients.join(", ")}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
