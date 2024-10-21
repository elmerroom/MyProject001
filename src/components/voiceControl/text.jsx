import style from "../../style/voiceContoler/text.module.css"
import { Outlet, Link } from "react-router-dom"

export default function Text() {


  return (
    <>
    <section className={style.main}>
      <div className={style.left1}>
        <h1 className={style.h1}>Yamaguchi</h1>
        <h1 className={style.h1}>Voice Control </h1>
        
        <div className={style.left}>
          <div className={style.text1}>
            Вы можете управлять программами массажа или самим креслом с помощью голосовых команд, приведённых ниже. Коснитесь кратковременно кнопки голосового управления, расположенной на левом подлокотнике, для запуска сеанса голосового управления. 
          </div>
          <div className={style.text2}>
          Произнесите одну из доступных команд. Если произнесённая команда распознана, вы услышите ответ и кресло приступит к выполнению запроса.
          </div>
          <div className={style.ok}>
        <div className={style.say}> СКАЖИ:<Link className={style.link} to={"/"}>Table</Link></div>
        <div className={style.yamaguchie}>
          <div className={style.yama}>«ОКЕЙ,</div>
          <div className={style.guchie}> ЯМАГУЧИ»</div>
        </div> 
        
      </div>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.right1}>
          <div>
            <img className={style.statue} src="/image/voiceController/на главную 13.png" alt="" />
            <div className={style.shadowCircle}></div>
          </div>
          <img className={style.inter} src="/image/voiceController/интерфейс 2.png" alt="" />
        </div>
      </div>
        
        
    </section>
    <div className={style.z}></div>
      </>
  )
}