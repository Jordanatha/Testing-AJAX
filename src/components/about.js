import React, { Component } from 'react';
import LoadingSpinner from './loading';
import LayoutComponent from './layout';

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            posts:[],
            loading:false,
        }
    }

    componentWillMount(){
        console.log(this.state.loading);
        this.setState({loading:true}, () => {
            console.log(this.state.loading);
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(data=> this.setState({ posts:data, loading:false }));
        });
    }

  render() {
    const postItems = this.state.posts.map(post=>(
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
    ));

    const loading = this.state.loading;

    if(this.state.loading == false){
    return(
        <div>
            <h1>about</h1>
            {postItems}
        </div>
    );
    }
    else if(this.state.loading == true){
        return(
            <div>
                <LoadingSpinner/>
            </div>
        );
    }
  }
}

export default App;