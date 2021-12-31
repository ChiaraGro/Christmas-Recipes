export interface Us {
    amount: number;
    unitShort: string;
    unitLong: string;
}

export interface Metric {
    amount: number;
    unitShort: string;
    unitLong: string;
}

export interface Measures {
    us: Us;
    metric: Metric;
}

export interface ExtendedIngredient {
    id: number;
    aisle: string;
    image: string;
    consistency: string;
    name: string;
    nameClean: string;
    original: string;
    originalString: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: string[];
    metaInformation: string[];
    measures: Measures;
}

export interface Ingredient {
    id: number;
    name: string;
    localizedName: string;
    image: string;
}

export interface Temperature {
    number: number;
    unit: string;
}

export interface Equipment {
    id: number;
    name: string;
    localizedName: string;
    image: string;
    temperature: Temperature;
}

export interface Length {
    number: number;
    unit: string;
}

export interface Step {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Equipment[];
    length: Length;
}

export interface AnalyzedInstruction {
    name: string;
    steps: Step[];
}

export interface Recipe {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    lowFodmap: boolean;
    aggregateLikes: number;
    spoonacularScore: number;
    healthScore: number;
    creditsText: string;
    license: string;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: ExtendedIngredient[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    instructions: string;
    analyzedInstructions: AnalyzedInstruction[];
    originalId?: any;
    spoonacularSourceUrl: string;
    preparationMinutes?: number;
    cookingMinutes?: number;
}

export interface IDetailsRes {
    recipes: Recipe[];
}

export interface BasicRecipe {
    id: number;
    title: string;
    calories: number;
    carbs: string;
    fat: string;
    image: string;
    imageType: string;
    protein: string;
}

export interface IBasicRes {
    offset: number;
    number: number;
    results: BasicRecipe[];
    totalResults: number;
}

export interface IRecipe {
    id: number;
    title: string;
    image: string;
    imageType: string;
}
