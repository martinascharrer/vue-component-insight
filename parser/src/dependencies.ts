import {
  cruise, IDependency, IReporterOutput,
} from 'dependency-cruiser';
import { JSDOM } from 'jsdom';

import { normalize } from 'path';
import { Dependency, VueComponent } from '../types';
import { kebabize } from './utils';

export const cruiseComponents = (components: string[], directory = 'src'):IReporterOutput | null => {
  let cruiseResult: IReporterOutput | null = null;
  try {
    cruiseResult = cruise(
      components,
      {
        includeOnly: directory,
      },
    );
  } catch (error) {
    console.error('Something went wrong cruising the project ', error);
  }
  return cruiseResult;
};

export const formatDependencies = (dependencies: IDependency[]): Dependency[] => {
  const newDependencies: Dependency[] = [];
  dependencies.forEach((dependency) => {
    newDependencies.push({
      fullPath: normalize(dependency.resolved),
      usedEvents: [],
      usedProps: [],
    });
  });
  return newDependencies;
};

// TODO: figure out a smarter way to get the dependency from the array
//  maybe save the indices in a separate loop beforehand?
export const getDependencyData = (components: VueComponent[], fullPath: string)
  : VueComponent | undefined => components.find((component) => component.fullPath === fullPath);

export const findDependencyUsages = (template: string, name: string): NodeListOf<Element> => {
  const { document } = new JSDOM(template).window;
  let dependencyUsages = document.querySelectorAll(name);
  if (dependencyUsages.length === 0) {
    dependencyUsages = document.querySelectorAll(kebabize(name));
  }
  return dependencyUsages;
};
