import React from 'react'

const page = ({ params }: { params: { sensor: string } }) => {
  return (
    <div>{params.sensor}</div>
  )
}

export default page