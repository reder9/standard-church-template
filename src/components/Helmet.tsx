import React from "react";
import { Helmet } from "react-helmet-async";
import churchConfig from "../config/churchConfig.json";

interface LayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const HelmetLayout: React.FC<LayoutProps> = ({
  title,
  description,
  children,
}) => {
  const fullTitle = `${churchConfig.churchName} - ${title}`;
  return (
    <div>
      <Helmet>
        <title>{fullTitle}</title>
        <meta
          name="description"
          content={
            description || `${title} page for ${churchConfig.churchName}`
          }
        />
      </Helmet>
      {children}
    </div>
  );
};

export default HelmetLayout;
