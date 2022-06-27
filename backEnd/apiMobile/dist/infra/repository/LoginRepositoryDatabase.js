"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class LoginRepositoryDatabase {
    constructor(mongo) {
        this.mongo = mongo;
    }
    logar(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            // fazer query no banco e ver se tem algum match com o input do usuario
            console.log('credentials', credentials);
            const result = yield this.mongo.client.db('tcc').collection('documents')
                .find({ email: credentials.email, password: credentials.password }).toArray();
            console.log('result repository database', result);
        });
    }
}
exports.default = LoginRepositoryDatabase;
