
import Datacard from "@/components/Datacard";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-between align-middle">
      <div className="flex-col w-2/4">
        <h2 className="flex justify-center text-center font-medium bg-amber-100 rounded-full mx-10">
          Anerobic CSTR
        </h2>
        <div className="flex space-x-4">
          <div className="flex-col justify-between align-middle w-1/2">
            <Datacard data={{"name": "PH", "slug": "cstr-ph", "unit": "/14"}} />
            <Datacard data={{"name": "ORP", "slug": "cstr-orp", "unit": "mV"}}  />
            <Datacard data={{"name": "EC", "slug": "cstr-ec", "unit": "mS/Cm"}}  />
            
          </div>
          <div className="flex-col justify-between align-middle w-1/2">
          <Datacard data={{"name": "TDS", "slug": "cstr-tds", "unit": "ppm"}}  />
            <Datacard data={{"name": "Temp", "slug": "cstr-temp", "unit": "°C"}} />
            <Datacard data={{"name": "Level", "slug": "cstr-level", "unit": "mL"}} />
          </div>
        </div>
      </div>
      <div className="flex-col space-y-4 w-1/4">
        <h2 className="flex justify-center text-center font-medium bg-amber-100 rounded-full mx-10">
          Membrane Tank
        </h2>
        <div className="flex-col space-y-2">
          <Datacard data={{"name": "Temp", "slug": "mtank-temp", "unit": "°C"}} />
          <Datacard data={{"name": "Level", "slug": "mtank-level", "unit": "mL"}} />
          <Datacard data={{"name": "Weight", "slug": "mtank-weight", "unit": "Kg"}} />
        </div>
      </div>
      <div className="flex-col space-y-4 w-1/4">
        <h2 className="flex justify-center text-center font-medium bg-amber-100 rounded-full mx-10">
          Effluent
        </h2>
        <div className="flex-col space-y-2">
        <Datacard data={{"name": "Level", "slug": "effluent-level", "value": 0.21, "unit": "mL"}} />
        <Datacard data={{"name": "Weight", "slug": "effluent-weight", "value": 4, "unit": "Kg"}} />
        <Datacard data={{"name": "Flux", "slug": "e-flux", "value": 0.12, "unit": "LMH"}} />
        </div>
      </div>
    </div>
  );
};

export default page;
