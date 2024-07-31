"use client";

import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function NavigationMenuDesktop() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <div className="">
      <div onClick={toggleNavigation} className="absolute top-20 right-6 hidden md:block hover:animate-menu_desktop_hover cursor-pointer z-50">
        <div className="bg-cream w-16 h-16 rounded-full p-1">
          <div className="bg-pastel-gradient h-full p-0.5 rounded-full">
            <div className="bg-blackish p-0.5 h-full rounded-full">
              <div className="bg-pastel-gradient p-0.5 h-full rounded-full">
                <div className="bg-cream p-2 h-full rounded-full">
                  {!isNavigationOpen ? <Bars4Icon className="text-blackish" /> : <XMarkIcon className="text-blackish" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isNavigationOpen && (
        <div className="absolute top-20 right-6 hidden md:block cursor-pointer z-40">
          <div className="w-20 h-20 bg-cream p-2"></div>
        </div>
      )}
    </div>
  );
}
