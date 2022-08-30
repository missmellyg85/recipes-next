export function generateTestRecipes(qty: number) {
	if (qty < 1)
		throw Error('generateTestRecipes requires a number greater than 0')
	return Array(qty)
		.fill({})
		.map((val, idx) => generateTestRecipe(idx))
}

export function generateTestRecipe(idx = 1) {
	return {
		createdAt: new Date(),
		id: parseInt(`10${idx}`),
		ingredients: [],
		instructions: [],
		title: `Test Recipe ${idx}`,
		updatedAt: new Date(),
	}
}
