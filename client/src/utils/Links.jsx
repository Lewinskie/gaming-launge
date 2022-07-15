import { Link } from "react-router-dom";

export const Links = ({ ...rest }) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "About", link: "/about" },
    { name: "Contact Us", link: "/contactus" },
    { name: "Cart", link: "/cart" },
  ];
  return (
    <>
      {links.map((link, index) => {
        return (
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
            }}
            key={index}
          >
            <Link to={link.link} {...rest}>
              {link.name}
            </Link>
          </div>
        );
      })}
    </>
  );
};
