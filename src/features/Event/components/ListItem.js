export default function ListItem({ event }) {
  return (
    // bg-slate-50 hover:bg-slate-100 rounded-md ring-1 ring-slate-200 shadow-sm 
    <article className="flex flex-col md:flex-row  items-center md:items-start justify-center space-x-12 mb-4 p-6 border-b border-slate-200">
      <img
        src={event.img}
        alt=""
        className="w-60 h-44 object-cover flex-none rounded-md bg-slate-100"
      />
      <div className="min-w-0 relative flex-auto mt-4  md:mt-0">
        <h2 className="font-semibold text-slate-900 truncate pr-20">
          {event.title}
        </h2>

        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">description</dt>
            <dd className="text-slate-400">{event.description}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
