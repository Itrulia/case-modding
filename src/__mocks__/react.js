import * as React from "react";

// Shim memo
const memo = Component =>
  class extends React.PureComponent {
    render() {
      return <Component {...this.props} />;
    }
  };

module.exports = { ...React, memo };
