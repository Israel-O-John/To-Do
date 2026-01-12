function Pagination({ totalTasks, taskPerpage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalTasks / taskPerpage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button className="bg-red-700" key={index}>
            {page}
          </button>
        );
      })}
    </div>
  );
}
export default Pagination;
