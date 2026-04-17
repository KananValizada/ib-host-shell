import React from "react";
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { RemotePageLoader } from "./mf/RemotePageLoader";
import { remoteRegistry } from "./mf/registry";

export default function App() {
  const enabledApps = remoteRegistry.filter((app) => app.enabled);

  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <aside
          style={{ width: 240, padding: 16, borderRight: "1px solid #e5e7eb" }}
        >
          <h2>IB Shell</h2>

          <nav>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {enabledApps.map((app) => (
                <li key={app.id} style={{ marginBottom: 12 }}>
                  <NavLink
                    to={app.routePath}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      fontWeight: isActive ? 700 : 400,
                    })}
                  >
                    {app.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main style={{ flex: 1, padding: 24 }}>
          <Routes>
            {enabledApps.map((app) => (
              <Route
                key={app.id}
                path={app.routePath}
                element={<RemotePageLoader app={app} />}
              />
            ))}

            {enabledApps.length > 0 && (
              <Route
                path="/"
                element={<Navigate to={enabledApps[0].routePath} replace />}
              />
            )}

            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
