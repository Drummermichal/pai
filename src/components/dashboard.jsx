import React from "react";
import { useParams } from "react-router-dom";

const withRouter = (Child) => {
    return (props) => {
        const params = useParams();
        return <Child { ...props } params={ params } />;
    }
};

class Dashboard extends React.Component{
    constructor(props){
        super();

        this.state = {};
    }
    render(){
        return(
            <div>
                Dashboard = {this.props.params.id}
                <img src="https://http.cat/201" />
            </div>
        );
    }
}

export default withRouter(Dashboard);