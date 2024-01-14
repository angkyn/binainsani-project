import React from "react";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <div className="h-[4000px]"></div>
      <Footer />
    </div>
  );
};

export default HomepageLayout;
