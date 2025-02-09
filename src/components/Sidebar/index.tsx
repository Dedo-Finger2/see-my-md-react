import ListItem from "./ListItem";
import Header from "./Header";
import Footer from "./Footer";

function Sidebar() {
  return (
    // Wrapper
    <div className="flex flex-col justify-between text-neutral-100 w-full border-x border-neutral-700 h-full">
      <div className="h-full overflow-y-auto">
        {/* Header */}
        <Header />
        {/* Item list */}
        <div className="relative p-4 flex flex-col gap-1 items-center text-xs py-6">
          <ListItem fileName="Welcome" selected={true} />
          <ListItem fileName="Como Tailwind revolucionou a indústria do front-end" />
          <ListItem fileName="Minha opinião sobre sexo antes de um relacionamento" />
          <ListItem fileName="Segredos de Portugal" />
        </div>
      </div>
      {/* Bottom Menu */}
      <Footer />
    </div>
  );
}

export default Sidebar;
