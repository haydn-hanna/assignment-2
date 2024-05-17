const ChatOpenAI = require(`@langchain/openai`)
const fs = require('fs')

function findFile(filename,path){
    return fs.existsSync(`${path}/${filename}`)
}

function createDirectory(directory){
    if (!fs.existsSync(directory)){
        fs.mkdirSync(directory)
    }else{
        throw new Error(`Directory ${directory} already exists`)
    }
}