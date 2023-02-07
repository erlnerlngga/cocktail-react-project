import React, { ChangeEvent, FC, ReactElement } from "react";
import { Form } from "react-router-dom";
import { useSubmit } from "react-router-dom";

const SearchForm: FC = (): ReactElement => {
  const submit = useSubmit();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    submit(e.currentTarget.form);
  };

  return (
    <section className="py-24">
      <div className="my-0 mx-auto max-w-2xl p-8 bg-teal-700 shadow-xl rounded">
        <Form className="flex flex-col gap-4" id="search-form" role="search">
          <label
            htmlFor="search"
            className="text-lg tracking-widest font-semibold text-white "
          >
            Search Your Favorite Cocktail
          </label>
          <input
            id="search"
            name="search"
            type="search"
            onChange={handleChange}
            className="px-3 py-2 text-xl rounded-lg outline-none"
          />
        </Form>
      </div>
    </section>
  );
};

export default SearchForm;
