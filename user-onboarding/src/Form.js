import React from 'react'; 

export default function Form(props) {
    const{
        values, 
        submit, 
        change, 
        disabled, 
        errors, 
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === "checkbox" ? checked : value; 
        change(name, valueToUse)
    }



    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <h2>Information Required</h2>

                <label>First Name
                <input 
                    value={values.first_name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
                </label><br />

                <label>Email
                <input 
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                />
                </label><br />


                <label>Password
                <input 
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                />
                </label><br />


                <label>Terms of Service
                <input 
                    value={values.termsOfService}
                    onChange={onChange}
                    name='terms of service'
                    type='checkbox'
                />
                </label><br />
            </div>

            <div className='formSubmit'>

            
                <button id='submitBtn' type="submit" disabled={disabled}>Submit</button>

                <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.termsOfService}</div>
                </div>

            </div>
        </form>
    )
}