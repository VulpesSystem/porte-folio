import NavigationMenuDesktop from "@/components/navigation-menu-desktop";

export default function Home() {
  return (
    <div className="relative h-screen">
      <NavigationMenuDesktop />
      <div className="bg-cream rounded-lg w-8/12 h-1/2 absolute inset-0 m-auto p-5">
        <div className="bg-pastel-gradient rounded p-1 h-full">
          <div className="bg-blackish p-0.5 h-full rounded">
            <div className="bg-pastel-gradient rounded p-0.5 h-full">
              <div className="bg-cream rounded h-full p-3">
                <p className="text-blackish font-medium text-center text-9xl font-exo">BOOP ! </p>
                <p className="text-blackish font-medium">just trying to see how things go, nothing to see here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
