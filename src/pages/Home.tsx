import React from "react";
import Sidebar from "../components/Sidebar.tsx";
import Box from "@mui/material/Box";
import '../assets/Sidebar.css';
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";

import { Card } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";

import movies from "../assets/movies.jsx";

// import Card from "@material-ui/core/Card";
// import SortIcon from "@material-ui/icons/ArrowDownward";

const columns = [
  {
    name: "Title",
    selector: "title",
    sortable: true
  },
  {
    name: "Directior",
    selector: "director",
    sortable: true
  },
  {
    name: "Actor",
    selector: "actors",
    sortable: true
  },
  {
    name: "Runtime (m)",
    selector: "runtime",
    sortable: true,
    right: true
  }
];

export default function Home() {
  return (
    <div className="App">
      <Card>
        <DataTable
          title="Movies"
          columns={columns}
          data={movies}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          pagination
          selectableRows
        />
      </Card>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
