import React from 'react'


function FormComp(props){
  return(
    <main className='main'>
      <form>
          <div>
          <input
            id='FName'
            type='text'
            className='input'
            name='firstName'
            value={props.data.firstName}
            onChange={props.handleChange}
            placeholder=' '
          />
          <label for='FName'>First Name</label>
          </div>
          <br />

        <div>
          <input
            type='text'
            className='input'
            name='lastName'
            value={props.data.lastName}
            onChange={props.handleChange}
            placeholder=''
          /><label for='lname'>lname
        </label></div><br />

        <label>
          <input
            type='number'
            className='input'
            name='age'
            value={props.data.age}
            onChange={props.handleChange}
            placeholder='Age'
          />
        </label><br />

        <label>
          <input
            type='radio'
            name='gender'
            value='Male'
            checked={props.data.gender === 'male'}
            onChange={props.handleChange}
          />Male
        </label>

        <label>
          <input
            type='radio'
            name='gender'
            value='Female'
            checked={props.data.gender === 'female'}
            onChange={props.handleChange}
          />Female
        </label><br />

        <select className='input' value={props.data.destination} name='destination' onChange={props.handleChange}>
          <option value=''>-- Please Choose a destination --</option>
          <option value='Germany'>Germany</option>
          <option value='France'>France</option>
          <option value='Qatar'>Qatar</option>
          <option value='London'>London</option>
          <option value='Nairobi'>Nairobi</option>
        </select><br />

        <label>
          <input
            className='input'
            type='checkbox'
            name='isVegan'
            onChange={props.handleChange}
            checked={props.data.isvegan}
          />Vegan?
        </label>

        <label>
          <input
            type='checkbox'
            name='isKosher'
            onChange={props.handleChange}
            checked={props.data.iskosher}
          />Kosher?
        </label>

        <label>
          <input
            type='checkbox'
            name='lactoseFree'
            onChange={props.handleChange}
            checked={props.data.lactoseFree}/>Lactose Free?
        </label><br />

        <button className='btn'>Submit</button>
      </form>
      <hr />
      <h2>Your Details:</h2>
      <p>Your Name: {props.data.firstName} {props.data.lastName}</p>
      <p>Your Age: {props.data.age}</p>
      <p>Your Gender: {props.data.gender}</p>
      <p>Your Destinaion: {props.data.destination}</p>
      <p><b>Your Dietary Restrictions:</b></p>
      <p>Vegan: {props.data.isVegan ? 'Yes' : 'No'}</p>
      <p>Kosher: {props.data.isKosher ? 'Yes' : 'No'}</p>
      <p>Lactose Free: {props.data.lactoseFree ? 'Yes' : 'No'}</p>

    </main>
  )
}

export default FormComp;
