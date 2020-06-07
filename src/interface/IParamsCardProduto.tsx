import IProduto from './IProduto'

export default interface IParamsCardProduto {
    produto: IProduto,
    onClickComponent: (id : number) => void,
}