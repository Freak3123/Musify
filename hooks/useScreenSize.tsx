import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [isXl, setIsXl] = useState(
    typeof window !== "undefined" && window.innerWidth >= 1280
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsXl(window.innerWidth >= 1280);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return isXl;
};
