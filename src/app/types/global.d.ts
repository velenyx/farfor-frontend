type ReactTagProps<T> = import('react').ComponentPropsWithRef<T>;

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
