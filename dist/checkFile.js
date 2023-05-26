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
const fs_1 = require("fs");
const checkFile = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, fs_1.accessSync)(`${filename}-${width}-${height}.jpg`, fs_1.constants.R_OK);
        console.log("check file exit", `${filename}-${width}-${height}.jpg`, fs_1.constants.R_OK);
        console.log("check file exit", `${filename}-${width}-${height}.jpg`, fs_1.constants.R_OK);
        return Promise.resolve(true);
    }
    catch (err) {
        console.log(err);
        return Promise.resolve(false);
    }
});
exports.default = checkFile;
