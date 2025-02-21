import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [isXl, setIsXl] = useState(window.innerWidth >= 1280); // Tailwind's `xl` breakpoint is 1280px

  useEffect(() => {
    const handleResize = () => {
      setIsXl(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isXl;
};