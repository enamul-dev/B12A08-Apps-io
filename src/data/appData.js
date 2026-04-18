
const appData = [
  {
    "image": "/assets/demo-app1.webp",
    "title": "Forest: Focus for Productivity",
    "companyName": "Productive Labs",
    "id": 1,
    "description": "A smart task management app to organize your daily work efficiently.",
    "size": 25,
    "reviews": 1200,
    "ratingAvg": 4.5,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 50 },
      { "name": "2 star", "count": 70 },
      { "name": "3 star", "count": 180 },
      { "name": "4 star", "count": 400 },
      { "name": "5 star", "count": 500 }
    ]
  },
  {
    "image": "/assets/demo-app2.webp",
    "title": "SmPlan:ToDo List with Reminder",
    "companyName": "Healthify Inc",
    "id": 2,
    "description": "Track your workouts, calories, and health progress easily.",
    "size": 40,
    "reviews": 980,
    "ratingAvg": 4.3,
    "downloads": 30000,
    "ratings": [
      { "name": "1 star", "count": 40 },
      { "name": "2 star", "count": 60 },
      { "name": "3 star", "count": 200 },
      { "name": "4 star", "count": 350 },
      { "name": "5 star", "count": 330 }
    ]
  },
  {
    "image": "/assets/demo-app3.webp",
    "title": "FLIP - Focus Timer for Study",
    "companyName": "LearnTech",
    "id": 3,
    "description": "An online learning platform for coding and academic courses.",
    "size": 60,
    "reviews": 2100,
    "ratingAvg": 4.7,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 30 },
      { "name": "2 star", "count": 50 },
      { "name": "3 star", "count": 120 },
      { "name": "4 star", "count": 600 },
      { "name": "5 star", "count": 1300 }
    ]
  },
  {
    "image": "/assets/demo-app4.webp",
    "title": "Pomocat - Cute Pomodoro Timer",
    "companyName": "Pixel Studio",
    "id": 4,
    "description": "Edit your photos with powerful filters and tools.",
    "size": 35,
    "reviews": 800,
    "ratingAvg": 4.2,
    "downloads": 45000,
    "ratings": [
      { "name": "1 star", "count": 60 },
      { "name": "2 star", "count": 90 },
      { "name": "3 star", "count": 150 },
      { "name": "4 star", "count": 300 },
      { "name": "5 star", "count": 200 }
    ]
  },
  {
    "image": "/assets/demo-app5.webp",
    "title": "Time Planner: Schedule & Tasks",
    "companyName": "SoundWave",
    "id": 5,
    "description": "Stream and download your favorite songs anytime.",
    "size": 55,
    "reviews": 3200,
    "ratingAvg": 4.6,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 100 },
      { "name": "2 star", "count": 120 },
      { "name": "3 star", "count": 300 },
      { "name": "4 star", "count": 900 },
      { "name": "5 star", "count": 1780 }
    ]
  },
  {
    "image": "/assets/demo-app6.webp",
    "title": "Morning Habits - Daily Routine",
    "companyName": "Wander Corp",
    "id": 6,
    "description": "Plan your trips and discover amazing destinations.",
    "size": 45,
    "reviews": 670,
    "ratingAvg": 4.1,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 40 },
      { "name": "2 star", "count": 80 },
      { "name": "3 star", "count": 200 },
      { "name": "4 star", "count": 220 },
      { "name": "5 star", "count": 130 }
    ]
  },
  {
    "image": "/assets/demo-app4.webp",
    "title": "Focus Plant: Pomodoro Forest",
    "companyName": "FinanceHub",
    "id": 7,
    "description": "Manage your expenses and track your savings goals.",
    "size": 20,
    "reviews": 540,
    "ratingAvg": 4.4,
    "downloads": 20000,
    "ratings": [
      { "name": "1 star", "count": 30 },
      { "name": "2 star", "count": 40 },
      { "name": "3 star", "count": 100 },
      { "name": "4 star", "count": 200 },
      { "name": "5 star", "count": 170 }
    ]
  },
  {
   "image": "/assets/demo-app1.webp",
    "title": "Alarmy - Alarm Clock & Sleep",
    "companyName": "FunPlay",
    "id": 8,
    "description": "Enjoy a collection of exciting arcade games.",
    "size": 70,
    "reviews": 1500,
    "ratingAvg": 4.0,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 150 },
      { "name": "2 star", "count": 200 },
      { "name": "3 star", "count": 400 },
      { "name": "4 star", "count": 450 },
      { "name": "5 star", "count": 300 }
    ]
  },
  {
    "image": "/assets/demo-app1.webp",
    "title": "NewsNow",
    "companyName": "Daily Media",
    "id": 9,
    "description": "Stay updated with the latest global news.",
    "size": 30,
    "reviews": 900,
    "ratingAvg": 4.3,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 50 },
      { "name": "2 star", "count": 70 },
      { "name": "3 star", "count": 200 },
      { "name": "4 star", "count": 300 },
      { "name": "5 star", "count": 280 }
    ]
  },
  {
    "image": "/assets/demo-app3.webp",
    "title": "WeatherPro",
    "companyName": "SkyTech",
    "id": 10,
    "description": "Accurate weather forecasts and alerts.",
    "size": 18,
    "reviews": 1100,
    "ratingAvg": 4.5,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 40 },
      { "name": "2 star", "count": 60 },
      { "name": "3 star", "count": 150 },
      { "name": "4 star", "count": 400 },
      { "name": "5 star", "count": 450 }
    ]
  },
  {
    "image": "/assets/demo-app3.webp",
    "title": "ChatSphere",
    "companyName": "Connect Inc",
    "id": 11,
    "description": "A fast and secure messaging platform.",
    "size": 28,
    "reviews": 2200,
    "ratingAvg": 4.6,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 70 },
      { "name": "2 star", "count": 100 },
      { "name": "3 star", "count": 300 },
      { "name": "4 star", "count": 700 },
      { "name": "5 star", "count": 1030 }
    ]
  },
  {
    "image": "/assets/demo-app4.webp",
    "title": "NoteKeeper",
    "companyName": "WriteWell",
    "id": 12,
    "description": "Take notes and organize your ideas efficiently.",
    "size": 15,
    "reviews": 400,
    "ratingAvg": 4.2,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 20 },
      { "name": "2 star", "count": 30 },
      { "name": "3 star", "count": 80 },
      { "name": "4 star", "count": 150 },
      { "name": "5 star", "count": 120 }
    ]
  },
  {
    "image": "/assets/demo-app5.webp",
    "title": "ShopEasy",
    "companyName": "Retail Hub",
    "id": 13,
    "description": "An online shopping app with great deals.",
    "size": 50,
    "reviews": 2700,
    "ratingAvg": 4.4,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 120 },
      { "name": "2 star", "count": 150 },
      { "name": "3 star", "count": 400 },
      { "name": "4 star", "count": 900 },
      { "name": "5 star", "count": 1130 }
    ]
  },
  {
    "image": "/assets/demo-app6.webp",
    "title": "MindRelax",
    "companyName": "CalmTech",
    "id": 14,
    "description": "Meditation and relaxation app for stress relief.",
    "size": 22,
    "reviews": 600,
    "ratingAvg": 4.5,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 20 },
      { "name": "2 star", "count": 40 },
      { "name": "3 star", "count": 120 },
      { "name": "4 star", "count": 200 },
      { "name": "5 star", "count": 220 }
    ]
  },
  {
    "image": "/assets/demo-app2.webp",
    "title": "CodePlay",
    "companyName": "DevWorld",
    "id": 15,
    "description": "Learn programming with interactive challenges.",
    "size": 65,
    "reviews": 1800,
    "ratingAvg": 4.7,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 30 },
      { "name": "2 star", "count": 50 },
      { "name": "3 star", "count": 150 },
      { "name": "4 star", "count": 500 },
      { "name": "5 star", "count": 1070 }
    ]
  },
  {
    "image": "/assets/demo-app5.webp",
    "title": "CodePlay",
    "companyName": "DevWorld",
    "id": 15,
    "description": "Learn programming with interactive challenges.",
    "size": 65,
    "reviews": 1800,
    "ratingAvg": 4.7,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 30 },
      { "name": "2 star", "count": 50 },
      { "name": "3 star", "count": 150 },
      { "name": "4 star", "count": 500 },
      { "name": "5 star", "count": 1070 }
    ]
  },
  ,
  {
    "image": "/assets/demo-app3.webp",
    "title": "CodePlay",
    "companyName": "DevWorld",
    "id": 15,
    "description": "Learn programming with interactive challenges.",
    "size": 65,
    "reviews": 1800,
    "ratingAvg": 4.7,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 30 },
      { "name": "2 star", "count": 50 },
      { "name": "3 star", "count": 150 },
      { "name": "4 star", "count": 500 },
      { "name": "5 star", "count": 1070 }
    ]
  }
  ,
  {
    "image": "/assets/demo-app6.webp",
    "title": "CodePlay",
    "companyName": "DevWorld",
    "id": 15,
    "description": "Learn programming with interactive challenges.",
    "size": 65,
    "reviews": 1800,
    "ratingAvg": 4.7,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 30 },
      { "name": "2 star", "count": 50 },
      { "name": "3 star", "count": 150 },
      { "name": "4 star", "count": 500 },
      { "name": "5 star", "count": 1070 }
    ]
  }
  ,
  {
    "image": "/assets/demo-app1.webp",
    "title": "CodePlay",
    "companyName": "DevWorld",
    "id": 15,
    "description": "Learn programming with interactive challenges.",
    "size": 65,
    "reviews": 1800,
    "ratingAvg": 4.7,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 30 },
      { "name": "2 star", "count": 50 },
      { "name": "3 star", "count": 150 },
      { "name": "4 star", "count": 500 },
      { "name": "5 star", "count": 1070 }
    ]
  }
  ,
  {
    "image": "/assets/demo-app2.webp",
    "title": "CodePlay",
    "companyName": "DevWorld",
    "id": 15,
    "description": "Learn programming with interactive challenges.",
    "size": 65,
    "reviews": 1800,
    "ratingAvg": 4.7,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 30 },
      { "name": "2 star", "count": 50 },
      { "name": "3 star", "count": 150 },
      { "name": "4 star", "count": 500 },
      { "name": "5 star", "count": 1070 }
    ]
  }
  ,
  {
    "image": "/assets/demo-app5.webp",
    "title": "CodePlay",
    "companyName": "DevWorld",
    "id": 15,
    "description": "Learn programming with interactive challenges.",
    "size": 65,
    "reviews": 1800,
    "ratingAvg": 4.7,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 30 },
      { "name": "2 star", "count": 50 },
      { "name": "3 star", "count": 150 },
      { "name": "4 star", "count": 500 },
      { "name": "5 star", "count": 1070 }
    ]
  }
  ,
  {
    "image": "/assets/demo-app6.webp",
    "title": "CodePlay",
    "companyName": "DevWorld",
    "id": 15,
    "description": "Learn programming with interactive challenges.",
    "size": 65,
    "reviews": 1800,
    "ratingAvg": 4.7,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 30 },
      { "name": "2 star", "count": 50 },
      { "name": "3 star", "count": 150 },
      { "name": "4 star", "count": 500 },
      { "name": "5 star", "count": 1070 }
    ]
  }
  ,
  {
    "image": "/assets/demo-app1.webp",
    "title": "CodePlay",
    "companyName": "DevWorld",
    "id": 15,
    "description": "Learn programming with interactive challenges.",
    "size": 65,
    "reviews": 1800,
    "ratingAvg": 4.7,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 30 },
      { "name": "2 star", "count": 50 },
      { "name": "3 star", "count": 150 },
      { "name": "4 star", "count": 500 },
      { "name": "5 star", "count": 1070 }
    ]
  },
  {
    "image": "/assets/demo-app2.webp",
    "title": "CodePlay",
    "companyName": "DevWorld",
    "id": 15,
    "description": "Learn programming with interactive challenges.",
    "size": 65,
    "reviews": 1800,
    "ratingAvg": 4.7,
    "downloads": 9000000,
    "ratings": [
      { "name": "1 star", "count": 30 },
      { "name": "2 star", "count": 50 },
      { "name": "3 star", "count": 150 },
      { "name": "4 star", "count": 500 },
      { "name": "5 star", "count": 1070 }
    ]
  }
  
]

export default appData;