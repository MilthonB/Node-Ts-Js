import axios from'axios';

    
export const httpClientPlugin = {


    get: async(url:string) => {
        const {data} = await axios.get(url)
        // const resp = await fetch(url);
        //const data = await resp.json();        
        return data;
    }

     

};

