import React from "react";
import { 
  DataTable, 
  Box, 
  Meter, 
  Text, 
  TextInput, 
  Stack, 
  PageHeader, 
  Form, 
  FormField, 
  Button, 
} from 'grommet'
import { Edit } from "grommet-icons";


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
  {
  property: 'edit',
  header: null,
  primary: true,
  render: datum => (  <Button icon={<Edit />} onClick={()=>{}} /> ),
  },
  ]}
  data={[
    { team: 'MTL', season: 'Mar' + 18, games_played: 15, win: 8, theme: '#A6192E' },
    { team: 'NSH', season: 'Mar' + 18, games_played: 15, win: 7, theme: '#FBBD2C' },
    { team: 'SJS', season: 'May' + 18, games_played: 15,  win: 5, theme: '#006E7F' },
    { team: 'EDM', season: 'May' + 18, games_played: 15, win: 10, theme: '#FF4C00' },
  ]}
/>
<PageHeader title="ADD Season"/>
 <Form onSubmit={({ value }) => {}}>
      <FormField name="team" htmlFor="textinput-id" label="Team">
        <TextInput id="textinput-id" name="team" />
      </FormField>
      <FormField name="season" htmlFor="textinput-id" label="Season">
        <TextInput id="textinput-id" name="season" />
      </FormField>
      <FormField name="games_played" htmlFor="textinput-id" label="Games Played">
        <TextInput id="textinput-id" name="games_played" />
      </FormField>
      <FormField name="wins" htmlFor="textinput-id" label="Wins">
        <TextInput id="textinput-id" name="wins" />
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
      </Box>
    </Form> 
</Box>
  )
}