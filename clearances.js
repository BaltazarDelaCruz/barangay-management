function Clearances({ countOnly }) {
  const [clearances, setClearances] = React.useState([]);

  React.useEffect(() => {
    const ref = database.ref("clearances");
    ref.on("value", snapshot => {
      const data = snapshot.val() || {};
      setClearances(Object.values(data));
    });
  }, []);

  if (countOnly) return <p className="text-2xl font-bold">{clearances.length}</p>;

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Clearances</h2>
      <ul className="list-disc pl-5">
        {clearances.map((c, i) => (
          <li key={i} className="mb-2">{c.title}</li>
        ))}
      </ul>
    </div>
  );
}
