import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const { data: { genres } } = await axios.get(`${process.env.REACT_APP_TMDB_BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}`);

  return genres;
});

const createArrayFromRawData = (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);

      if (name) {
        movieGenres.push(name.name);
      };
    });

    if (movie.backdrop_path) {
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3)
      })
    }
  });
};

const getRawData = async (api, genres, paging) => {
  const moviesArray = [];

  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const { data: { results } } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    createArrayFromRawData(results, moviesArray, genres);
  }
  
  return moviesArray;
};

export const fetchDataByGenre = createAsyncThunk("netflix/moviesByGenres", async({ genre, type }, thunkAPI) => {
  console.log("In fetching data!", genre, type);

  const { netflix: { genres } } = thunkAPI.getState();

  const data = getRawData(`${process.env.REACT_APP_TMDB_BASE_URL}/discover/${type}/?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=${genre}`, genres);
  console.log(data);

  return data;
});

export const fetchMovies = createAsyncThunk("netflix/tranding", async({ type }, thunkAPI) => {
  const { netflix: { genres }} = thunkAPI.getState();

  return getRawData(`${process.env.REACT_APP_TMDB_BASE_URL}/trending/${type}/week?api_key=${process.env.REACT_APP_API_KEY_TMDB}`, genres, true);
});

const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });

    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });

    builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  }
});