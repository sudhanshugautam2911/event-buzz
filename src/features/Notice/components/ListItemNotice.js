export default function ListItemNotice({ notice }) {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = notice.fileUrl; // Replace with the actual URL of the file
    link.download = notice.fileName; // Replace with the desired file name
    link.setAttribute('target', '_blank'); // Open the link in a new tab
    link.setAttribute('rel', 'noopener noreferrer'); // Set additional attributes for security
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up after click
  };
  
  return (
    // bg-slate-50 hover:bg-slate-100 rounded-md ring-1 ring-slate-200 shadow-sm
    <article className="flex flex-col md:flex-row items-center md:items-start justify-center space-x-12 mb-4 p-6 bg-slate-50 hover:bg-slate-100 rounded-md ring-1 ring-slate-200 shadow-sm">
      <img
        src={notice.img}
        alt=""
        className="w-28 h-16 object-cover flex-none rounded-md bg-slate-100"
      />
      <div className="min-w-0 relative flex-auto mt-4  md:mt-0 space-y-4">
        <h2 className="font-semibold text-slate-900 truncate pr-20">
          {notice.title}
        </h2>
        <button onClick={handleDownload} className="text-sm font-bold text-purple-600 hover:text-purple-700 hover:underline">Download</button>
      </div>
    </article>
  );
}
