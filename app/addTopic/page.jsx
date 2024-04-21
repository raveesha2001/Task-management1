"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
    const [Title, setTitle] = useState("");
    const [Information, setInformation] = useState("");
    const [Priority, setPriority] = useState("");
    const [Statuses, setStatuses] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!Title || !Information){
            alert("Title and Information are required.");
            return;
        }

        try {
          await fetch('http://localhost:3000/api/topics',{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({Title, Information, Priority, Statuses })
          }); 
          
          if(res.ok) {
            router.push("/");
          } else {
            throw new Error("Failed to create a Task");
          }
        } catch (error) {
            console.log(error);
        }

    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
            onChange={(e) => setTitle(e.target.value)}
            value={Title}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Title" />

            <input
            onChange={(e) => setInformation(e.target.value)}
            value={Information}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Information" />

            <input
            onChange={(e) => setPriority(e.target.value)}
            value={Priority}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Priority" />

            <input
            onChange={(e) => setStatuses(e.target.value)}
            value={Statuses}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Statuses" />

            <button type = "submit"
             className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                Add
            </button>
        </form>
    );
}