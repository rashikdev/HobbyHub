import GroupCard from "./GroupCard";

const FeaturedGroup = ({ groups }) => {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold">Featured Group</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-4">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group}></GroupCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGroup;
