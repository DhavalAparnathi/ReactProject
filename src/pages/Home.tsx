import React from "react";
import ReactDOM from "react-dom";
import DataTable, { TableColumn } from "react-data-table-component";
import { Card } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import movies from "../assets/movies";

type Movie = {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
};

type Selector<T> = (row: T) => string;

const columns: TableColumn<Movie>[] = [
  {
    name: "Title",
    selector: (row: Movie) => row.title,
    sortable: true
  },
  {
    name: "Director",
    selector: (row: Movie) => row.director,
    sortable: true
  },
  {
    name: "Actor",
    selector: (row: Movie) => row.actors,
    sortable: true
  },
  {
    name: "Runtime (m)",
    selector: (row: Movie) => row.runtime,
    sortable: true,
    right: true
  }
];

export const Home: React.FC = () => {
  return (
    <div className="App">
      <Card>
        <DataTable
          title="Movies"
          columns={columns}
          data={movies}
          defaultSortFieldId="title"
          sortIcon={<SortIcon />}
          pagination
          selectableRows
        />
      </Card>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
