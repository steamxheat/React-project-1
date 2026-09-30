let users = [
  { id: 1, name: 'Иван', email: 'ivan@mail.ru' },
  { id: 2, name: 'Дима', email: 'dima@mail.ru' },
  { id: 3, name: 'Олег', email: 'oleg@mail.ru' },
]

function delay() {
  const time = Math.floor(Math.random() * 1000) + 500

  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

export async function getUsers() {
  await delay()

  return users
}

export async function getUser(id) {
  await delay()

  return users.find((user) => user.id === id)
}

export async function createUser(user) {
  await delay()

  const newUser = {
    id: Date.now(),
    ...user,
  }

  users = [...users, newUser]

  return newUser
}

export async function updateUser(id, changes) {
  await delay()

  users = users.map((user) => {
    if (user.id === id) {
      return { ...user, ...changes }
    }

    return user
  })

  return users.find((user) => user.id === id)
}

export async function deleteUser(id) {
  await delay()

  users = users.filter((user) => user.id !== id)

  return true
}
