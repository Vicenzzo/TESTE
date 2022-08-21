import styles from './ComponentCar.module.css';

const ComponentCar = ({
    cor, marca, ano
}) => {
  return (
    <>
        <div className={styles.card_car}>
            <h1 className={styles.marca_car}>{marca}</h1>
            <p className={styles.descricao_car}>Cor: {cor}</p>
            <p className={styles.descricao_car}>Ano: {ano}</p>
        </div>
    </>
  )
}

export default ComponentCar