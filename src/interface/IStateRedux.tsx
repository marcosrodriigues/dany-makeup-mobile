import IUsuario from './IUsuario';

interface IStateRedux {
    token: string,
    user: IUsuario,
    isLoggedIn: false,
    refreshToken: '',
    exporesOn: '',
    data: ''
}

export default IStateRedux;