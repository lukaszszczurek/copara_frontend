import React, {useEffect, useRef} from 'react';
import axios from "axios";
import jwtDecode from "jwt-decode";
function Home() {

    //  get  respose from path /api/v1/users/{email}
    const url = 'http://localhost:8080/api/v1/users/';
    const TOKEN = localStorage.getItem("jwtToken");

    // create function to get token from local storage and decode it
    const getTokenData =() : any => {
        const token = localStorage.getItem("jwtToken");
        if (token === null) return null;
        const tokenData = jwtDecode(token.toString());
        return tokenData;
    }

    const tokenData = getTokenData();
    console.log(tokenData.sub);
    const [data, setData] = React.useState<Object>({});

    const getUserData = async (url : string) : Promise <any> => {

        return await axios.get(url+tokenData.sub,{headers:
                {'Authorization': 'Bearer ' + TOKEN}
        }).then(response => response.data).catch(error => console.log("pip"));
    }


    useEffect(() => {
        console.log("DANE: "+ data)

        getUserData(url).then(data => setData(data)).catch(error => console.log("useEffect isue"));
    }, [10000]);


    return (
        <div>
            <h1>Home</h1>
            <h2>{TOKEN}</h2>

              <h2>{JSON.stringify(data)}</h2>

            <h2></h2>

            {/*<h2>{data}</h2>*/}
        </div>
    );
}

export default Home;