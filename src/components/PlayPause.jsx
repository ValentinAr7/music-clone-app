import { FaPauseCircle , FaPlayCirle } from 'react-icons/fa'


{/*If current song is playing show pause circle
   else show play circle */}
const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (
  isPlaying && activeSong?.title === song.title ? (
    
    <FaPauseCircle/>
  )  : (

    <FaPlayCirle/>
  )
);

export default PlayPause;
