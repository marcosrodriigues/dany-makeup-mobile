import ICategory from './Category';

export default interface IProduct {
    id: number,
    name: string,
    description: string,
    category?: [ICategory],
    image: string,
    value: number,
}