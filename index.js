const {ChatOpenAI} = require(`@langchain/openai`)
const fs = require('fs')

function findFile(filename){
    const fileExists = fs.existsSync(filename)
    return fileExists
}

function createDirectory(directory){
    if (!fs.existsSync(directory)){
        fs.mkdirSync(directory)
    }else{
        throw new Error(`Directory ${directory} already exists`)
    }
}

function createFile(path,filename,content,fileType){
    if(fileType[0] !== `.`){
        fileType = `.`+fileType
    }
    const validFileTypes = [`.txt`,`.json`,`.js`]
    if(!validFileTypes.includes(fileType)){
        throw new Error(`Invalid file type: ${fileType}`)
    }

    fs.writeFile(path+filename+fileType,content,(err)=>{
        if(err){
            throw new Error(`Error creating file: ${err}`)
        }
    })
}

const llm = new ChatOpenAI({apiKey:process.env.OPENAI_API_KEY})


createFile(`./`,`test`,`Hello World!`,`txt`)