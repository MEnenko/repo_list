import React from 'react';
import styles from './search.module.css';

export const DEFAULT_PLACEHOLDER = 'Search for repo..';
export const KEY_CODE_ENTER = 13;
export interface IProps {
  onChange: (value: string) => void,
  onSubmit:() => void,
  value: string,
  placeholder?: string,
}

const Search: React.FC<IProps> = ({value, onChange, onSubmit, placeholder}) => {
  const handleKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === KEY_CODE_ENTER) {
      event.preventDefault();
      event.stopPropagation();
      
      onSubmit();
    };
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => 
    onChange(event.currentTarget.value);

  return (
    <form className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onKeyDown={handleKeyPressed}
        onChange={handleChange}
        placeholder={placeholder || DEFAULT_PLACEHOLDER} 
      />
      <button type="button" className={styles.btn} onClick={onSubmit}>⚲</button>
    </form>
  );
};

export default Search;
