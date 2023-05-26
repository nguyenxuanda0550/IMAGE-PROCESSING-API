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
const sharp_1 = __importDefault(require("sharp"));
const ImageQuery = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, sharp_1.default)(`src/assets/images/${filename}.jpg`)
            .resize({ width: width, height: height, fit: 'cover' })
            .toFile(`src/assets/thumb/${filename}-${width}-${height}.jpg`)
            .then(() => {
            return Promise.resolve(true);
        })
            .catch(() => {
            return Promise.reject(false);
        });
        if (result) {
            return Promise.resolve(true);
        }
        else {
            return Promise.reject(false);
        }
    }
    catch (error) {
        console.log(error);
        throw 'File name can be wrong. Please check again!';
    }
});
exports.default = ImageQuery;
