import React from 'react'
import styles, {layout} from '../style'
import {features} from '../constants'
import Button from './Button'

const FeatureCard = ({icon, title, index, content}) =>(
  <div className={`flex flex-row rounded-[20px] p-6 ${index !== features.length-1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[50%] y-[50%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)
const Business = () => {
  return (
    <section id='features' className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the Business, <br className='sm:block hidden'/>
        We'll handle the money
        </h2>

        <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>
          Hello there!kausbgfkbdjkzbcjksdabjkcbksd cabckasjcbkasdcnb oibacnloacik ioahsc
          kabclnsc kabcklbnsc lanclna
        </p>

        <Button styles = "mt-10 rounded"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index ={index}/>
        ))}
      </div>

      
    </section>
  )
}

export default Business

