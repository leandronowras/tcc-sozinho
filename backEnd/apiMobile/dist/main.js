"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const CadastrarUsuario_1 = __importDefault(require("./application/useCases/cadatro_user/CadastrarUsuario"));
const UserRepositoryDatabase_1 = __importDefault(require("./infra/repository/UserRepositoryDatabase"));
const Mongo_1 = __importDefault(require("./infra/database/Mongo"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/cadastro', (request, response) => {
    const testInput = {
        name: 'leandrl', password: '123', email: 'leandro@gmail.com', role: 'student'
    };
    const mongo = new Mongo_1.default('mongodb+srv://leandro:tcc@cluster0.4zdsr.mongodb.net/?retryWrites=true&w=majority');
    const cadastro = new CadastrarUsuario_1.default(new UserRepositoryDatabase_1.default(mongo));
    console.log(cadastro.execute(testInput));
    response.send('usuario cadastrado');
});
app.listen(5000, () => { console.log('rodando 5000'); });
