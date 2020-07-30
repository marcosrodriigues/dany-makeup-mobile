import ICategory from './ICategoria';

export default interface IProduct {
    id: number,
    name: string,
    short_description: string,
    category?: ICategory[],
    images: string[],
    image_url: string,
    value: number,
    full_description: string
}