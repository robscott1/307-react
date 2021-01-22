import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import axios from 'axios'

class App extends Component {

    componentDidMount() {
      axios.get('http://localhost:5000/users')
      .then(res => {
        const characters = res.data.users_list;
        this.setState({ characters });
      })
      .catch(function (error) {
        //Not handling the error. Just logging into the console.
        console.log(error);
      });
    }

    state = {
      characters: []
    }

    removeCharacter = (index, id) => {
      const { characters } = this.state


      axios.delete('http://localhost:5000/users?id=' + id)
      .then(res => {
        if (res.status === 204) {
          this.setState({
            characters: characters.filter((character, i) => {
              return i !== index
            }),
          })
        }
      })
    }
    
    handleSubmit = character => {
      this.makePostCall(character).then( callResult => {
         if (callResult) {
            this.setState({ characters: [...this.state.characters, callResult] });
         }
      });
    }

    makePostCall(character){
      return axios.post('http://localhost:5000/users', character)
       .then(function (response) {
         console.log(response);
         return (response.data.newUser);
       })
       .catch(function (error) {
         console.log(error);
         return false;
       });
    }

    render() {
      const { characters } = this.state;
      
      return (
        <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit}/>
        </div>
      );
    }
  }
  
  

export default App