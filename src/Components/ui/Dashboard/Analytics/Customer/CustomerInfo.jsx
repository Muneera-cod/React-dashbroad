import React from "react";
import profile from "../../../../../assets/userprofile.png";
import {
  IconMapPinFilled,
  IconMailFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import { CircularProgressbar } from "react-circular-progressbar";
import { data2 } from "../Datacustomer";
import { BarChart } from "@mantine/charts";
import "react-circular-progressbar/dist/styles.css";
import { Divider } from "@mantine/core";

function CustomerInfo() {
  const percentage = 66;
  const data = [
    { name: "BOTTOM", value: 20, color: "#FF0000" },
    { name: "Neutral", value: 20, color: "#FFA500" },
    { name: "AVERAGE", value: 20, color: "#FFFF00" },
    { name: "No comment", value: 20, color: "#7CFC00" },
    { name: "TOP", value: 20, color: "#008000" },
  ];
  return (
    <div className="basis-4/12 w-full h-full bg-white px-6 py-10 flex flex-col gap-14">
      <div className="basis-3/12 flex flex-col items-center p-5 justify-end">
        <img src={profile} className="w-16 h-16"></img>
        <p className="text-2xl text-gray-600 font-semibold">John Doe</p>
        <p className="text-sm text-gray-400">UI/UX Designer</p>
      </div>
      <Divider />
      <div className="basis-4/12 flex flex-col justify-end items-start">
        <p className="text-2xl flex-grow flex justify-end flex-col pb-3 text-gray-600 font-semibold">
          Contact Info
        </p>

        <div className="gap-5 pt-5 flex-1 flex flex-col  w-full">
          <div className="flex gap-2 items-center text-gray-400 hover:text-gray-600">
            <IconMailFilled />
            <p className="text-sm">kajope5182@ummoh.com</p>
          </div>
          <Divider />
        </div>

        <div className="gap-5 pt-5 flex-1 flex flex-col w-full ">
          <div className="flex gap-2 items-center text-gray-400 hover:text-gray-600">
            <IconPhoneFilled />
            <p className="text-sm">98765442526</p>
          </div>
          <Divider />
        </div>
        <div className="gap-5 pt-5 flex-1 flex flex-col  w-full">
          <div className="flex gap-2 items-center text-gray-400 hover:text-gray-600">
            <IconMapPinFilled />
            <p className="text-sm">2239 Hog Camp Road Schaumburg</p>
          </div>
          <Divider />
        </div>
      </div>
      <div className="basis-5/12 flex flex-col gap-5">
        <div className="basis-2/3 border-2 border-gray-50 flex items-center">
          <BarChart
            h={300}
            w={300}
            data={data2}
            dataKey="month"
            series={[
              { name: "Smartphones", color: "violet.6" },
              { name: "Laptops", color: "blue.6" },
              { name: "Tablets", color: "teal.6" },
            ]}
            tickLine="x"
            withXAxis={false}
          />
        </div>
        <div className="basis-1/3 flex gap-5">
          <div className="basis-1/2  border-2 border-gray-50 p-3">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
          <div className="basis-1/2 border-2 border-gray-50 p-3">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;