import React from "react";

class NotFound extends React.Component{
    constructor(props){
        super();

        this.state = {};
    }
    render(){
        return(
            <div>
                <img src="https://http.cat/404" />
            </div>
        );
    }
}

export default NotFound;