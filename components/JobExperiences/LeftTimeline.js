const LeftTimeline = ({ index, job }) => {
  return (
    <>
      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
        <div className="order-1 w-5/12" />
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto text-white font-semibold text-lg">
            {index + 1}
          </h1>
        </div>
        <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
          <h3 className="mb-3 font-bold text-black text-xl">{job.title}</h3>
          <span className="text-sm text-gray-800">
            {job.date} - {job.company}
          </span>
          <ul className="list-disc">
            {job.tasks.map((task) => {
              return (
                <li className="py-2" key={task}>
                  {task}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default LeftTimeline;
