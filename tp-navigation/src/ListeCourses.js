function ListeCourses({ items }) {
  return (
    <div>
      <h3>Liste de Courses</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </div>
  );
}

export default ListeCourses;
