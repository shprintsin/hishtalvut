import styles from './blockcontainer.module.css'
function Block({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  )
}

function Title({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}

function Content({ children,className }) {
  return <div className={`${styles.content} ${className}`}>{children}</div>;
}

Block.Title = Title;
Block.Content = Content;

export default Block;