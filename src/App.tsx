import React from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';


// components
import Home from './components/Home';
import Main from "./components/Main";
import LoginUser from "./components/login/LoginUser";
import Register from "./components/login/Register";



function App() {

    //
    //  const url = 'http://localhost:8080/api/v1/users/';
    //  const email = 'uuuusd@p.pl';
    //  const [data, setData] = React.useState<any>("");
    //
    // // fetch data from url
    //  function api<T>(url : string) : Promise <T> {
    //    return fetch(url).then(response => response.json());
    //  };
    //
    //  // call api function
    //    React.useEffect(() => {
    //        api(url+email)
    //            .then(response => setData(response)).catch(error => console.log(error));
    //
    //
    //      console.log(data);
    //
    //    }, [data]);



    return (
        // create routes
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path={"/home"} element={<Home/>} />
                    <Route path={"/login"} element={<LoginUser/>} />
                    <Route path={"/register"} element={<Register/>} />
                </Routes>
            </BrowserRouter>

        </div>


    );
}

export default App;
function then(arg0: (response: any) => void): any {
    throw new Error('Function not implemented.');
}


