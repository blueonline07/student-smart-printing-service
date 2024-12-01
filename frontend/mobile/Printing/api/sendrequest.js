import axios from 'axios';



const endpoint = 'https://developer.spotify.com/documentation/web-api'; 
export const getprinter = async (data) => {
  // getprinter with params data
  try {
    console.log('Sending request to:', endpoint);
    const response = await axios.get(endpoint,data, {
      headers: {
        'Content-Type': 'application/json', 
      }
    });

    console.log('Response:', response.data); 
    return response.data; 
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error; 
  }
  
};
export const sendreq = async (data) => {
  try {
    console.log('Sending request to:', endpoint);
    const response = await axios.post(endpoint,data, {
      headers: {
        'Content-Type': 'application/json', 
      }
    });

    console.log('Response:', response.data); 
    return response.data; 
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error; 
  }
};

export const sendfile = async (data) => { 
  try {
    console.log('Sending request to:', endpoint);
    const response = await axios.post(endpoint,data, {
      headers: {
        'Content-Type': 'application/json', 
      }
    });

    console.log('Response:', response.data); 
    return response.data; 
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error; 
  }
}