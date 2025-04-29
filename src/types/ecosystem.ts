
import { ReactNode } from 'react';

export interface EcosystemComponentType {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  features: string[];
  extraContent?: ReactNode;
  imagePath: string;
}
