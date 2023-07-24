import { memo } from 'react';

import { classNames } from '~/shared/lib';

import cls from './Button.module.scss';

interface ButtonProps {
  className?: string;
}

export const Button = memo((props: ButtonProps) => {
  const { className } = props;

  return <div className={classNames(cls.Button, {}, [className])} />;
});
