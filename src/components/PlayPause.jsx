import { FaPauseCircle , FaPlayCircle } from 'react-icons/fa'


{/*If current song is playing show pause circle
   else show play circle */}
const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (
  isPlaying && activeSong?.title === song.title ? (
    
    <FaPauseCircle
    size={35}
    className='text-gray-300'
    onClick={handlePause}/>
  )  : (

    <FaPlayCircle
    size={35}
    className='text-gray-300'
    onClick={handlePlay}/>
  )
);

export default PlayPause;
