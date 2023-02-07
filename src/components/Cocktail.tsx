import React, { FC, ReactElement } from "react";
import { CockstailsType } from "../interfaces/IData";
import { Link } from "react-router-dom";

const Cocktail: FC<CockstailsType> = (props): ReactElement => {
  const {
    id = 0,
    name = "Aqua",
    info = "mineral water",
    glass = "bottle",
    image = "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
  } = props;

  return (
    <div className="rounded-md overflow-hidden bg-zinc-600 shadow-xl hover:scale-[1.02] transition-transform duration-500">
      <img className="object-fit w-full h-80" src={image} alt={name} />
      <div className="pt-8 pb-4 px-6 flex flex-col">
        <h1 className="text-4xl font-semibold tracking-widest mb-4">{name}</h1>
        <p className="mb-1 text-lg capitalize font-normal tracking-widest">
          {glass}
        </p>
        <p className="mb-4 capitalize text-base text-gray-400">{info}</p>
        <button className="uppercase py-2 px-4 bg-teal-900 hover:bg-teal-500 rounded-md tracking-widest transition duration-400">
          <Link to={`cocktail/${id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Cocktail;
