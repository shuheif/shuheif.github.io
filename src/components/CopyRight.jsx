import React from "react";

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>
        &copy; Shuhei Fujita, {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default CopyRight;
