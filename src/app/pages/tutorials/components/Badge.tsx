export function Badge({
                        text, icon,
                      }: {
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="">
      <a className={`
     
      flex items-center 
      justify-start text-decoration-none
       border 
       text-white
      border-gray-200 
    hover:bg-gray-700 hover:text-gray-300 p-1 transition 
        duration-300 ease-in-out text-sm
        `} href={"/"}>
        <span className={"text-xs mx-2"}>{icon}</span>
        <span className="mx-2 w-fit">{text}</span>
      </a>
    </div>
  );
}
