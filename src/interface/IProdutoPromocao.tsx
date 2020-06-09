export default interface IProdutoPromocao {
    id: number,
    image: string
    name: string,
    originalValue: number,
    promotionValue: number,
    discount: string
}