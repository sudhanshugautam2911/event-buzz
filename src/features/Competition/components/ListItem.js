export default function ListItem({ comp }) {
  return (
    // bg-slate-50 hover:bg-slate-100 rounded-md ring-1 ring-slate-200 shadow-sm
    <article className="flex flex-col md:flex-row items-start md:items-start justify-center md:space-x-12 mb-4 p-6">
      <img
        src={comp.img}
        alt=""
        className="w-60 h-44 object-cover flex-none rounded-md bg-slate-100"
      />
      <div className="min-w-0 relative flex-auto mt-4 md:mt-0 border-b border-slate-200 ">
        <h2 className="font-semibold text-slate-900 truncate pr-20">
          {comp.title}
        </h2>

        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium h-36">
          <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">description</dt>
            {/* for small screens */}
            <dd className="text-slate-500 md:hidden">
              {comp.description.length > 150
                ? comp.description.slice(0, 150) + "..."
                : comp.description}
            </dd>
            {/* for large screens */}
            <dd className="text-slate-500 hidden md:block">
              {comp.description.length > 300
                ? comp.description.slice(0, 300) + "..."
                : comp.description}
            </dd>
          </div>
        </dl>
        { comp.jobPosted ?
          <div className="text-xs font-semibold text-purple-700 mb-3">
            Job Posted: {comp.jobPosted}
          </div> 
          : <div className="text-xs font-semibold text-purple-700 mb-3">
            Job Posted: NA
          </div>
        }
      </div>
    </article>
  );
}
