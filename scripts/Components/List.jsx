import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elementList: this.props
        }

    }


    render() {
    const {elementList} = this.state;
    console.log(elementList.list);
        return (
            <ul>
                { elementList.list.map(function(item,index) {
                    return (<li key={index}>{item.name}</li>)
                    })
                }
            </ul>
        )
    }
}


export default List;
