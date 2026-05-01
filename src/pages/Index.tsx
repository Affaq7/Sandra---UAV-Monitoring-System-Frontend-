import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.replace("/uav.html");
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <p>Loading Sandra – UAV Command Center…</p>
    </div>
  );
};

export default Index;
