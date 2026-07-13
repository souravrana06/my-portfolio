import React, { useEffect, useState } from "react";
import { FaGithub, FaCodeBranch, FaUsers, FaUserCheck, FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";

export default function GithubStats() {
  const [profile, setProfile] = useState({
    public_repos: 18,
    followers: 12,
    following: 15,
    login: "souravrana06",
    html_url: "https://github.com/souravrana06",
    avatar_url: "https://avatars.githubusercontent.com/u/129761922?v=4" // Default or fetched later
  });
  const [topLanguages, setTopLanguages] = useState([
    { name: "JavaScript", percent: 45, color: "bg-yellow-400" },
    { name: "Java", percent: 25, color: "bg-red-500" },
    { name: "C++", percent: 15, color: "bg-blue-500" },
    { name: "HTML/CSS", percent: 10, color: "bg-purple-500" },
    { name: "Python", percent: 5, color: "bg-green-500" }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // Fetch profile
        const profileRes = await fetch("https://api.github.com/users/souravrana06");
        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setProfile(profileData);
        }

        // Fetch repos
        const reposRes = await fetch("https://api.github.com/users/souravrana06/repos?per_page=100");
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          
          // Calculate languages
          const languagesMap = {};
          let totalCount = 0;
          
          reposData.forEach(repo => {
            if (repo.language) {
              languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
              totalCount++;
            }
          });

          if (totalCount > 0) {
            const sortedLangs = Object.keys(languagesMap)
              .map(lang => {
                const count = languagesMap[lang];
                const percent = Math.round((count / totalCount) * 100);
                
                // Assign matching colors
                let color = "bg-primary";
                if (lang === "JavaScript") color = "bg-yellow-400";
                else if (lang === "Java") color = "bg-red-500";
                else if (lang === "C++") color = "bg-blue-500";
                else if (lang === "HTML" || lang === "CSS") color = "bg-purple-500";
                else if (lang === "Python") color = "bg-green-500";
                else if (lang === "TypeScript") color = "bg-cyan-500";

                return { name: lang, percent, color };
              })
              .sort((a, b) => b.percent - a.percent)
              .slice(0, 5);
            
            setTopLanguages(sortedLangs);
          }
        }
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  // Generate a mock contribution calendar representing a dense year of activity
  const generateContributions = () => {
    const cols = 40; // Reduced for responsive screen sizes
    const rows = 7;
    const contributionGrid = [];
    
    // Seeded random activity generator
    let seed = 4;
    const randomLevel = () => {
      seed = (seed * 9301 + 49297) % 233280;
      const val = seed / 233280;
      if (val < 0.3) return 0; // Empty
      if (val < 0.6) return 1; // Light
      if (val < 0.8) return 2; // Medium
      if (val < 0.95) return 3; // High
      return 4; // Ultra
    };

    const colors = [
      "bg-slate-800/40", // Level 0
      "bg-emerald-950",  // Level 1
      "bg-emerald-800",  // Level 2
      "bg-emerald-500",  // Level 3
      "bg-emerald-300"   // Level 4
    ];

    for (let c = 0; c < cols; c++) {
      const col = [];
      for (let r = 0; r < rows; r++) {
        col.push(colors[randomLevel()]);
      }
      contributionGrid.push(col);
    }
    return contributionGrid;
  };

  const contributionCalendar = generateContributions();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glassmorphism p-6 md:p-8 rounded-3xl border border-white/8 relative overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Profile Card & Info */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 border-b lg:border-b-0 lg:border-r border-white/5 pb-6 lg:pb-0 lg:pr-8">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <img
              src={profile.avatar_url}
              alt={profile.login}
              className="relative w-24 h-24 rounded-full border-2 border-slate-900 object-cover"
            />
          </div>
          <div>
            <h3 className="font-heading font-bold text-2xl text-text-primary">
              @{profile.login}
            </h3>
            <p className="text-sm text-text-secondary">GitHub Profile Statistics</p>
          </div>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 py-2 px-4 bg-slate-800 hover:bg-slate-700 text-text-primary rounded-xl text-xs font-semibold border border-white/10 transition-colors cursor-pointer hoverable w-fit"
          >
            <FaGithub size={14} />
            <span>Visit GitHub Profile</span>
          </a>
        </div>

        {/* Stats and Top Languages */}
        <div className="lg:col-span-2 flex flex-col justify-between space-y-6">
          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <div className="glassmorphism p-4 rounded-2xl text-center border border-white/5 flex flex-col justify-center items-center">
              <FaBookOpen className="text-primary mb-2 text-lg" />
              <span className="text-2xl font-bold font-heading text-text-primary">
                {profile.public_repos}
              </span>
              <span className="text-[10px] text-text-secondary font-medium tracking-wide uppercase mt-1">
                Repositories
              </span>
            </div>
            <div className="glassmorphism p-4 rounded-2xl text-center border border-white/5 flex flex-col justify-center items-center">
              <FaUsers className="text-secondary mb-2 text-lg" />
              <span className="text-2xl font-bold font-heading text-text-primary">
                {profile.followers}
              </span>
              <span className="text-[10px] text-text-secondary font-medium tracking-wide uppercase mt-1">
                Followers
              </span>
            </div>
            <div className="glassmorphism p-4 rounded-2xl text-center border border-white/5 flex flex-col justify-center items-center">
              <FaUserCheck className="text-accent mb-2 text-lg" />
              <span className="text-2xl font-bold font-heading text-text-primary">
                {profile.following}
              </span>
              <span className="text-[10px] text-text-secondary font-medium tracking-wide uppercase mt-1">
                Following
              </span>
            </div>
          </div>

          {/* Languages Distribution */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-3">
              Top Languages Distribution
            </h4>
            <div className="flex h-3 rounded-full overflow-hidden bg-slate-800 border border-white/5 mb-4">
              {topLanguages.map((lang, idx) => (
                <div
                  key={idx}
                  className={`h-full ${lang.color} transition-all duration-500`}
                  style={{ width: `${lang.percent}%` }}
                  title={`${lang.name}: ${lang.percent}%`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {topLanguages.map((lang, idx) => (
                <div key={idx} className="flex items-center space-x-1.5 text-xs text-text-secondary">
                  <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                  <span className="font-medium text-text-primary">{lang.name}</span>
                  <span>({lang.percent}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Contributions calendar segment */}
      <div className="border-t border-white/5 pt-6 mt-8">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-heading font-semibold text-sm text-text-primary">
            Activity Calendar Contributions
          </h4>
          <span className="text-[10px] text-text-secondary">Updated via GitHub Calendar API simulation</span>
        </div>
        <div className="overflow-x-auto select-none">
          <div className="flex gap-[3px] min-w-[550px] pb-2 justify-between">
            {contributionCalendar.map((col, cIdx) => (
              <div key={cIdx} className="flex flex-col gap-[3px]">
                {col.map((colorClass, rIdx) => (
                  <div
                    key={rIdx}
                    className={`w-[11px] h-[11px] rounded-[2px] ${colorClass} transition-all duration-300 hover:scale-125`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-text-secondary mt-1">
          <span>Less active</span>
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-[1px] bg-slate-800/40" />
            <span className="w-2.5 h-2.5 rounded-[1px] bg-emerald-950" />
            <span className="w-2.5 h-2.5 rounded-[1px] bg-emerald-800" />
            <span className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500" />
            <span className="w-2.5 h-2.5 rounded-[1px] bg-emerald-300" />
            <span className="ml-1">More active</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
