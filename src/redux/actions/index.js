import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { params } from "../../utils/constants";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  //api'dan Türkiye üzerindeki uçuş verilerini al

  const res = await api.get("/flights/list-in-boundary", { params });

  // api'dan gelen veriyi formatla
  // Dizi içerisindeki dizileri nesnelere çevirelim
  // [[],[],[],[]]  ===> [{},{},{}]
  const formatted = res.data.aircraft.map((i) => ({
    flightId: i[0],
    callsign: i[1],
    lat: i[2],
    lon: i[3],
    direction: i[4],
    altitude: i[5],
    speed: i[6],
  }));

  return formatted;
});

export const getDetails = createAsyncThunk(
  "flight/getDetails",
  async (flight) => {
    // api isteği at
    const res = await api.get("/flights/detail", { params: { flight } });

    // Aksiyonun payload'ını belirli
    return res.data;
  }
);
