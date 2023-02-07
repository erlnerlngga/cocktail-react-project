import { CockstailsType, CocktailDetailType } from "./interfaces/IData";

const convertData = (arr: unknown): CockstailsType[] => {
  let newData;

  if (Array.isArray(arr)) {
    newData = arr.map((item) => {
      const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } = item;
      return {
        id: parseInt(idDrink),
        name: strDrink as string,
        info: strAlcoholic as string,
        glass: strGlass as string,
        image: strDrinkThumb as string,
      };
    });
  }

  return newData as CockstailsType[];
};

const detailConvert = (arr: unknown): CocktailDetailType => {
  const re = /Ingredient/i;
  let dataObject;
  let ingredient: string[] = [];

  if (Array.isArray(arr)) {
    dataObject = arr[0];

    for (var prop in dataObject) {
      let res = re.test(prop);
      if (res && dataObject[prop] !== null) {
        let val = dataObject[prop];
        console.log(val);
        ingredient.push(val);
      }
    }
  }

  return {
    id: parseInt(dataObject.idDrink),
    name: dataObject.strDrink,
    category: dataObject.strCategory,
    info: dataObject.strAlcoholic,
    glass: dataObject.strGlass,
    instructons: dataObject.strInstructions,
    ingredients: ingredient,
    image: dataObject.strDrinkThumb,
  } as CocktailDetailType;
};

export const getAllData = async (
  term: string
): Promise<{ conData: CockstailsType[] }> => {
  const results = await fetch(
    `https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
  );

  if (!results.ok) throw new Error("Something went wrong");

  const data = await results.json();

  const conData = convertData(data.drinks);

  return { conData };
};

export const getDetailData = async (
  id: number
): Promise<{ conData: CocktailDetailType }> => {
  const results = await fetch(
    `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (!results.ok) throw new Error("Something went wrong");

  const data = await results.json();

  const conData = detailConvert(data.drinks);
  return { conData };
};
