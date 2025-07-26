import React from "react";
import { Wallet, Trophy } from "lucide-react";
import { Button } from "../atomic/Button";
import { IconBadge } from "../atomic/IconBadge";

type WalletBarProps = {
  address?: string;
  points?: number;
  onConnect: () => void;
  onDisconnect: () => void;
  connected: boolean;
  loading?: boolean;
};

export const WalletBar: React.FC<WalletBarProps> = ({
  address,
  points,
  onConnect,
  onDisconnect,
  connected,
  loading,
}) => (
  <header className="sticky top-0 z-30 w-full bg-white/30 backdrop-blur border-b border-white/40 flex items-center justify-between px-6 py-3">
    <div className="flex items-center gap-2">
      <IconBadge icon={<Wallet className="w-5 h-5 text-indigo-600" />} aria-label="Wallet" />
      <span className="font-mono text-sm text-gray-700">
        {connected && address
          ? address.slice(0, 6) + "..." + address.slice(-4)
          : "Not Connected"}
      </span>
    </div>
    <div className="flex items-center gap-3">
      <IconBadge
        icon={<Trophy className="w-5 h-5 text-fuchsia-500" />}
        count={points}
        aria-label="Points"
      />
      {connected ? (
        <Button variant="secondary" size="sm" onClick={onDisconnect} loading={loading}>
          Disconnect
        </Button>
      ) : (
        <Button variant="primary" size="sm" onClick={onConnect} loading={loading}>
          Connect Wallet
        </Button>
      )}
    </div>
  </header>
);
