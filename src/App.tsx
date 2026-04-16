import { Suspense } from "react";
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { menuItems } from "./menu";
import { pageRegistry } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <aside
          style={{
            width: 220,
            borderRight: "1px solid #ddd",
            padding: 20,
            boxSizing: "border-box",
          }}
        >
          <h2>IB Shell</h2>

          <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "black" : "#555",
                  fontWeight: isActive ? 700 : 400,
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main style={{ flex: 1, padding: 20 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {menuItems.map((item) => {
              const PageComponent = pageRegistry[item.pageKey];

              return (
                <Route
                  key={item.path}
                  path={item.path}
                  element={
                    <Suspense fallback={<div>{item.label} loading...</div>}>
                      <PageComponent />
                    </Suspense>
                  }
                />
              );
            })}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
