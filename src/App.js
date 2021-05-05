import React, { Component } from 'react';
import './App.css';

import 'bulma/css/bulma.css';


class App extends Component {
  state = {
    btnAdminActive: true,
    nbCom: 0,    
    nameToAdd: "",
    textToAdd: "",
    comments: []
    
  }

  increment = () => {
    this.setState({
      nbCom: this.state.nbCom +1
    })
  }

addingName = (event) => {   
    this.setState({
        nameToAdd: event.target.value
    })
}

addingText = (event) => {
    
    this.setState({
        textToAdd: event.target.value
    })
}

saveComments = (event, commentsObjects) => {
    event.preventDefault(event);

    commentsObjects = {
        name: this.state.nameToAdd,
        message: this.state.textToAdd
    }

    let newcomments = [...this.state.comments, commentsObjects]
    
    this.setState({
        comments: newcomments
    })
    
    console.log(newcomments);
}

changeState = () => {
  this.setState({
    btnAdminActive: false
  })
}


  render() {
    const savedCommentsJSX = this.state.comments.map(saved => {
      return <div>
                <li>{saved.name}</li>
                <li>{saved.message}</li>
              </div>
    })

    let toggleButton;
    if (this.state.btnAdminActive) {
      toggleButton = this.state.btnAdminActive;
      this.state.btnAdminActive = false 
    }
    // let btnActive;
    // if(this.state.btnAdminActive) {
    //   btnActive = this.state.btnAdminActive
    // } else {
    //   btnActive = "";
    // }

    return (
      
      <div className="App">
<div>
      <div>
        <button className="button is-link btnAdmin" onClick={this.changeState}>Activer le mode administrateur</button>
        </div>
        <div className="forms">
        <div className="field">

          <h2>Ajouter un commentaire</h2>

              <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Your name" onChange={this.addingName} value={this.state.nameToAdd}/>
          </div>
        </div>

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Your comment" onChange={this.addingText} value={this.state.textToAdd}>{this.state.textToAdd}</textarea>
  </div>
</div>

<div className="field is-grouped">
  <div className="control">
    <button className="button is-link" onClick={this.saveComments}>Envoyer</button>
  </div>
</div>

</div>

<div>
  <h2>liste des commentaires ({this.state.nbCom})</h2>
      <ul>
        {savedCommentsJSX}
      </ul>
</div>
</div>
      </div>
    );
  }
}

export default App;