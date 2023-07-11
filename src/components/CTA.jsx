import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-col flex flex-1'>

        <h2 className={`${styles.heading2}`}>
          Let's try our service now!
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          laebnfae alienhflseihnfc liaehfnjaefc 
          akebfliasefb oibeafnlaf ioaefjnaf 
          kabeflinsecfnosfcj oihefoesf oiahefcnef. 
        </p>

      </div>
      
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button styles='mt-10'/>
      </div>
      
    </section>
  )
}

export default CTA
