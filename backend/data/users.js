import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Paul Dev',
        email: 'paul@yahoo.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Steve Ross',
        email: 'steve@yahoo.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users