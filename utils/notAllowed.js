import COUNTRIES from "@/json/countries.json"
import GENDERS from "@/json/genders.json"

export const NOT_ALLOWED_SYMBOLS_BEFORE_ATTHERATE = ['.','-','_','*','^',',',';',':']

export const checkValidCountry = (country) => { return COUNTRIES.map(x => x.toLowerCase()).includes(country.toLowerCase()) }
export const checkValidGender = (gender) => { return GENDERS.map(x => x.toLowerCase()).includes(gender.toLowerCase()) }