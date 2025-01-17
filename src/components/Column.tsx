import { ReactNode } from 'react';

interface ColumnProps {
  children?: ReactNode,
  classes?: string[],
}

function Column({
  classes = [],
  children = null,
}: ColumnProps) {
  const className = classes.map((c) => `col-${c}`).join(' ');

  return (
    <div className={className}>
      {children}
    </div>
  );
}

Column.defaultProps = {
  children: null,
  classes: [],
} as Partial<ColumnProps>;

export default Column;
