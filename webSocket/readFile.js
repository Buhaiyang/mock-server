const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const fileList = [];
const reg = /.*js$/;

const readDirRecur = (file, callback)=>{
  return readdir(file).then((files)=>{
    files = files.map((item)=>{
      const fullPath = `${file}/${item}`;
      return stat(fullPath).then((stats)=>{
        if (stats.isDirectory()) {
          return readDirRecur(fullPath, callback);
        }else{
          if(reg.test(item)){
            callback(item, fullPath);
          }
        }
      })
    });
    return Promise.all(files);
  });
}

const getMockData = (callback)=>{
  readDirRecur(`${__dirname}/data`, (item, fullPath)=>{
    const data = require(fullPath);
    if (Object.keys(data).length > 0) {
      fileList.push(data);
    }
  }).then(()=>{
    callback && callback(fileList);
  }).catch((err)=>{
    console.log(err);
  });
}
module.exports = getMockData
