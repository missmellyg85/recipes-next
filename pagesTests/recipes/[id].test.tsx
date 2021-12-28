import { render } from "@testing-library/react";
import RecipePage from "../../pages/recipes/[id]";
import { Recipe } from "../../ts/types";

describe("Recipe Page", () => {
  it("renders the recipe", () => {
    const testRecipe: Recipe = { id: 1234, title: "Some Test" };
    const { getByText } = render(<RecipePage {...testRecipe} />);

    expect(
      getByText(`Recipe: ${testRecipe.id}`, { exact: false })
    ).toBeInTheDocument();
    expect(getByText(testRecipe.title, { exact: false })).toBeInTheDocument();
  });
});