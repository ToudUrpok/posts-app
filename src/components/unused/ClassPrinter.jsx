import React from "react";

class ClassPrinter extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            value: 'BITCH!'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <input
                    value={this.state.value}
                    onChange={(e) => this.setState({ value: e.target.value })}
                />
            </div>
        )
    }
}

export default ClassPrinter;

