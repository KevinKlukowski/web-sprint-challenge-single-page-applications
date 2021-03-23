import React, {useEffect, useState} from 'react';
import pizza from './Pizza.jpg'
import Form from './Form'
import * as yup from 'yup'
import schema from './form_schema'
import { Route, Switch, Link} from 'react-router-dom'


const initialFormValues = {
  ///// DROPDOWN /////
  size: '',
  ///// RADIO BUTTONS /////
  sauce: '',
  ///// CHECKBOXES /////
  pepperoni: false,
  pineapple: false,
  onions: false,
  olives: false,
  ///// TEXT INPUTS /////
  additions: '',
  name: '',
}
const initialFormErrors = {
  size: '',
  sauce: '',
  name: '',
}
const initialOrders = []
const initialDisabled = true;

const App = () => {
  //states
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  //event handlers

  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP

    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors(
        {...formErrors, [name]: ''}
      ))
      .catch(err => setFormErrors(
        {...formErrors, [name]: err.errors[0]}
      ))

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['pepperoni', 'pineapple', 'onions', 'olives'].filter(topping => formValues[topping]),
      additions: formValues.additions.trim(),
      name: formValues.name.trim(),
    }
    //add new order to orders array
    setOrders([newOrder, ...orders])
    //reset form
    setFormValues(initialFormValues)
  }

  //side effect

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])

  return (
    <div className='App'>
      <Switch>
        <Route path='/pizza'>
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
            orders={orders}
          />
        </Route>

        <Route exact path='/'>
        <nav>
        <div className='logoContainer'>Lahnee's Pizza Delivery On-Demand</div>
        <div className='navButtonsContainer'>
          <Link to='/'>Home</Link>
          <br></br>
          <Link to='/pizza'>Pizza</Link> 
        </div>
      </nav>
      <section className='otherPlacesToOrder'>
        <h2>The best pizza delivered in all of Benzichibna</h2>
        <div className='restaurant'>
          <img src={pizza} alt=''/>
          <h4>OUR STORY:</h4>
          <p>It all started when the founding father's discovered 
            vast uninhabited land that was PERFECT for groweing the 
            sweetest, tangiest, ripest, freshest, most organic tomatoes.
            They worked the land for hundreds of days , hand fertilizing each '
            small piece of dirt, so that every single plant was at 100% happiness.
            Time passed and we opened our first pizza delicatessan, 'Lahnee's Pies'
            which was an instant hit. And now we're here today! Come join us in creating
            (and eating hahahahaha) the best pizza in all of history. Enhjoy.
          </p>
          <p>
            <span className='tag'>Wait time for delivery: 20-30 Min</span>
            <br></br>
            <span className='tag'>$5.99 Delivery Fee, unless you're a secret winner!</span>
          </p>
        </div>
      </section>
        </Route>
      </Switch>

    </div>
  );
};

export default App;