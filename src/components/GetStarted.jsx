import styles from '../style';
import {arrowUp} from '../assets'


const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer  `}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full flex col `}>
        <div className={`${styles.flexCenter} `}>

          <p className='text-gradient font-poppins mr-2 font-medium font-[18px] leading-[23px]'>
            Get
          </p>

          <img src = {arrowUp} alt='arrowUp' className='w-[23px] h-[23px] object-contains'/>  
        </div>

        <p className='text-gradient font-poppins font-medium font-[18px] leading-[23px]'>
            Started
        </p>

      </div>
    </div>
  )
}

export default GetStarted
