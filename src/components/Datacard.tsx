'use client'
import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { RiSettings3Fill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";
import Link from "next/link";

import { useState, useEffect } from 'react';
import client from '../mqtt/mqtt';


const Datacard = ({data}:{data:any}) => {
  const {name,slug,unit} = data;
    const [message, setMessage] = useState<string>('');
  
    useEffect(() => {
      let topic = slug;
  
      client.subscribe(topic, (err) => {
        if (err) {
          console.error('Subscription error: ', err);
        }
      });
  
      client.on('message', (topicReceived, payload) => {
        if (topicReceived === topic) {
          setMessage(payload.toString());
        }
      });
  
      return () => {
        client.unsubscribe(topic);
      };
    }, []);
    

  return (
    <div>
      <Card className="m-4">
        <CardContent>
          <div className="flex justify-between items-center align-middle">
            <p className="font-semibold text-4xl text-[#425282]">{message}</p>
            <p className="font-normal text-xl text-[#425282] mr-2">{unit}</p>
          </div>
        </CardContent>
        <CardFooter className="border-t-2 flex justify-between items-center align-middle">
            <h3 className="font-medium text-2xl text-black">{name}</h3>
            <div className="flex gap-2">
            <Link href={`/graph/${slug}`} className="text-xl border rounded-xl p-2">
            <FaChartLine />
            </Link>
            {slug == "cstr-temp" && <Link href={""} className="text-xl border rounded-xl p-2">
            <RiSettings3Fill />
            </Link>}
            </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Datacard;
