import { collatedTasks } from '../constants';

// prettier-ignore
export const collatedTasksExist = 
selectedProject => collatedTasks.find(task => task.key === selectedProject);
