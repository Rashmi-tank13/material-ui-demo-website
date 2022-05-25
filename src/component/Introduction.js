import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Introduction = () => {
  return (
    <>
      <Typography mt='20px'>Material UI is the most powerful and efficient tool to build an Application by adding Designs and Animations and using it with technical and scientific innovation.
        <br /> It is basically a design language that was developed by Google in 2014.
        <br /> There are some basic components , like :-</Typography>

      <Stack spacing={2} direction="row" mt='50px' ml='100px'>
        <Button variant="outlined">Radio Button</Button>
        <Button variant="outlined">Checkbox</Button>
        <Button variant="outlined">Select</Button>
        <Button variant="outlined">Textfield</Button>
        <Button variant="outlined">Toggle button</Button>
        <Button variant="outlined">Avtar</Button>
        <Button variant="outlined">Table</Button>
        <Button variant="outlined">Tooltip</Button>
      </Stack><br />
      <Stack spacing={2} direction="row" mt='20px' ml='100px'>
        <Button variant="outlined">List</Button>
        <Button variant="outlined">Alert</Button>
        <Button variant="outlined">Skeleton</Button>
        <Button variant="outlined">Link</Button>
        <Button variant="outlined">Stack</Button>
        <Button variant="outlined">ImageList</Button>
        <Button variant="outlined">Box</Button>
        <Button variant="outlined">Container</Button>
        <Button variant="outlined">Typography</Button>
      </Stack>

    <Typography mt='20px'>Now we can discuss about important components.</Typography>

    </>
  )
}

export default Introduction