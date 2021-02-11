const Sequelize = require('sequelize');
const connection = require('../database/database');

const PostSchema = connection.define('posts',{
    id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    body:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

//PostSchema.sync({force:true});

module.exports = PostSchema;