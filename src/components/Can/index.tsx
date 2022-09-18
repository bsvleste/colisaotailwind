import { ReactNode } from 'react';
import { UseCan } from '../../hooks/useCan';

interface CanProps {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
}
const Can = ({ children, permissions, roles }: CanProps) => {
  const userCanSeeComponent = UseCan({ permissions, roles });
  if (!userCanSeeComponent) {
    return null;
  }
  return <>{children}</>;
};
export default Can;