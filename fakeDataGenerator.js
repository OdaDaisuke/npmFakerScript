let faker = require("faker")

let db = {
  users: []
}

for(let i = 0;i <= 2; ++i) {
  db.users.push({
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    profile_image: faker.image.imageUrl(),
    email: faker.internet.email(),
    coins: faker.finance.amount()
  })
}

console.log(JSON.stringify(db))
