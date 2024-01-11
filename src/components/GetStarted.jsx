import styles from "../style";
import { arrowUp } from "../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gray-800">Get</span>
        </p>
        {/* <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" /> */}
        <FontAwesomeIcon
          icon={faArrowUp}
          alt="menu"
          color="white"
          className="w-[23px] h-[23px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gray-800">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
