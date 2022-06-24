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
const mongodb_1 = require("mongodb");
class Mongo {
    constructor(url) {
        this.client = new mongodb_1.MongoClient(url);
        this.connect();
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect;
            console.log('connected succesfully to server');
            const db = this.client.db('tcc');
            const collection = db.collection('documents');
            // console.log(collection)
            // const findResult = await collection.find({}).toArray();
            // console.log('Found documents =>', findResult);
        });
    }
}
exports.default = Mongo;
