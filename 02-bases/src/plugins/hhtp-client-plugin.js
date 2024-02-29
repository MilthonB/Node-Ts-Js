const axios = require('axios');


const httpClientPlugin = {


    get: async(url) => {
        const {data} = await axios.get(url)
        // const resp = await fetch(url);
        //const data = await resp.json();        
        return data.name;
    }

     

};


module.exports ={
    httpClientPlugin
}