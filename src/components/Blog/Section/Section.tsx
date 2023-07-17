import styles from './Section.module.scss';

type SectionProps = {
    children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
    return <section>
        <h1 className={styles.title}>Blog</h1>
        <div className={styles.section}>{children}</div>
    </section>;
};

export default Section;