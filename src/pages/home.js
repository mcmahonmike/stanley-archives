import React from "react";
import { DataTable, Box, Meter, Text, } from 'grommet'






export function Home() {
  return (
    <Box>
<DataTable
  columns={[
  {
    property: 'team',
    header: <Text>Team</Text>,
    primary: true,
  },
  {
    property: 'season',
    header: <Text>Season</Text>,
    primary: true,
  },
  {
    property: 'games_played',
    header: <Text>GP</Text>,
    primary: true,
  },
  {
    property: 'percent',
    header: 'Wins/Losses',
    render: datum => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter
          values={[{ value: datum.win }]}
          thickness='xsmall'
          size='xsmall'
          type="circle"
          max='15'
        />
      </Box>
    ),
  },
  ]}
  data={[
    { team: 'MTL', season: 'Mar' + 18, games_played: 15, win: 8 },
    { team: 'NSH', season: 'Mar' + 18, games_played: 15, win: 7 },
    { team: 'SJS', season: 'May' + 18, games_played: 15,  win: 5 },
    { team: 'EDM', season: 'May' + 18, games_played: 15, win: 10 },
  ]}
/>
</Box>
  )
}