const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('fang', 'root', '123456', {
  dialect: 'mysql',
  dialectOptions: {
    // Your mysql2 options here
  }
})

// 创建 User 模型
class User extends Model {}
// 初始化 User
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
  },
  { sequelize, modelName: 'user' }
)

// Find all users
const runFind = async () => {
  await User.destroy({
    where: {
      id: 1
    }
  })
  const users = await User.findAll()
  console.log(JSON.stringify(users))
  sequelize.close()
}
runFind()
// console.log(users.every(user => user instanceof User)); // true
// console.log("All users:", JSON.stringify(users, null, 2));

// // 同步到数据库
// ;(async () => {
//   await sequelize.sync()
//   // 创建一条记录
//   const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   })
//   // 打印结果
//   console.log(jane.toJSON())
// })()
