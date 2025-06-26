import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import GroupCard from "../components/GroupCard";
import { CiFilter } from "react-icons/ci";
const AllGroup = () => {
  const [groups, setGroups] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Group Name");
  const [order, setOrder] = useState("Ascending");
  const [showFilters, setShowFilters] = useState(false);

  const localGroups = useLoaderData();

  useEffect(() => {
    fetch("https://hobby-hub-server-ashen.vercel.app/groups")
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
      });
  }, []);

  const allGroups = [...groups, ...localGroups];

  const filteredGroups =
    selectedCategory === "All"
      ? allGroups
      : allGroups.filter((g) => g.category === selectedCategory);

  const sortedGroups = [...filteredGroups].sort((a, b) => {
    let valA, valB;
    if (sortBy === "Group Name") {
      valA = a.groupName.toLowerCase();
      valB = b.groupName.toLowerCase();
    } else {
      valA = new Date(a.startDate);
      valB = new Date(b.startDate);
    }
    return order === "Ascending"
      ? valA > valB
        ? 1
        : -1
      : valA < valB
      ? 1
      : -1;
  });

  const allCategories = [
    "All",
    ...new Set(
      allGroups.map((g) => g.category).filter((c) => c && c.trim() !== "")
    ),
  ];

  return (
    <div className="min-h-screen w-11/12 mx-auto py-10">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
          🔍 Explore All Hobby Groups
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Discover, join and participate in communities that match your
          interests.
        </p>
      </div>

      {/* Filter Toggle Button */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="border border-indigo-500 px-4 py-2 rounded-md flex items-center gap-2 text-indigo-700 font-bold cursor-pointer"
        >
          <CiFilter /> Filters
        </button>
        {/* You can put extra buttons here later */}
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-indigo-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {allCategories.map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-indigo-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Group Name">Sort by Group Name</option>
            <option value="Start Date">Sort by Start Date</option>
          </select>

          <select
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-indigo-500"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>
      )}

      {/* Grid */}
      {sortedGroups.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sortedGroups.map((group, index) => (
            <GroupCard key={index} group={group} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 font-medium">
          No groups found for selected filter/sort.
        </p>
      )}
    </div>
  );
};

export default AllGroup;
