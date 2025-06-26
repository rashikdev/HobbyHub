import React, { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import NewestGroup from "../components/NewestGroup";

const CreateGroup = () => {
  const { user } = use(AuthContext);

  const handleCreateGroup = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newGroup = Object.fromEntries(formData.entries());
    const group = { ...newGroup, groupType: "newestGroup" };
    console.log(group);
    // fetch("https://hobby-hub-server-ashen.vercel.app/groups", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(group),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       toast.success("Group created successfully");
    //       form.reset();
    //     }
    //   });
  };
  return (
    <div className="grid md:grid-cols-16">
      <div className="md:col-span-7 rounded-lg hidden md:block">
        <div className="mt-10">
          <h2 className="text-5xl font-bold mb-5">Create Your Group</h2>
          <p className="mb-6 text-gray-400">
            Start building your own community by setting your group's name,
            selecting a hobby category, and adding a description. Customize the
            details to reflect your group's purpose and vibe.
          </p>
        </div>
      </div>
      <div className="p-6 rounded-lg col-span-9">
        <form onSubmit={handleCreateGroup} className="space-y-4">
          <h2 className="text-2xl font-bold mb-1 md:hidden">
            Create Your Group
          </h2>
          <p className="mb-6 text-xs md:hidden">
            This is your group's details page. Here you can set the group's
            name, hobby category, description, and other details.
          </p>

          <div>
            <label className="block font-medium">Group Name</label>
            <input
              type="text"
              name="groupName"
              placeholder="Start with a name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Hobby Category</label>
            <select
              name="category"
              className="select select-bordered w-full"
              defaultValue=""
              required
            >
              <option disabled>Select a hobby category</option>
              <option>Drawing & Painting</option>
              <option>Photography</option>
              <option>Video Gaming</option>
              <option>Fishing</option>
              <option>Running</option>
              <option>Cooking</option>
              <option>Reading</option>
              <option>Writing</option>
              <option>Cleaning</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              placeholder="What's your group about?"
              className="textarea textarea-bordered w-full"
              rows={3}
              required
            ></textarea>
          </div>

          <div>
            <label className="block font-medium">Meeting Location</label>
            <input
              type="text"
              name="location"
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
              <option disabled value="">
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
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-medium">Image URL</label>
            <input
              type="url"
              name="image"
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
                value={user?.displayName || ""}
                readOnly
                className="input input-bordered w-full bg-base-100 cursor-not-allowed"
              />
            </div>
            <div className="w-1/2">
              <label className="block font-medium">User Email</label>
              <input
                type="email"
                name="email"
                value={user?.email || ""}
                readOnly
                className="input input-bordered w-full bg-base-100 cursor-not-allowed"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
