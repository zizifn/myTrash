import ClientRedirect from "@/components/client-redirect";
import { PresetDropDown } from "@/components/preset";

export default function Home() {
  return (
    <div className="fex flex-col">
      <div className="h-[var(--app-header-height)] border-b-2 border-gray-100">
        menu bar
      </div>
      <div className="grid grid-cols-3 items-center justify-center gap-12 border-b-2 border-gray-100 px-6 py-4">
        <div>
          <h4>Playground</h4>
        </div>
        <PresetDropDown></PresetDropDown>
      </div>
      <div className="flex flex-auto">
        <div>text box</div>
        <div>setting</div>
      </div>
      <ClientRedirect></ClientRedirect>
    </div>
  );
}
