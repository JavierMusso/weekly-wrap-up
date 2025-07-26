import React from 'react';

const Box = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props) => <div {...props}>{props.children}</div>);

export default Box;
