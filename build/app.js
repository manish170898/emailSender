"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
var transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "ea878676f512b9",
        pass: "80e24eff65584e"
    }
});
let mailOption = {
    from: "manish170898@gmail.com",
    to: "ash070397@gmail.com",
    subject: "Testing",
    text: "First Email using nodemailer"
};
transport.sendMail(mailOption).then((res) => {
    console.log("Email send", res);
})
    .catch((err) => {
    console.log(err);
});
// app.get('/', (req: Request,res: Response)=>{
//     res.send('Hello world');
// })
app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
});
