import { BsCloudHazeFill, BsCloudRainFill, BsCloudsFill, BsFillCloudDrizzleFill, BsFillSunFill, BsSnow } from 'react-icons/bs';
import {WiThunderstorm} from 'react-icons/wi'
import {RiMistFill} from 'react-icons/ri'

export const icons = {
  Clouds: <BsCloudsFill size={30} className='m-4 flex mx-auto'/>,
  Rain : <BsCloudRainFill size={30} className='m-4 flex mx-auto'/>,
  Clear : <BsFillSunFill size={30} className='m-4 flex mx-auto'/>,
  Drizzle: <BsFillCloudDrizzleFill size={30} className='m-4 flex mx-auto'/>,
  Thunderstorm : <WiThunderstorm size={30} className='m-4 flex mx-auto'/> ,
  Snow : <BsSnow size={30} className='m-4 flex mx-auto'/>,
  Mist : <RiMistFill size={30} className='m-4 flex mx-auto'/>,
  Haze : <BsCloudHazeFill size={30} className='m-4 flex mx-auto'/>
};
