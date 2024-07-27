import { Bars4Icon } from "@heroicons/react/24/solid";

export default function NavigationMenuDesktop() {
  return (
    <div className="">
      <div className="absolute top-20 right-6 hidden md:block hover:animate-menu_desktop_hover cursor-pointer">
        <div className="bg-cream w-16 h-16 rounded-full p-1">
          <div className="bg-pastel-gradient h-full p-0.5 rounded-full">
            <div className="bg-blackish p-0.5 h-full rounded-full">
              <div className="bg-pastel-gradient p-0.5 h-full rounded-full">
                <div className="bg-cream p-2 h-full rounded-full">
                  <Bars4Icon className="text-blackish" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
