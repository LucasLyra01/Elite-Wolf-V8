import { useState } from 'react';
import styles from './styles.module.scss';

export function Input(props){
    const [isActive, setIsActive] = useState(false); 
    const [value, setValue] = useState('');

    const [values, setValues] = useState('');

  function handleTextChange(event) {

    console.log(event.target);

    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });

    setValue(value);

    if (value !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  return(
    <div className={styles.floatLabel}>
      <input 
      id={props.id}
      name={props.name}
      type={props.type}
      value={value}
      onChange={handleTextChange}
      />

      <label 
        className={ isActive ? styles.Active : '' } 
        // htmlFor="email"
        >
        {props.title}
      </label>
    </div>
  )
}
// return(
//   <div className={styles.floatLabel}>
//       <input 
//       id={props.id}
//       // type='email'
//       type={props.type}
//       // value={value}
//       onChange={(e) => handleTextChange(e.target.value)}
//       />

//       <label 
//       className={ isActive ? styles.Active : '' } 
//       // htmlFor="email"
//       >
//       {props.title}
//       </label>
//   </div>
// )