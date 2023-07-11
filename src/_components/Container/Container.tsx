import React from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
    children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <main className={styles.container}>{children}</main>;
};

export default Container;