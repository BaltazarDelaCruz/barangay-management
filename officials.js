function Officials() {
  const [officials, setOfficials] = React.useState([]);

  React.useEffect(() => {
    const ref = database.ref("officials");
    ref.on("value", snapshot => {
      const data = snapshot.val() || {};
      setOfficials(Object.values(data));
    });
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Barangay Officials</h2>
      <ul className="list-disc pl-5">
        {officials.map((o, i) => (
          <li key={i} className="mb-2">{o.position}: {o.name}</li>
        ))}
      </ul>
    </div>
  );
}
