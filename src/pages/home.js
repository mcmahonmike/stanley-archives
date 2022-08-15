import React from "react";
import { DataTable, Box, Meter, Text, Stack, } from 'grommet'






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
    property: 'win',
    header: 'Wins',
    render: datum => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Stack anchor="center" guidingChild="last" alignSelf="center">
          <Text weight="bold" size="medium" values={[{ value: datum.win }]} > 
          {datum.win}
          </Text>
        <Meter
          values={[{ value: datum.win }]}
          thickness='xsmall'
          size='xsmall'
          type="semicircle"
          max='15'
        />
        </Stack>
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