import { useEffect, useState } from "react";

import { DataGrid } from '@mui/x-data-grid';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';

import Description from "./description/description";
import Photo from "./photo/photo";
import Name from "./name/name";
import Wiki from "./wiki/wiki";
import useMarvelService from "../../services/MarvelService";

const HeroCards = () => {

  const [charList, setCharList] = useState([]);
  const { getAllCharacters } = useMarvelService();

  const onRequest = () => {
    getAllCharacters()
      .then(onCharListLoaded)
  }

  const onCharListLoaded = (newCharList) => {
    setCharList([...newCharList]);
  }

  useEffect(() => {
    onRequest()
    // eslint-disable-next-line
  }, [])
  
  const columns = [
    { 
      field: 'id', 
      headerName: 'id', 
      width: 90 
    },
    { 
      field: 'heroImg', 
      headerName: 'Photo', 
      width: 150, 
      renderCell: params => <Photo src={params.row.heroImg}/>, 
      sortable: false, 
      filterable: false,
    },
    { 
      field: 'heroName', 
      headerName: 'Name', 
      width: 300,
      renderCell: params => <Name name={params.row.heroName}/>,
    },
    { 
      field: 'heroDescription', 
      headerName: 'Description', 
      width: 500,
      renderCell: params => <Description description={params.row.heroDescription}/>,
    },
    { 
      field: 'heroWiki', 
      headerName: 'Wiki', 
      width: 100, 
      renderCell: params => <Wiki link={params.row.heroWiki}/>, 
      sortable: false, 
      filterable: false,
    },
  ]
  
  const rows = charList.map(item => {
    return {
      id: item.id,
      heroImg: item.thumbnail,
      heroName: item.name,
      heroDescription: item.description,
      heroWiki: item.wiki,
    }
  })

  return (
    <Box
      sx={{
        height: 600,
        width: '100%'
      }}
    >
      <Typography
        variant="h2"
        component="h2"
      >
        Your heroes
      </Typography>
      <DataGrid
        columns={columns}
        rows={rows}
        getRowId={(row) => row.id}
      />
    </Box>
  )
}

export default HeroCards;