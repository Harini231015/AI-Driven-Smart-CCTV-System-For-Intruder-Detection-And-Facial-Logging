import React, { useState } from "react";

// Smart CCTV UI
export default function SmartCCTVUI() {
  const [alerts] = useState([
    {
      id: 1,
      time: "2025-09-16 10:15:22",
      type: "Unknown Face",
      message: "Unknown face detected at Gate 1",
      read: false,
    },
    {
      id: 2,
      time: "2025-09-16 13:47:09",
      type: "Intruder",
      message: "Intruder detected in Lobby",
      read: false,
    },
    {
      id: 3,
      time: "2025-09-16 19:05:44",
      type: "Unknown Face",
      message: "Unknown face detected at Rear Exit",
      read: true,
    },
  ]);

  const [logs] = useState([
    {
      id: 101,
      name: "Unknown",
      date: "2025-09-16",
      time: "10:15:22",
      status: "Intruder",
    },
    {
      id: 102,
      name: "Unknown",
      date: "2025-09-16",
      time: "13:47:09",
      status: "Intruder",
    },
    {
      id: 103,
      name: "Unknown",
      date: "2025-09-16",
      time: "19:05:44",
      status: "Intruder",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="max-w-6xl mx-auto flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Smart CCTV - Live Monitor
        </h1>

        <nav className="flex items-center gap-4">
          <button className="px-3 py-2 bg-white rounded shadow-sm text-sm">
            Live
          </button>

          <button className="px-3 py-2 bg-white rounded shadow-sm text-sm">
            Alerts
          </button>

          <button className="px-3 py-2 bg-white rounded shadow-sm text-sm">
            Logs
          </button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto grid gap-6">
        <section className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Live Camera</h2>

          <div className="aspect-video bg-black rounded-lg flex items-center justify-center text-white">
            Live CCTV Feed
          </div>
        </section>

        <section className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Alerts</h2>

          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="border rounded-lg p-3"
              >
                <p className="font-medium">{alert.type}</p>
                <p className="text-sm text-gray-600">
                  {alert.message}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {alert.time}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">
            Facial Logs
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Time</th>
                  <th className="text-left p-2">Status</th>
                </tr>
              </thead>

              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="border-b">
                    <td className="p-2">{log.name}</td>
                    <td className="p-2">{log.date}</td>
                    <td className="p-2">{log.time}</td>
                    <td className="p-2">{log.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
