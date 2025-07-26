import React from 'react';

const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props) => <div {...props}>{props.children}</div>);

export default Content;
