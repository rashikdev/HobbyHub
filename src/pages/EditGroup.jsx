import React, { use } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const EditGroup = () => {
  const { user } = use(AuthContext);
  const group = useLoaderData();
  const id = group._id;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedGroup = Object.fromEntries(formData.entries());
    fetch(`https://hobby-hub-server-ashen.vercel.app/groups/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Group updated successfully");
        }
      });
  };
  return (
    <div className="grid md:grid-cols-16 bg-gradient-to-br from-[#9b3bf5] via-orange-400 to-red-400">
      <div className="md:col-span-7 p-6 rounded-lg text-center hidden md:block">
        <div className="mt-50">
          <h2 className="text-5xl font-bold mb-5">Update Your Group</h2>
          <p className="mb-6 text-lg">
            Update your community by editing the group name, changing the hobby
            category, or refreshing the description. Make adjustments to better
            reflect your group's current purpose and vibe.
          </p>
        </div>
      </div>
      <div className="p-6 rounded-lg col-span-9">
        <form onSubmit={handleUpdate} className="space-y-4">
          <h2 className="text-2xl font-bold mb-1 md:hidden">
            Create Your Group
          </h2>
          <p className="mb-6 text-xs md:hidden">
            Update your community by editing the group name, changing the hobby
            category, or refreshing the description. Make adjustments to better
            reflect your group's current purpose and vibe.
          </p>

          <div>
            <label className="block font-medium">Group Name</label>
            <input
              type="text"
              name="groupName"
              defaultValue={group.groupName}
              placeholder="Start with a name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Hobby Category</label>
            <select
              name="hobbyCategory"
              className="select select-bordered w-full"
              defaultValue=""
              required
            >
              <option disabled defaultValue={group.hobbyCategory}>
                Select a hobby category
              </option>
              <option>Drawing & Painting</option>
              <option>Photography</option>
              <option>Video Gaming</option>
              <option>Fishing</option>
              <option>Running</option>
              <option>Cooking</option>
              <option>Reading</option>
              <option>Writing</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              placeholder="What's your group about?"
              className="textarea textarea-bordered w-full"
              rows={3}
              defaultValue={group.description}
              required
            ></textarea>
          </div>

          <div>
            <label className="block font-medium">Meeting Location</label>
            <input
              type="text"
              name="location"
              defaultValue={group.location}
              placeholder="Where will you meet?"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-medium">Max Members</label>
            <select
              name="members"
              className="select select-bordered w-full"
              defaultValue=""
              required
            >
              <option disabled defaultValue={group.members}>
                How many people can join?
              </option>
              <option>200</option>
              <option>500</option>
              <option>1,000</option>
              <option>2,000</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              defaultValue={group.startDate}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              defaultValue={group.image}
              placeholder="Input image URL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-medium">User Name</label>
              <input
                type="text"
                name="name"
                value={user?.displayName || group?.name || ""}
                readOnly
                className="input input-bordered w-full bg-base-100 cursor-not-allowed"
              />
            </div>
            <div className="w-1/2">
              <label className="block font-medium">User Email</label>
              <input
                type="email"
                name="email"
                value={group?.email || ""}
                readOnly
                className="input input-bordered w-full bg-base-100 cursor-not-allowed"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Update Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditGroup;
