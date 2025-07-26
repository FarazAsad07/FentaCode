import React from "react";
import { WalletBar } from "../components/composite/WalletBar";

type MainLayoutProps = {
  children: React.ReactNode;
  walletBarProps: React.ComponentProps<typeof WalletBar>;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children, walletBarProps }) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-white">
    <WalletBar {...walletBarProps} />
    <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
  </div>
);
