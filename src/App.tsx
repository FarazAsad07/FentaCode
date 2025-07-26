import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { ChallengePage } from "./pages/ChallengePage";
import { DashboardPage } from "./pages/DashboardPage";
import { Toaster } from "./components/atomic/Toast";

function App() {
  // Placeholder wallet/points state
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [points, setPoints] = useState(0);

  return (
    <BrowserRouter>
      <MainLayout
        walletBarProps={{
          address,
          points,
          connected,
          onConnect: () => setConnected(true),
          onDisconnect: () => setConnected(false),
        }}
      >
        <Routes>
          <Route path="/" element={<ChallengePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <Toaster position="top-right" richColors closeButton />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
