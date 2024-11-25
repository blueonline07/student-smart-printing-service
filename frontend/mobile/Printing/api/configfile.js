
let files = [];


export const addFileData = (data) => {
    files.push(data);
    console.log('Data added:', data);
};



export const getFileData = () => {
    return files;
};

export const clearfile = () => {
    files = [];

};
