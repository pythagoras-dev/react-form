import React,{Component} from 'react';
import FormComp from './FormComp'

class Form extends Component{
  constructor(){
    super()
    this.state={
      firstName:'',
      lastName:'',
      age:'',
      gender:'',
      destination:'',
      isVegan: false,
      isKosher: false,
      lactoseFree: false,

    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event){
    const {name,value,type,checked} = event.target
    type === 'checkbox'?
      this.setState({
            [name]: checked
          })
        :
    this.setState({
      [name]:value
    })
  }
  render(){
    return(

    <FormComp
     handleChange={this.handleChange}
      data={this.state}
    />
  )
  }
}


export default Form;
