import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function getTodos(userId:number){
  // const response=await prisma.todo.create({
  //   data:{
  //     title:"Go to gym",
  //     description:"Go at 7pm",
  //     userId:userId
  //   }
  // })
  const response=await prisma.todo.findMany({
    where:{
      userId:userId
    },
    select:{
      id:true,
      title:true,
      description:true,
      user:true
    }
  })
  console.log(response);
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