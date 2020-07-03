const users = []

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase()
  room = room.trim().toLowerCase()

  const existingUser = users.find(
    user => user.name === name && user.room === room
  )
  if (existingUser) {
    return { error: 'Username is taken ' }
  }

  const user = { id, name, room }
  users.push(user)
  return { user }
}

const getUser = id => users.find(user => user.id === id)

const removeUser = id => {
  const index = getUser(id)
  if (index !== -1) return users.splice(index, 1)[0]
}

const getUsersInRoom = room => users.filter(user => user.room === room)

module.exports = { addUser, getUser, removeUser, getUsersInRoom }
