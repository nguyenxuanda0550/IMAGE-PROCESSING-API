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
const checkFile_1 = __importDefault(require("./checkFile"));
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("./resize"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Image processing API');
});
app.get('/api/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let filename = '';
        let width = 200;
        let height = 200;
        if (req.query.width && !isNaN(+req.query.width)) {
            width = Number(req.query.width) || 200;
        }
        else {
            throw 'Width empty, please input the width';
        }
        if (req.query.height && !isNaN(+req.query.height)) {
            height = Number(req.query.height) || 200;
        }
        else {
            throw 'Height empty, please input the height';
        }
        if (req.query.filename) {
            filename = req.query.filename.toString();
            console.log("filename", filename);
            const isExist = yield (0, checkFile_1.default)(filename, width, height);
            if (!isExist) {
                yield (0, resize_1.default)(filename, width, height);
            }
            res.sendFile(`${__dirname}/assets/thumb/${filename}-${width}-${height}.jpg`);
        }
        else {
            throw 'No file name no provide, Please check again!';
        }
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
}));
app.listen(port, () => {
    console.log(`Server running on port ${port}!`);
});
exports.default = app;
