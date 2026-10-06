import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-surface min-h-dvh">
      <main className="mx-auto min-h-dvh max-w-5xl justify-center pl-0 md:pl-18">
        {children}
      </main>
    </div>
  );
}
