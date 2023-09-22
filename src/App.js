import React, { useEffect, useState } from 'react';
import CreateTable from './Component/CreateTable';
import json from './Assets/Wine.json';

const ROW = [
  { type: 'measure', displayName: 'Measure' },
  { type: 'mean', displayName: 'item Mean' },
  { type: 'median', displayName: 'item Median' },
  { type: 'mode', displayName: 'item Mode' }
]

function App() {
  const [groupedData, setGroupedData] = useState(new Map());
  const [gammaData, setGammaData] = useState([]);

  useEffect(
    () => {
      setGroupedData(groupingOfData(json));
      insertingGamma()
    },
    []
  )

  //added gamma to the wineJson
  const insertingGamma = () => {
    const _json = [...json];
    const updatedJson = _json.map(item => (
      {
        ...item,
        gamma: ( item.Ash * item.Hue ) / item.Magnesium
      }
    ));
    setGammaData(groupingOfData(updatedJson));

  }
  //grouping of data on the basis of Alcohol
  const groupingOfData = ( json ) => {
    const data = new Map();
    for (const datum of json) {
      if (data.has(datum.Alcohol)) {
        const currentValue = data.get(datum.Alcohol);
        currentValue.push(datum);
        data.set(datum.Alcohol, currentValue);
      } else {
        data.set(datum.Alcohol, [datum])
      }
    }
    return data;
  }

  return (
    <div className="App">
      <div className='Flavanoids-table'>
        <CreateTable
          data={groupedData}
          itemKey={'Flavanoids'}
          row={ROW.map(item => (
            {
              ...item,
              displayName: item.displayName.replace('item', 'Flavanoids')
            } ))}
        />
      </div>
      <div className='gamma-table'>
        <CreateTable
          data={gammaData}
          itemKey={'gamma'}
          row={ROW.map(item => (
            {
              ...item,
              displayName: item.displayName.replace('item', 'Gamma')
            } ))}
        />
      </div>
    </div>
  );
}

export default App;


