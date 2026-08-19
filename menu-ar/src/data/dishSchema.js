/** Fixed texture tags for comparable dish profiles (max 3 per dish). */
export const TEXTURE_TAGS = [
  "Crispy",
  "Crunchy",
  "Creamy",
  "Chewy",
  "Soft",
  "Juicy",
];

/**
 * @typedef {'Crispy'|'Crunchy'|'Creamy'|'Chewy'|'Soft'|'Juicy'} TextureTag
 */

/**
 * @typedef {Object} TasteProfile
 * @property {string} comparisonText
 * @property {number} spiceLevel - 0–5
 * @property {{ spicy: number, sweet: number, sour: number, savory: number }} flavors - each 0–5
 * @property {TextureTag[]} textureTags - max 3 on detail page, max 2 shown on card back
 */

/**
 * @typedef {Object} Dish
 * @property {string} id
 * @property {string} name
 * @property {string} category
 * @property {number} price
 * @property {string} description
 * @property {{ protein: number, carbs: number, fat: number }} nutrition
 * @property {string} quantity
 * @property {boolean} [bestseller]
 * @property {boolean} veg
 * @property {string} image
 * @property {TasteProfile} [tasteProfile]
 */
