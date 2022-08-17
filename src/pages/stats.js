import React from "react";
import { PageHeader, Box, Avatar, Table, TableBody, TableCell, TableRow, Menu } from 'grommet'




export function Stats() {
    return (
        <Box>
        <PageHeader
        title="TEAM Stats" />
        <Box direction="row"  gap="small">
        <Table>
        <TableBody>
    <TableRow>
      <TableCell scope="row">
      <Avatar src="https://www.logosurfer.com/wp-content/uploads/2018/03/montreal-canadiens-logo_0.png" />
      </TableCell>
      <Menu
        label="Canadiens"
        items={[
            { label: 'Home Stats', onClick: () => {} },
            { label: 'Away Stats', onClick: () => {} },
        ]}
        />
    </TableRow>
    <TableRow>
      <TableCell scope="row">
      <Avatar src="https://www.logosurfer.com/wp-content/uploads/2018/03/nashville-predators-logo_0.gif"/>
      </TableCell>
      <Menu
        label="Predators"
        items={[
            { label: 'Home Stats', onClick: () => {} },
            { label: 'Away Stats', onClick: () => {} },
        ]}
        />
    </TableRow>
    <TableRow>
      <TableCell scope="row">
      <Avatar src="https://www.logosurfer.com/wp-content/uploads/2018/03/san-jose-sharks-logo_0.png"/>
      </TableCell>
      <Menu
        label="Sharks"
        items={[
            { label: 'Home Stats', onClick: () => {} },
            { label: 'Away Stats', onClick: () => {} },
        ]}
        />
    </TableRow>
    <TableRow>
      <TableCell scope="row">
      <Avatar src="https://www.logosurfer.com/wp-content/uploads/2018/03/edmonton-oilers-logo_0.png"/>
      </TableCell>
      <Menu
        label="Oilers"
        items={[
            { label: 'Home Stats', onClick: () => {} },
            { label: 'Away Stats', onClick: () => {} },
        ]}
        />
    </TableRow>
  </TableBody>
</Table>
        </Box>
        </Box>
        
    )
}