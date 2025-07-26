import React from 'react';

const Wrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props) => <div {...props}>{props.children}</div>);

export default Wrapper;
