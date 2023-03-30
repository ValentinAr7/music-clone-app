import { useEffect, useState } from "react";
import axios from 'axios'
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";

const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const [activeSong, isPlaying] = useSelector((state) => state.player)
}

useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_onSAfKI6Ney17onKt9oHyyt1fZYJV`)
    //at_onSAfKI6Ney17onKt9oHyyt1fZYJV
}, [country])

export default CountryTracks;
