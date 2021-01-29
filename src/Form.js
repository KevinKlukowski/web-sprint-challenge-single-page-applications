import React from 'react'
import { Link} from 'react-router-dom'

export default function Form(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
    orders
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, type, checked } = evt.target;
    const newValue = type === 'checkbox' ? checked : value
    change(name, newValue)
  }


  return (
    <div className='form'>
      <nav>
        <div className='logoContainer'>KAI Premium Pizza Delivery On-Demand</div>
        <div className='navButtonsContainer'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Pizza</Link> 
        </div>
      </nav>
      <section className='hero pizza-hero'>
        <h1>
          Build Your Own Pizza
        </h1>
      </section>
      <form className='form container' onSubmit={onSubmit}>
        <div className='form-group dropdown'>
          <h4>Build Your Own Pizza</h4>

          <label>Choose your size
            <select
              onChange={onChange}
              value={values.size}
              name='size'
            >
              <option value=''>- Select an option -</option>
              <option value='sm'>Small</option>
              <option value='md'>Medium</option>
              <option value='lg'>Large</option>
              <option value='pl'>Gargantuan</option>
            </select>
          </label>
        </div>
        <div className='form-group radios'>
          <label className='radios-container'>Choose a sauce
            <label>
              <input 
                type='radio'
                name='sauce'
                value='red'
                checked={values.sauce === 'red'}
                onChange={onChange}
              />
              Chunky tomato
            </label>
            <label>
              <input 
                type='radio'
                name='sauce'
                value='garlic'
                checked={values.sauce === 'garlic'}
                onChange={onChange}
              />
              Garlicy white
            </label>
            <label>
              <input 
                type='radio'
                name='sauce'
                value='bbq'
                checked={values.sauce === 'bbq'}
                onChange={onChange}
              />
              BEE BEE KYOO
            </label>
            <label>
              <input 
                type='radio'
                name='sauce'
                value='alfredo'
                checked={values.sauce === 'alfredo'}
                onChange={onChange}
              />
              Buffalo all the way
            </label>
          </label>

        </div> 
        <div className='form-group checkboxes'>
          <label className='checks-container'>Choose some toppings
            <label>
              <input
                type='checkbox'
                name='pepperoni'
                checked={values.pepperoni}
                onChange={onChange}
              />
              Pepperoni
            </label>

            <label>
            <input
                type='checkbox'
                name='pineapple'
                checked={values.pineapple}
                onChange={onChange}
              />
              Pepperocini 
            </label>

            <label>
            <input
                type='checkbox'
                name='onions'
                checked={values.onions}
                onChange={onChange}
              />
              Onions
            </label>

            <label>
            <input
                type='checkbox'
                name='olives'
                checked={values.olives}
                onChange={onChange}
              />
              Olives
            </label>
          </label>
        </div> 
        <div className ='form-group textBoxes'>
          <label>Tips on how to create the perfect pizza?
            <input
              value={values.additions}
              onChange={onChange}
              name='additions'
              type='text'
              placeholder="Anything else you'd like to add?"
            />
          </label>
        </div> 
        <div className='submitContainer form-group'>
          <label>Name
            <input
              value={values.name}
              onChange={onChange}
              name='name'
              type='text'
            />
          </label>
          <input type='submit' id='submitBtn' value='Add to Order' disabled={disabled}></input>
          <div className='errors'>
            <div>{errors.size}</div>
            <div>{errors.sauce}</div>
            <div>{errors.name}</div>
          </div>
        </div>
      </form>
      <div className='submittedOrders'>
        {JSON.stringify(orders)}
      </div>
    </div>
  )
}