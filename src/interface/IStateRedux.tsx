import IUsuario from './IUsuario';

interface IStateRedux {
    token: string,
    user: IUsuario
}

export default IStateRedux;