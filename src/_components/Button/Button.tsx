import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
    return <button className={styles.button}>{ children }</button>;
};

export default Button;