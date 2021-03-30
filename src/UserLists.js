import React from 'react';
import ListComponent from './ListComponent';

export default class UserLists extends React.Component{
    state = { lists : [], loading: true}

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'

            }
        }
        
        config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');

        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading: false});

    }

 
    render()
    {
        const listsApi = this.state.lists;
     
        return (
            <div>
                {listsApi.map(x =>  <ListComponent key={x.id}  listName={x.name} items={x.item_set}/>)}
            </div>
        )
    }
}