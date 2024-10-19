import Text from "../components/voiceControl/text"
import style from "../style/voiceContoler/voiceController.module.css"
import { Outlet, Link } from "react-router-dom"

export default function VoiceControl() {
  

  return (
    <main className={style.main}>
      
      {/* <img className={style.vector} src="" alt="" /> */}
      <Text></Text>
      <div className={style.center}>
      <img className={style.statue} src="/image/voiceController/на главную 13.png" alt="" />
        <div className={style.shadowCircle}></div>
        <div className={style.z}>
          <img className={style.inter} src="/image/voiceController/интерфейс 1.png" alt="" />
        </div>
      </div>
     
      <div className={style.ok}>
      
        <div className={style.say}> СКАЖИ:</div>
        <div className={style.yamaguchie}>
          <div className={style.yama}>«ОКЕЙ,</div>
          <div className={style.guchie}> ЯМАГУЧИ»</div>
          <Link className={style.link} to={"/"}>Table</Link>
        </div> 
      </div>
      
    </main>
  )
}