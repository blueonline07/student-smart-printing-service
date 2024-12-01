
let screenData = {};


export const addScreenData = (key, data) => {
    screenData[key] = data; 
    console.log(`Data added for ${key}:`, data);
};



export const getScreenData = () => {
    return screenData["com1"];
};


export const clearScreenData = () => {
    screenData = {};
    console.log('All screen data cleared.');
};



export const sendScreenDataToBackend = async () => {
    try {
        const response = await fetch('https://your-backend-api.com/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(screenData),
        });

        if (response.ok) {
            console.log('Data sent successfully!');
            clearScreenData(); // Xóa dữ liệu sau khi gửi thành công
        } else {
            console.error('Failed to send data');
        }
    } catch (error) {
        console.error('Error sending data:', error);
    }
};
