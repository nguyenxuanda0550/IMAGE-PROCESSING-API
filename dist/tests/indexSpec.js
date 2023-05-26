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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const resize_1 = __importDefault(require("../resize"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(__1.default);
it('Expect resizeImage() result to equal value', () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, resize_1.default)('fjord', 200, 200);
    expect(result).toEqual(true);
}));
describe('Test endpoint responses', () => {
    it('gets the api/images endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.get('/api/images').expect(200);
    }));
});
