import style from "../style/table.module.css"
import { useState } from "react"
import { Outlet, Link } from "react-router-dom"
// import Image from "/image/upTable.png"

export default function Table () {

  const [isActive, setIsctive] = useState(false)

  // const up = style.table
  // const down = style.tableDown
  
  // let upper = false

  function btnUp() {
    setIsctive(false)
    
  }

  function btnDown() {
    setIsctive(true)
  }

  
  return (
    <div className={style.all}>
      
      <section className={style.leftSide}>
      <img className={style.tableDown} src="/image/стол чел 1.png" alt="" />
        <img className={isActive ? style.table : style.tableUpDown} src="/image/upTable.png" alt="" >
         
        </img>
        
        <button onClick={btnUp} className={style.up}>
          Вверх
        </button>
        <button onClick={btnDown} className={style.down}>
          Вниз
        </button>
        
      </section>
      <main className={style.text}>
        <h1>Эргономика - ключ к успеху современного человека</h1>
        <div className={style.text1}>
          Cтильная столешница , выполненной из экологически безопасного материала (ДСП), и усиленной стальной рамы не составит труда разместить на поверхности инновационного стола большое количество крупногабаритной техники: стол выдерживает нагрузку до 80 кг.
        </div>
        <section className={style.midSide}>
        <img className={style.tableDown} src="/image/стол чел 1.png" alt="" />
        <img className={isActive ? style.table : style.tableUpDown} src="/image/upTable.png" alt="" >
         
        </img>
        
        <button onClick={btnUp} className={style.up}>
          Вверх
        </button>
        <button onClick={btnDown} className={style.down}>
          Вниз
        </button>
      </section>
      <Link className={style.link} to={"/voiceControl"}>VoiceControl - вторая страница со статуэткой</Link>
        <div className={style.text2}> 
          Также столешница, обладающая меламиновым покрытием, хорошо переносит механические воздействия (царапины или удары), при контакте с водой не разрушается, устойчиво переносит бытовые химические вещества и не выгорает под воздействием ультрафиолета.
        </div>
        

      </main>
    </div>
  )
}