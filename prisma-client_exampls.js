const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a new user called `Alice`
  const newUser = await prisma.createUser({ name: 'Alice' })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)

  const user = await prisma
  .user({ id: 'cjsuhw38c004i0878y5d7i3wq' })
  console.log(user)

  const usersCalledAlice = await prisma
  .users({
    where: {
      name: 'Alice'
    }
  })
  console.log(usersCalledAlice)

  const updatedUser = await prisma
  .updateUser({
    where: { id: 'cjsuhwxez005j0878e8wq3e9q' },
    data: { name: 'Ron' }
  })
  console.log(updatedUser)

  const deletedUser = await prisma
  .deleteUser({ id: 'cjsuhw8ir004r08780fmor3ub' })
  console.log(deletedUser)
}

main().catch(e => console.error(e))