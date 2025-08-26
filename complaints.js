function Complaints({ countOnly }) {
  const [complaints, setComplaints] = React.useState([]);

  React.useEffect(() => {
    const ref = database.ref("complaints");
    ref.on("value", snapshot => {
      const data = snapshot.val() || {};
      setComplaints(Object.values(data));
    });
  }, []);

  if (countOnly) return <p className="text-2xl font-bold">{complaints.length}</p>;

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Complaints</h2>
      <ul className="list-disc pl-5">
        {complaints.map((c, i) => (
          <li key={i} className="mb-2">{c.title}</li>
        ))}
      </ul>
    </div>
  );
}
