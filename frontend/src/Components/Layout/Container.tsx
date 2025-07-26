import React from 'react';

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props) => <div {...props}>{props.children}</div>);

export default Container;
