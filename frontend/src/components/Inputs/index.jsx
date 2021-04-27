import { useState } from 'react';
import styles from './styles.module.scss';

export function Input(props){
    const [isActive, setIsActive] = useState(false); 
    const [value, setValue] = useState('');

  function handleTextChange(text) {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  return(
    <div className={styles.floatLabel}>
        <input 
        // type='email'
        type={props.type}
        // value={value}
        onChange={(e) => handleTextChange(e.target.value)}
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