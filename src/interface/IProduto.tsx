import ICategory from './ICategoria';

export default interface IProduct {
    id: number,
    name: string,
    shortDescription: string,
    category?: ICategory[],
    images: string[],
    mainImage: string,
    value: number,
    fullDescription: string
}