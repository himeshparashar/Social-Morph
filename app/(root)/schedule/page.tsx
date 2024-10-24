import React from "react";
import { ChevronDown, Plus } from "lucide-react";

type ScheduleItem = {
  day: string;
  time: string;
  category: string;
};

type StatisticsItem = {
  category: string;
  [key: string]: string;
};

const scheduleData: ScheduleItem[] = [
  { day: "TUESDAY", time: "08:28 PM", category: "Zero-Click Content" },
  { day: "WEDNESDAY", time: "06:13 PM", category: "Zero-Click Content" },
  { day: "THURSDAY", time: "09:19 PM", category: "Product Spotlight" },
  { day: "FRIDAY", time: "06:16 PM", category: "Weekly Blog Post" },
];

const statisticsData: StatisticsItem[] = [
  {
    category: "Zero-Click Content",
    tuesday: "1 / 100%",
    wednesday: "1 / 100%",
    total: "2 / 50%",
  },
  { category: "Product Spotlight", thursday: "1 / 100%", total: "1 / 25%" },
  { category: "Weekly Blog Post", friday: "1 / 100%", total: "1 / 25%" },
];

const days = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

export default function ContentScheduler() {
  return (
    <div className="container mx-auto p-4 font-sans">
      <h1 className="text-2xl font-bold mb-2">Schedule Setup</h1>
      <p className="text-sm text-gray-600 mb-4">
        This is how your categories are scheduled. Looks good? If not, just
        change it!
      </p>

      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            ≡ Compact View
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
            Calendar View
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
            Category Sequence
          </button>
        </div>
        <div className="flex space-x-2">
          <div className="relative">
            <select className="appearance-none bg-white border rounded px-4 py-2 pr-8">
              <option>Categories: Showing All</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border rounded px-4 py-2 pr-8">
              <option>Social Profiles: @SocialMorph</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-8">
        {days.map((day) => (
          <div key={day} className="border rounded p-2">
            <h3 className="font-bold mb-2">{day}</h3>
            {scheduleData.find((item) => item.day === day) ? (
              scheduleData
                .filter((item) => item.day === day)
                .map((item, index) => (
                  <div key={index} className="bg-white border rounded p-2 mb-2">
                    <p className="text-xs text-gray-600">{item.time}</p>
                    <p className="text-sm">{item.category}</p>
                  </div>
                ))
            ) : (
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded">
                <Plus className="inline mr-1" size={16} />
                Add Posting Time
              </button>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-2">Schedule Statistics</h2>
      <p className="text-sm text-gray-600 mb-4">
        Get a better idea of how many times a category has been scheduled per
        day or per week, in numbers and a percentage of the total!
      </p>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="border p-2 text-left">CATEGORY</th>
            {days.map((day) => (
              <th key={day} className="border p-2 text-left">
                {day}
              </th>
            ))}
            <th className="border p-2 text-left">TOTAL PER WEEK</th>
          </tr>
        </thead>
        <tbody>
          {statisticsData.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="border p-2">{row.category}</td>
              {days.map((day) => (
                <td key={day} className="border p-2">
                  {row[day.toLowerCase()] || "-"}
                </td>
              ))}
              <td className="border p-2">{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
