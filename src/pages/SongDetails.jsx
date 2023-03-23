import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

const SongDetails = () => {

    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({songid})
    console.log(songid);

    return(
        <div className="flex flex-col">
            {/* <DetailsHeader artistId={artistId} songData={songData}/> */}

            <div className="mb-10">
                <h2 className="text-white text-3x1 font-bold">
                    Lyrics:
                </h2>

                {/* If lyrics exist map over them else display sorry message */}
                <div className="mt-5">
                    {songData?.sections[1].type === 'LYRICS'
                    ? songData?.sections[1].text.map((line, i) =>(
                        <p className="text-gray-400 text-base my-1">{line}</p>
                    )) : <p className="text-gray-400 text-base my-1">Sorry, no lyrics found!</p> }
                </div>
            </div>
        </div>
    )
}

export default SongDetails;
