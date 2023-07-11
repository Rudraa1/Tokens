import styles from '../style';
import {feedback} from '../constants';
import FeedbackCard from './FeedBackCard';

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute w-[60%] h-[60%] -right-[50%] z-[0] rounded-full blue__gradient'/>
      <div className='w-full flex item-center justify-between md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>
          What people are <br className='sm:block hidden'/>
          saying about us
        </h1>

        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            slknfsdnc n lknslnslnclsdnc klnsldvnsv
            lsknvslknvslnvslvnsv
            svnsvlksnvlsnkvnslvnslnslbnslbsnnsvsm
          </p>
        </div>

      </div>

      <div className='flex flex-wrap sm:justiy-start justify-center w-full feedback-container relative z-[1] '>
        {feedback.map((card) => (
          <FeedbackCard id={card.id} {...card}/>
        ))}

      </div>
      
    </section>
  )
}

export default Testimonials
