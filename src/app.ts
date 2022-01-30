import express, {Application, Request, Response} from 'express'
import nodemailer from 'nodemailer'

const app: Application = express();
const port: number = 3000

var transport = nodemailer.createTransport({
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
}

transport.sendMail(mailOption).then((res)=>{
    console.log("Email send", res);
})
.catch((err)=>{
    console.log(err);
})

// app.get('/', (req: Request,res: Response)=>{
//     res.send('Hello world');
// })

app.listen(port, ()=>{
    console.log(`Connected successfully on port ${port}`);
})