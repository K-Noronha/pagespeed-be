"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var PORT = 8080;
app.use(cors_1.default());
app.get("/", function (req, res) {
    res.send("Hello world!");
});
// app.use("/insight", insight)
app.listen(PORT, function () {
    console.log("server is listening on " + PORT);
});
