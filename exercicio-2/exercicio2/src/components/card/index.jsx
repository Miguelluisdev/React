import posterImg from "../../assets/star-awrs.jpg"
import styles from "./styles.module.css"
export default function Card(){
  return (
    <div className={styles.container}>
      <img  className={styles.poster} src={posterImg} alt="" />
      <div className="">
          <h2>Star Wars</h2>
          <p>Poster do filme star wars de 1977, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos adipisci atque numquam repellat aspernatur facere, sunt, tempora consequatur corporis obcaecati aliquid recusandae asperiores enim animi! Facilis, at ipsum! Perspiciatis?, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias velit eligendi incidunt quasi repudiandae magnam accusantium tempore, at id quis, autem voluptatibus ullam, reprehenderit minima et. Culpa doloribus mollitia delectus!</p>
          <button>Comprar Agora</button>
      </div>
    </div>
  )
}