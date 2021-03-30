const database = require('../db/models');

class UsersServices {
    static async getUsers(){
        return await database.User.findAll({
            attributes: {
                exclude: ["password"]
            }
        })
    }

    static async getUser(uid){
        return await database.User.findOne({
            where: {
                id: uid
            },
            attributes: {
                exclude: ["password"]
            }
        })
    }

    static async destroyUser(uid){
        return await database.User.destroy({
            where: {
                id: uid
            }
        })
    }

    static async newUser(data){
        return await database.User.create(data)
    }
}

module.exports = UsersServices