import PropTypes from "prop-types";

import NavbarHeader from "./NavbarHeader";

const Index = ({ children }) => {
  return (
    <div className="h-fit w-full bg-main-bg border-4 border-main-border rounded-xl">
      <NavbarHeader />

      <div className="p-5 text-main-text">{children}</div>
    </div>
  );
};
Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
