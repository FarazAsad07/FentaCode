import React from "react";
import { PointsDisplay } from "../components/composite/PointsDisplay";

export const DashboardPage = () => (
  <div className="max-w-2xl mx-auto">
    <PointsDisplay />
    {/* Add solved challenges list, claim rewards, etc. */}
  </div>
);
