import React,{ Component } from 'react';
import './App.css';
import Contacts from './Contacts';
import './List.css';
class App extends Component {
  constructor(props)
  {
    super(props);
    this.addContact=this.addContact.bind(this);
  }
state={
  contacts:[{
    name:'Ali',
    phone:'0555 555 55 60'
  },
  {
    name:'Artva',
    phone:'0555 555 55 52'
  }

]
};

addContact(contact)
{
  console.log(contact);

  const{contacts}=this.state;
  contacts.push(contact);

  this.setState(
    {
      contacts:contacts
    }
  );
}

  render()
  {
    return (
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
      </div>
    );
  }
 
}

export default App;
