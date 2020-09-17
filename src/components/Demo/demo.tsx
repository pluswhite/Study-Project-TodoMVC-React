import React, { FC, ReactChildren, ReactElement } from 'react';
import classnames from 'classnames';

import './demo.scss';

export interface IDemoProps {
  field?: string;
  className?: string;
  children: ReactChildren | ReactElement;
}

const Demo: FC<IDemoProps> = (props: IDemoProps) => {
  const { className, children, ...restProps } = props;
  const classes = classnames('demo', className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export default Demo;
