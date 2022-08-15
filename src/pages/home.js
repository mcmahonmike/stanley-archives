import React from "react";
import { DataTable, Box, Meter, Text, Stack, PageHeader, } from 'grommet'


export function Home() {
  return (
    <Box>
      <PageHeader title="SEASON Stats"/>
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
    header: 'Wins/Losses',
    render: datum => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Stack anchor="center" guidingChild="last" alignSelf="center">
          <Text weight="bold" size="medium" values={[{ value: datum.win }]} > 
          {datum.win}
          </Text>
        <Meter
          values={[{ value: datum.win, color: datum.theme }]}
          thickness='xsmall'
          size='xsmall'
          type="circle"
          max='15'
        />
        </Stack>
      </Box>
    ),
  },
  ]}
  data={[
    { team: 'MTL', season: 'Mar' + 18, games_played: 15, win: 8, theme: '#A6192E' },
    { team: 'NSH', season: 'Mar' + 18, games_played: 15, win: 7, theme: '#FBBD2C' },
    { team: 'SJS', season: 'May' + 18, games_played: 15,  win: 5, theme: '#006E7F' },
    { team: 'EDM', season: 'May' + 18, games_played: 15, win: 10, theme: '#FF4C00' },
  ]}
/>
</Box>
  )
}