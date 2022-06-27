"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const CadastrarUsuario_1 = __importDefault(require("./application/useCases/cadatro_user/CadastrarUsuario"));
const LogarUsuario_1 = __importDefault(require("./application/useCases/login_user/LogarUsuario"));
const UserRepositoryDatabase_1 = __importDefault(require("./infra/repository/UserRepositoryDatabase"));
const Mongo_1 = __importDefault(require("./infra/database/Mongo"));
const LoginRepositoryDatabase_1 = __importDefault(require("./infra/repository/LoginRepositoryDatabase"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
try {
    var mongo = new Mongo_1.default('mongodb+srv://leandro:tcc@cluster0.4zdsr.mongodb.net/?retryWrites=true&w=majority');
}
catch (error) {
    console.log('conexao com o banco de dados falhou');
}
app.get('/cadastroAluno', (request, response) => {
    const testInput = {
        name: 'leandrl', password: '123', email: 'leandro@gmail.com', role: 'student'
    };
    const cadastro = new CadastrarUsuario_1.default(new UserRepositoryDatabase_1.default(mongo));
    console.log(cadastro.execute(testInput));
    response.send('usuario cadastrado');
});
app.get('/login', (request, response) => {
    const testLoginInput = {
        email: 'leandrl', password: '123'
    };
    const login = new LogarUsuario_1.default(new LoginRepositoryDatabase_1.default(mongo));
    console.log(login.execute(testLoginInput));
    response.send('usuario cadastrado');
});
app.listen(5000, () => { console.log('rodando 5000'); });
/*

todo:
front:
corrigir o fetch para ser post

login:
corrigir rota de get para post em login
fazer a verificacao no banco de dados


*/ 
