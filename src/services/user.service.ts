import { prisma } from '../libs/prisma'
import bcrypt from 'bcryptjs'

type CreateUserProps = {
    name: string
    email: string
    password: string
}

type VerifyUserProps = {
    email: string
    
}

export const createUser = async ({name, email, password}: CreateUserProps) => {
    email = email.toLowerCase()

    const user = await prisma.user.findFirst({
        where: {email}
    })

    if(user) return false

    const hashedPasswird = await bcrypt.hash(password, 10),
}