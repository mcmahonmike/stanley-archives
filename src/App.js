import React, { useState } from 'react';
import { Home } from './pages/home';
import { Stats } from './pages/stats';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext, Tip } from 'grommet'
import { FormClose, PieChart } from 'grommet-icons';

const theme = {
  global: {
    colors:{
      brand:'#F8F0E3',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar=(props) => (
  <Box
  tag='header'
  direction='row'
  align='center'
  justify='between'
  background='brand'
  pad={{ left: 'medium', right: 'small', vertical: 'small' }}
  elevation='medium'
  style={{ zIndex: '1' }}
  {...props}
/>
)

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} full>
 <ResponsiveContext.Consumer>
   {size => (
      <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>Archives</Heading>
          <Box pad="small">
          <Tip content="TEAM Stats">
          <Button
            icon={<PieChart />}
            onClick={() => setShowSidebar(!showSidebar)}
          />
              </Tip>
              </Box>
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            <Home />
          </Box>
          {(!showSidebar || size !== 'small') ? (
           <Collapsible direction="horizontal" open={showSidebar}>
              <Box
                flex
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
              >
                <Stats />
              </Box>
            </Collapsible>
            ): (
              <Layer>
                <Box
                background='light-2'
                tag='header'
                justify='end'
                align='center'
                direction='row'
                >
                  <Button
                  icon={<FormClose />}
                  onClick={() => setShowSidebar(false)}
                  />
                </Box>
                <Box
                fill
                background='light-2'
                align='center'
                justify='center'
                > sidebar
                </Box>
              </Layer>
         )}
        </Box>
      </Box>
   )}
 </ResponsiveContext.Consumer>
</Grommet>
  )
}

export default App;
