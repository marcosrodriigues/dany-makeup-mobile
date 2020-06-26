export default interface IProdutoPromocao {
    id: number,
    mainImage: string
    name: string,
    originalValue: number,
    promotionValue: number,
    discount: string,
    discountType: string
}