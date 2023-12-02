// import { PrismaClient} from '@prisma/client'
// import { Request, Response, NextFunction } from 'express';
// import bcrypt from 'bcrypt';
// const saltRounds = 10;

// const prisma = new PrismaClient()

// const userController = {
//   async createUser(req: Request, res: Response, next: NextFunction) {
//     const { id, email, password, favorite_team } = req.body;
//     if (!name || !email || !password)
//       return next({err : "Error creating a new user, missing name, email, or password"});

//     bcrypt.hash(password, saltRounds, async function(err, hash) {
//       if (err) return next({err: 'Error hashing password'});

//       try {
//         const user: Users = await prisma.users.create({
//             data: {
//               EMAIL: email,
//               PASSWORD: hash, 
//               FAVORITE_TEAM: favorite_team
//             },
//           });
//         return next();
//       } catch (error) {
//         return next({err: 'Error creating user in database'});
//       }
//     });
//   },

//   async getUser(req: Request, res: Response, next: NextFunction) {
//     const { id, email, password, favorite_team } = req.body;
//     if (!email || !password) return next({err: 'incorrect credentials'});

//     try {
//         const user: Users | null = await prisma.users.findUnique({
//             where: {
//               EMAIL: email,
//               id: id
//             },
//           });

//       if (user) {
//         bcrypt.compare(password, user.PASSWORD, function(err, match) {
//           if (match) {
//             res.locals.user = user;
//             return next();
//           } else {
//             throw new Error('Password does not match');
//           }
//         });
//       } else {
//         throw new Error('User not found');
//       }
//     } catch (error) {
//       return next({err: 'Error retrieving user from database'});
//     }
//   }
// }

// export default userController