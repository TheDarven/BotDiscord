var fs = require('fs');

const createFolders = (dirs) => {
    dirs.forEach(function (dir, index) {
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }else{

        }
    });
};

module.exports=exports=createFolders;
