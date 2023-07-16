import styles from './Container.module.scss';

type ContainerProps = {
    children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return <main className={styles.container}>{children}</main>;
};

export default Container;