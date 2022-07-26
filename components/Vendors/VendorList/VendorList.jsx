import React from 'react'
import Vendor from '../Vendor/Vendor'

export default function VendorList () {
  return (
    <div className='row'>
      {VendorList.map(vendor => (
        <Vendor />
      ))}
    </div>
  )
}
