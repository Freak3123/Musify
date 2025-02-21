import React from 'react'
import {useTheme} from 'next-themes'
import { useEffect, useState } from "react";
import {Sun} from 'lucide-react'

const ThemeChanger = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
        {currentTheme === 'dark' ? (
                <div
                    className="group transition-all duration-200 flex justify-center rounded-md p-2"
                    onClick={() => setTheme('light')}
                    aria-label="Switch to light mode"
                >
                    <Sun/>
                </div>
            ) : (
                <div
                    className="group transition-all duration-200 rounded-md flex justify-center items-center p-2"
                    onClick={() => setTheme('dark')}
                    aria-label="Switch to dark mode"
                >
                    <svg
                        className="flex size-7 justify-center items-center"
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="stroke-black  transition-all duration-500"
                            d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            )}
      
    </div>
  )
}

export default ThemeChanger
