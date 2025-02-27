import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
//current user data
export const data = {
  user: {
    name: "Timothy Luce",
    email: "justa@example.com",
    avatar: "/image.png",
  },
}

// Menu items.
export const sideNavitems = {
  FEATURES: [{
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Discover",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Collection",
    url: "#",
    icon: Calendar,
  },],
  LIBRARY: [
    {
      title: "Download",
      url: "#",
      icon: Search,
    },
    {
      title: "Favorites",
      url: "#",
      icon: Settings,
    },
    {
      title: "Local Files",
      url: "#",
      icon: Calendar,
    },],
}

export const musicData = {
  recents: [
    {
      name: "Stairway to Heaven",
      author: "Led Zeppelin",
      url: "/",
      duration: "8:02",
      audio: "/musicFiles/StairwaytoHeaven.mp3"
    },
    {
      name: "Bohemian Rhapsody",
      author: "Queen",
      url: "/",
      duration: "5:55",
      audio: "/musicFiles/BohemianRhapsody.mp3"
    },
    {
      name: "Hotel California",
      author: "Eagles",
      url: "/",
      duration: "6:30",
      audio: "/musicFiles/StairwaytoHeaven.mp3"
    },
    {
      name: "Smells Like Teen Spirit",
      author: "Nirvana",
      url: "/",
      duration: "5:01",
      audio: "/musicFiles/SmellsLikeTeenSpirit.mp3"
    },
    {
      name: "Shape of You",
      author: "Ed Sheeran",
      url: "/",
      duration: "3:53",
      audio: "/musicFiles/shapeOfYou.mp3"
    },
    {
      name: "Rolling in the Deep",
      author: "Adele",
      url: "/",
      duration: "3:48",
    },
    {
      name: "Billie Jean",
      author: "Michael Jackson",
      url: "/",
      duration: "4:54",
      audio: "musicFiles/billieJean.mp3"
    },
    {
      name: "Dance Monkey",
      author: "Tones and I",
      url: "/",
      duration: "3:30",
      audio: "/musicFiles/danceMonkey.mp3"
    },
    {
      name: "Blinding Lights",
      author: "The Weeknd",
      url: "/",
      duration: "3:20",
      audio: "/musicFiles/blindingLights.mp3"
    },
    {
      name: "Uptown Funk",
      author: "Mark Ronson ft. Bruno Mars",
      url: "/",
      duration: "4:30",
      audio: "/musicFiles/uptownfunk.mp3"
    },
  ],
  playlists: [
    {
      name: "Chill Vibes",
      pages: [
        {
          name: "Lofi Beats",
          author: "Various Artists",
          url: "/",
          duration: "1:00:00",
        },
        {
          name: "Acoustic Sessions",
          author: "Various Artists",
          url: "/",
          duration: "45:30",
        },
        {
          name: "Relaxing Piano",
          author: "Instrumental",
          url: "/",
          duration: "50:15",
        },
      ],
    },
    {
      name: "Workout Jams",
      pages: [
        {
          name: "High-Energy Hits",
          author: "Various Artists",
          url: "/",
          duration: "55:00",
        },
        {
          name: "Pump-Up Anthems",
          author: "Various Artists",
          url: "/",
          duration: "48:25",
        },
        {
          name: "Cardio Beats",
          author: "Various Artists",
          url: "/",
          duration: "1:10:00",
        },
      ],
    },
    {
      name: "Throwback Classics",
      pages: [
        {
          name: "80s Hits",
          author: "Various Artists",
          url: "/",
          duration: "1:05:00",
        },
        {
          name: "90s Nostalgia",
          author: "Various Artists",
          url: "/",
          duration: "58:30",
        },
        {
          name: "2000s Jams",
          author: "Various Artists",
          url: "/",
          duration: "52:45",
        },
      ],
    },
    {
      name: "Road Trip Mix",
      pages: [
        {
          name: "Sing-Along Hits",
          author: "Various Artists",
          url: "/",
          duration: "1:15:00",
        },
        {
          name: "Scenic Drive Tunes",
          author: "Various Artists",
          url: "/",
          duration: "1:20:00",
        },
        {
          name: "Adventure Anthems",
          author: "Various Artists",
          url: "/",
          duration: "1:10:45",
        },
      ],
    },
    {
      name: "Late Night Feels",
      pages: [
        {
          name: "Mellow Melodies",
          author: "Various Artists",
          url: "/",
          duration: "1:05:30",
        },
        {
          name: "Soulful Ballads",
          author: "Various Artists",
          url: "/",
          duration: "58:10",
        },
        {
          name: "Dreamy Tunes",
          author: "Various Artists",
          url: "/",
          duration: "1:12:00",
        },
      ],
    },
  ],
}

export const loadPlaylists = () => {
  if (typeof window !== "undefined") {
    const savedPlaylists = localStorage.getItem("playlists");
    return savedPlaylists ? JSON.parse(savedPlaylists) : musicData.playlists;
  }
  return musicData.playlists;
};

export const savePlaylists = (playlists: typeof musicData.playlists) => {
  localStorage.setItem("playlists", JSON.stringify(playlists));
};

