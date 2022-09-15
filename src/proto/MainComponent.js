import React from 'react';

class MainComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: null,
            search: {},
        }
        this.loadData = () => {};

        this.eventListener = () => {};

    }

    componentDidMount() {
        this.eventListener()
        this.setState(
            this.loadData(),
        );
    }
}

export default MainComponent;