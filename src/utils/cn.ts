/**
 * Lightweight classNames utility (no external dependencies).
 * Filters out falsy values and joins remaining strings with a space.
 *
 * Usage:
 *   cn('button', isActive && 'button--active', className)
 */
export function cn(...args: (string | false | undefined | null)[]): string {
  return args.filter((arg): arg is string => typeof arg === 'string' && arg !== '').join(' ')
}
