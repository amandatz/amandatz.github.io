import React from 'react';
import styles from './Standard.module.scss';

type ButtonProps = {
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
    return <button className={styles.button}>{ children }</button>;
};

export default Button;