export default function EditTopicForm() {
    return <form className="flex flex-col gap-3">
    <input
    className="border border-slate-500 px-8 py-2"
    type="text"
    placeholder="Title" />

    <input
    className="border border-slate-500 px-8 py-2"
    type="text"
    placeholder="Information" />

    <input
    className="border border-slate-500 px-8 py-2"
    type="text" 
    placeholder="Priority" />

    <input
    className="border border-slate-500 px-8 py-2"
    type="text"
    placeholder="Statuses" />

    <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Task
    </button>
</form>;
}