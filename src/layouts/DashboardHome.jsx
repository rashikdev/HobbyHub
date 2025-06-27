import React, { useEffect, useState } from "react";
import { MdGroups } from "react-icons/md";
import { useOutletContext } from "react-router";
import GroupStatsChart from "../components/GroupStatsChart";
import GroupRules from "../components/GroupRules";
import CountUp from "react-countup";
import UserInfoCard from "../components/UserCardInfo";
import { motion } from "framer-motion";
const DashboardHome = () => {
  const [groups, setGroups] = useState([]);
  const localGroups = useOutletContext();
  useEffect(() => {
    fetch("https://hobby-hub-server-ashen.vercel.app/groups")
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
      });
  }, []);
  const allGroups = [...groups, ...localGroups];
  return (
    <div className="my-2 flex flex-col justify-center space-y-15 mt-0">
      <UserInfoCard></UserInfoCard>
      <div className="flex md:flex-row flex-col gap-10 items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="flex-1 flex flex-col items-center justify-center lg:px-24 py-10 rounded-xl border-l-2 border-r-2 border-indigo-500 text-2xl space-y-3 shadow-lg w-full">
          <h2>
            <MdGroups size={40} color="blue" />
          </h2>
          <h2> Total Groups</h2>
          <CountUp start={0} end={allGroups.length} delay={0} duration={2.75}>
            {({ countUpRef }) => (
              <div>
                <span className="text-3xl font-semibold" ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="flex-1 flex flex-col items-center justify-center lg:px-24 py-10 rounded-xl border-l-2 border-r-2 border-indigo-500 text-2xl space-y-3 shadow-lg w-full">
          <h2>
            <MdGroups size={40} color="blue" />
          </h2>
          <h2>My Groups</h2>
          <CountUp start={0} end={groups.length} delay={0}>
            {({ countUpRef }) => (
              <div>
                <span className="text-3xl font-semibold" ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex-1 flex flex-col items-center justify-center lg:px-24 py-10 rounded-xl text-2xl border-l-2 border-r-2 border-indigo-500 space-y-3 shadow-lg w-full">
          <h2>
            <MdGroups size={40} color="blue" />
          </h2>
          <h2>Member</h2>
          <CountUp start={0} end={520} delay={0}>
            {({ countUpRef }) => (
              <div>
                <span className="text-3xl font-semibold" ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="lg:w-full w-full">
          <GroupStatsChart></GroupStatsChart>
        </div>
        <div className="lg:w-full w-full">
          <GroupRules></GroupRules>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
