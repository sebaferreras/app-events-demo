import { OperatorFunction } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export const filterEvent =
  <T, R extends T>(guard: (value: T) => value is R): OperatorFunction<T, R> =>
  (source) =>
    source.pipe(
      map((value) => {
        if (guard(value)) {
          return value;
        }

        return null;
      }),
      filter((value) => !!value)
    );
