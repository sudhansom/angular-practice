export interface Course {
    name: string,
    category: string,
    price: number,
}

export interface ICountry {
    name: {
        common: string,
        official: string,
    },
    region: string,
    area: number,
    population: number,

}
