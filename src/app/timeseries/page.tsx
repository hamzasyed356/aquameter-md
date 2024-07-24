import Graphcard from '@/components/Graphcard'
import React from 'react'

const data = [
  {"name": "PH", "slug": "ph"},
  {"name": "ORP", "slug": "orp"},
  {"name": "EC", "slug": "ec"},
  {"name": "TDS", "slug": "tds"},
  {"name": "CSTR Level", "slug": "cstrr-level"},
  {"name": "CSTR Temp", "slug": "cstr-temp"},
  {"name": "M-Tank Level", "slug": "m-level"},
  {"name": "M-Tank Temp", "slug": "m-temp"},
  {"name": "M-Tank Weight", "slug": "m-weight"},
  {"name": "Effluent Level", "slug": "e-level"},
  {"name": "Effluent Weight", "slug": "e-weight"},
  {"name": "Flux", "slug": "flux"},
]


const page = () => {


  return (
    <div className="grid grid-cols-3 gap-4 justify-between items-center">
        {data.map((items:any)=>(
            <Graphcard data={items} key={items.slug}/>
        ))}
    </div>
  )
}

export default page