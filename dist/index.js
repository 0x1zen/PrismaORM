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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        // const response=await prisma.todo.create({
        //   data:{
        //     title:"Go to gym",
        //     description:"Go at 7pm",
        //     userId:userId
        //   }
        // })
        const response = yield prisma.todo.findMany({
            where: {
                userId: userId
            },
            select: {
                id: true,
                title: true,
                description: true,
                user: true
            }
        });
        console.log(response);
    });
}
getTodos(1);
// async function getUser(username: string) {
//   const res=await prisma.user.findUnique({
//     where:{
//         email:username
//     }
//   })
//   console.log(res);
// }
// getUser("raj@gmail.com");
// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }
// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//   const res=await prisma.user.update({
//     where:{
//         email:username
//     },
//     data:{
//         firstName,
//         lastName
//     }
//   })
// }
// updateUser("chetan@gmail.com",{
//     firstName:"Chetya",
//     lastName:"kesur"
// })
// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//   const res=await prisma.user.create({
//     data:{
//         email:username,
//         password,
//         firstName,
//         lastName
//     },
//     select:{
//         id:true,
//         password:true
//     }
//   })
//   console.log(res);
// }
// insertUser("chetan@gmail.com","chetan123","chetan","kesare");
