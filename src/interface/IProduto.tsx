import ICategory from './ICategoria';

export default interface IProduct {
    id: number,
    name: string,
    shortDescription: string,
    category?: ICategory[],
    images: string[],
    value: number,
    fullDescription: string
}