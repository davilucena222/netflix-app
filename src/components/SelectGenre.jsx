import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { fetchDataByGenre } from "../store";

export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();

  return (
    <Select className="flex" onChange={(event) => {
      dispatch(fetchDataByGenre({ genre: event.target.value, type }))
    }}>
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        )
      })}
    </Select>
  );
}

const Select = styled.select``;