import styles from './Section.module.scss';

type SectionProps = {
    children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
    return <section>
        <div className={styles.section}>{children}</div>
    </section>;
};

export default Section;