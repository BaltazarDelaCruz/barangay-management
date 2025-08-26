function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-green-600 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-10">Barangay Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:bg-green-500 px-4 py-2 rounded">Home</a>
          <a href="#" className="hover:bg-green-500 px-4 py-2 rounded">Residents</a>
          <a href="#" className="hover:bg-green-500 px-4 py-2 rounded">Complaints</a>
          <a href="#" className="hover:bg-green-500 px-4 py-2 rounded">Clearances</a>
          <a href="#" className="hover:bg-green-500 px-4 py-2 rounded">Announcements</a>
          <a href="#" className="hover:bg-green-500 px-4 py-2 rounded">Officials</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome, Captain</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-gray-500">Total Residents</h3>
            <Residents countOnly />
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-gray-500">Pending Complaints</h3>
            <Complaints countOnly />
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-gray-500">Clearances Issued</h3>
            <Clearances countOnly />
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-gray-500">Announcements</h3>
            <Announcements countOnly />
          </div>
        </div>

        {/* Sections */}
        <Residents />
        <Complaints />
        <Clearances />
        <Announcements />
        <Officials />
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
