function Announcements({ countOnly }) {
  const [announcements, setAnnouncements] = React.useState([]);

  React.useEffect(() => {
    const ref = database.ref("announcements");
    ref.on("value", snapshot => {
      const data = snapshot.val() || {};
      setAnnouncements(Object.values(data));
    });
  }, []);

  if (countOnly) return <p className="text-2xl font-bold">{announcements.length}</p>;

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Announcements</h2>
      <ul className="list-disc pl-5">
        {announcements.map((a, i) => (
          <li key={i} className="mb-2">{a.title}</li>
        ))}
      </ul>
    </div>
  );
}
