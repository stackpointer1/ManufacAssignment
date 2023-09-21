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
        {
          Array.from(data.values()).map(value => {
              const flavanoids = value.map(v => Number(v[itemKey]));
              return (
                <tr>
                  <td>{getMean(flavanoids)}</td>
                  <td>{getMedian(flavanoids)}</td>
                  <td>{getMode(flavanoids).join(' ,')}</td>
                </tr>
              );
            }
          )
        }
        </tbody>
      </table>
    </div>
  )
}
export default CreateTable

