function Residents({ countOnly }) {
  const [residents, setResidents] = React.useState([]);

  React.useEffect(() => {
    const ref = database.ref("residents");
    ref.on("value", snapshot => {
      const data = snapshot.val() || {};
      const list = Object.values(data);
      setResidents(list);
    });
  }, []);

  if (countOnly) {
    return <p className="text-2xl font-bold">{residents.length}</p>;
  }

  return (
    <div className="card mb-6">
      <h3 className="text-xl font-bold mb-4">Recent Residents</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2">Name</th>
            <th className="py-2">Address</th>
            <th className="py-2">Contact</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((r, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="py-2">{r.name}</td>
              <td className="py-2">{r.address}</td>
              <td className="py-2">{r.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
