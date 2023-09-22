import React from 'react';
import { getMean, getMedian, getMode } from '../lib/Utils'
import './CreateTable.css'

const CreateTable = ( props ) => {
  const { data, itemKey, row } = props;

  if (!data) return null;

  return (
    <div className='table-container'>
      <div className='side-data'>
        {
          row.map(( data, ) => <div className={'side-data-items'} key={data.type}>{data.displayName}</div>)
        }
      </div>
      <table>
        <thead>
        <tr>
          {
            Array
              .from({ length: data.size })
              .map(( _, i ) => <th>Class {i + 1}</th>)
          }
        </tr>
        </thead>
        <tbody>
        <Row
          data={Array.from(data.values())}
          calculate={getMean}
          itemKey={itemKey}
        />
        <Row
          data={Array.from(data.values())}
          calculate={getMedian}
          itemKey={itemKey}
        />
        <Row
          data={Array.from(data.values())}
          calculate={getMode}
          itemKey={itemKey}
        />
        </tbody>
      </table>
    </div>
  )
}
export default CreateTable


/**
 * showing row
 * @param {array} data
 * @param{function} calculate
 * @param{string} itemKey
 */
function Row( { data, calculate, itemKey } ) {
  return (
    <tr>
      {
        data.map(value => {
            const items = value.map(v => Number(v[itemKey]));
            return <td>{calculate(items)}</td>;
          }
        )
      }
    </tr>
  );
}
