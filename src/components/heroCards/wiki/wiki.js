import Button from '@mui/material/Button';

import './wiki.scss'

const Wiki = (props) => {
  return (
    <a href={props.link} className="wiki">
      <Button variant="contained">
        To Wiki
      </Button>
    </a>
  )
}

export default Wiki;