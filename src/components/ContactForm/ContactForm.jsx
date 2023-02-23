import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form,Input,FormBtn } from './ContactForm.styled';

export const ContactForm=({addPerson})=>{
  const [name,SetName]=useState('');
  const [number,SetNumber]=useState('')
  const handleChange = e => {
    switch(e.currentTarget.name){
      case('name'):{
        SetName(e.currentTarget.value)
        break
      }
      case('number'):{
        SetNumber(e.currentTarget.value)
        break
      }
      default:{
        return
      }
    }};
    const handleSubmit = evt => {
          evt.preventDefault();
        addPerson({ name,number});
          reset();
        };

    const reset = () => {
      SetName('')
      SetNumber('')
  };
  return ( <Form onSubmit={handleSubmit}>
            <label >
               Name
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
                value={name}
                
              />
            </label>
            <label>
              Number
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
                value={number}
              />
            </label>
            <FormBtn type="submit">Add contact</FormBtn>
          </Form>)
}

// export class ContactFormOld extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };
//   handleSubmit = evt => {
//     evt.preventDefault();
//     this.props.addPerson({ ...this.state });
//     this.reset();
//   };

  
//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };
//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <label >
//           Name
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//             value={this.state.name}
            
//           />
//         </label>
//         <label>
//           Number
//           <Input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//             value={this.state.number}
//           />
//         </label>
//         <FormBtn type="submit">Add contact</FormBtn>
//       </Form>
//     );
//   }
// }
ContactForm.propTypes = {
    onSubmit: PropTypes.func,
  };