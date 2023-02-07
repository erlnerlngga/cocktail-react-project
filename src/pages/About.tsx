import React, { FC, ReactElement } from "react";

const About: FC = (): ReactElement => {
  return (
    <section className="py-24 h-[744px]">
      <div className="max-w-2xl mx-auto my-0 px-8">
        <h1 className="text-5xl text-teal-500 font-bold  tracking-widest mb-10">
          About
        </h1>
        <p className="text-xl text-white leading-8 tracking-wide">
          Lorem ipsum dolor sit amet dolor sit amet dolor consectetur
          adipisicing elit. Molestiae repudiandae architecto qui adipisci in
          officiis, aperiam sequi atque perferendis eos, autem maiores nisi
          saepe quisquam hic odio consectetur nobis veritatis quasi explicabo
          obcaecati doloremque? Placeat ratione hic aspernatur.
        </p>
      </div>
    </section>
  );
};

export default About;
