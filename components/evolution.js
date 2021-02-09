/* https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj */

import style from './evolution.module.css'
import Image from 'next/image'


export default function Evolution() {
  
  return (
    <div className={style.containerSteps}>
      <div className={style.stepFirst}>
        <div className={style.containerImageIntroduction}>
          <div className={style.containerImage}>
            <Image 
              src="/chelovek-drevnego-mira-first-step.jpg"
              alt="Picture of the author"
              layout="responsive"
              width={120}
              height={90}
            />
          </div>
          <div className={style.containerIntroduction}>
            <div className={style.headerStep}>
              Here is point to START self evolution
            </div> 
            <div className={style.introductionStep}>
              <div>Follow all parts of this section for survival in English speaker world</div>
              <div>- essential vocabulary</div>
              <div>- essential grammar</div>
              <div>- essential common phrase</div>
              <div>- and of cause irregular verb</div>
            </div>
          </div>
        </div>
        <div className={style.descriptionStep}>
          You can take a test to see how ready you are to take this part of evolution. 
          But highly recommended follow all parts of this section. 
          It's a base your knowledge.
          A solid base will give you power in the next steps of evolution
        </div>
      </div>   
      <div className={style.stepSecond}>
        <div className={style.containerImageIntroduction}>
          <div className={style.containerImageSecond}>
            <Image 
              src="/second.webp"
              alt="Picture of the author"
              layout="responsive"
              width={300}
              height={160}
            />
          </div>
          <div className={style.containerIntroduction}>
            <div className={style.headerStep}>
              Here is point to ENJOY self evolution
            </div> 
            <div className={style.introductionStep}>
              <div>Follow all parts of this section to enjoy learning English</div>
              <div>- vocabulary</div>
              <div>- grammar</div>
              <div>- common phrase</div>
              <div>- and stable expressions</div>
            </div>
          </div>
        </div>
        <div className={style.descriptionStep}>
        This is a huge part of your learning curve. 
        You can do a lot in English, such as reading, writing, speaking and listening.
        You will learn a lot here to make your English clear and understandable.
        </div>
      </div>  
      <div className={style.stepThird}>
        <div className={style.containerImageIntroduction}>
          <div className={style.containerImageThird}>
            <Image 
              src="/third.jpeg"
              alt="Picture of the author"
              layout="responsive"
              width={300}
              height={200}
            />
          </div>
          <div className={style.containerIntroduction}>
            <div className={style.headerStep}>
              Here is point to PROUD self evolution
            </div> 
            <div className={style.introductionStep}>
              <div>Follow all parts of this section for know English better than native speakers</div>
              <div>- advance grammar</div>
              <div>- idioms</div>
              <div>- complicated tests</div>
            </div>
          </div>
        </div>
        <div className={style.descriptionStep}>
        Did you know that most native speakers don't understand grammar rules? 
        After completing this part, you can explain grammar to native speakers. 
        Don't believe me? Go on ....
        </div>
      </div>    
    </div>
  )
}