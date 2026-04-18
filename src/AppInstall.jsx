import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle
} from "recharts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import appData from "./data/appData";

  import { ToastContainer, toast } from 'react-toastify';








export default function AppInstall() {
  const { id } = useParams();
  const app = appData.find(a => a.id === Number(id));
const [installed, setInstalled] = useState(false);
const notify = () => toast("Wow so easy!");
  if (!app) {
    return (
      <>
        <Header />
        <p className="text-center text-red-500 py-10">App not found</p>
        <Footer />
      </>
    );
  }

// chart data
  const data = [...app.ratings].sort((a, b) => {
 
  return parseInt(b.name) - parseInt(a.name);
}).map(rating => ({
  name: rating.name,
  value: rating.count
}));

  //Custom shape for interactive bars

  const MyCustomShape = (props) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => setIsActive(curr => !curr);
    const fill = isActive ? "#82ca9d" : "#8884d8";
    return <Rectangle {...props} onClick={handleClick} fill={fill} />;
  };

  return (
    <>
      <Header />

      <section className="py-10 bg-gray-100 shadow-md">
        <div className="max-w-4xl flex items-start container rounded-lg p-6 text-center">
          <div className="flex">
            <img
              src={app.image}
              alt={app.title}
              className="w-62 h-62 mx-auto mb-4 rounded object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-black">{app.title}</h1>
              <p className="text-gray-500">Developed By {app.companyName}</p>
              <hr className="text-gray-400 ml-7 mt-2 w-lg" />

              <div className="flex gap-7 justify-between items-center my-4">
                <p className="text-green-700 text-center p-2">
                  <img className="mx-auto" src="/assets/icon-downloads.png" alt="" />
                  <h1 className="text-black">Downloads</h1>
                  <span className="text-black text-2xl font-bold">
                    {(app.downloads / 1000000).toFixed(1)}M
                  </span>
                </p>
                <p>
                  <img className="mx-auto" src="/assets/icon-ratings.png" alt="" />
                  <h1 className="text-black">Average Rating</h1>
                  <span className="text-black text-2xl font-bold">{app.ratingAvg}</span>
                </p>
                <p>
                  <img className="mx-auto" src="/assets/icon-review.png" alt="" />
                  <h1 className="text-black">Reviews</h1>
                  <span className="text-black text-2xl font-bold">{app.reviews}</span>
                </p>
              </div>

              <div className="items-start flex ml-3">
                <button className="btn bg-[#00d390] text-white border-none"   disabled={installed} onClick={() => {
                  
    setInstalled(true);
    // Show toast
    <ToastContainer />
    toast.success("App installed successfully!");
  }}
>
  {installed ? "Installed" : "Install Now"}
                <ToastContainer autoClose={1000} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="text-gray-400 ml-[11em] mt-2 w-3xl" />
      </section>
<section className="bg-gray-100">
{/*  Chart section */}
      <div className="container " style={{ width: "100%", height: 300 }}>
  <ResponsiveContainer>
    <BarChart
      data={data}
      layout="vertical"   // 🔑 this makes bars horizontal
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      {/* XAxis becomes the value axis */}
      <XAxis type="number" />
      {/* YAxis shows categories (star ratings) */}
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Bar
        dataKey="value"
        fill="#ff9933"  
      />
    </BarChart>
  </ResponsiveContainer>
</div>

</section>
      <section className="bg-gray-100 py-10">
        <h1 className="text-black text-xl py-10 font-bold container">Description</h1> 
        <p className="container text-gray-400">
         
This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.

A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.

For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
        </p>
      </section>

      <Footer />
    </>
  );
}
