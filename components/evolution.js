/* https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj */

import style from './evolution.module.css'
import Image from 'next/image'


export default function Evolution() {
  

  return (
    <div className={style.container}>
      <div className={style.containerStepDescription}>
        <div className={style.step}>
          <div className={style.containerImage}>
            <Image 
              src="/table.png"
              alt="Picture of the author"
              layout="responsive"
              width={1000}
              height={1000}
            />
          </div>
          <div className={style.stepName}>
            <div>step 1, step 1, step 1, step 1, step 1, step 1, step 1,</div> 
            <div>step 1, step 1, step 1, step 1, step 1, step 1, step 1</div>
          </div>
        </div>
        <div className={style.description}>
          dflkdlfk dlfkldkf dfdl;fk; dlfm;elmv ;efm;ec ;eflm;lemf; lmdlmlmlm dfdnfjb sghbd kbjkbf kfb kb kbjbjkbkb kjbkkbk
        </div>
      </div>
      <div className={style.containerStepDescription}>
        <div className={style.step}>
          <div className={style.containerImage}>
            <Image 
              src="/table.png"
              alt="Picture of the author"
              layout="responsive"
              width={1000}
              height={1000}
            />
          </div>
          <div className={style.stepName}>
            <div>step 1, step 1, step 1, step 1, step 1, step 1, step 1,</div> 
            <div>step 1, step 1, step 1, step 1, step 1, step 1, step 1</div>
          </div>
        </div>
        <div className={style.description}>
          dflkdlfk dlfkldkf dfdl;fk; dlfm;elmv ;efm;ec ;eflm;lemf; lmdlmlmlm dfdnfjb sghbd kbjkbf kfb kb kbjbjkbkb kjbkkbk
        </div>
      </div>
            <div className={style.step}>step 2</div>
            <div className={style.step}>step 3</div>
            <div className={style.step}>step 4</div>
            <div className={style.step}>step 5</div>
            <div className={style.step}>step 6</div>
    </div>
  )
}