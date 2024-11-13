interface IFooterMenuProps {
  data: [
    {
      id: number;
      title: string;
      link: string | null;
      openNewWindow: boolean;
      dropdown: [
        {
          id: number;
          title: string;
          link: string;
          openNewWindow: boolean;
        }
      ];
    }
  ];
}
export function FooterMenu({ data }: IFooterMenuProps) {
  console.log("Data Footer Menu -> ", data);
  return (
    <nav className="flex flex-col sm:flex-row gap-8 lg:ml-auto">
      {data?.map((menu) => (
        <div>
          <h3 className="mb-4 text-white text-sm opacity-40 uppercase">
            {menu.title}
          </h3>
          {menu.dropdown.length && (
            <ul className="">
              {menu.dropdown.map((sub) => (
                <li key={sub.title} className="mb-4">
                  <a
                    href={sub.link}
                    target={sub.openNewWindow ? "_blank" : "_self"}
                    className="text-white opacity-60 hover:opacity-100"
                  >
                    {sub.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
}
