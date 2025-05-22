import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router";

const EditGroup = () => {
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
    <div className="max-w-3xl mx-auto p-6 mt-8 bg-white dark:bg-base-200 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-1">Update group</h2>
      <p className="mb-6 text-sm text-gray-500">
        This is your group's details page. Here you can update the group's name,
        category, description, and meeting location.
      </p>

      <form onSubmit={handleUpdate} className="space-y-4">
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
            defaultValue={group.hobbyCategory}
            required
          >
            <option disabled value="">
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
            defaultValue={group.description}
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
            defaultValue={group.members}
            required
          >
            <option disabled value="">
              How many people can join?
            </option>
            <option>200+ members</option>
            <option>500+ members</option>
            <option>1,000+ members</option>
            <option>2,000+ members</option>
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
              value={group.name}
              readOnly
              className="input input-bordered w-full bg-base-100 cursor-not-allowed"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-medium">User Email</label>
            <input
              type="email"
              name="email"
              value={group.email}
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
  );
};

export default EditGroup;
