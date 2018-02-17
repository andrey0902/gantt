/**
 * Created by andrei on 17.02.2018.
 */
export interface Project {
  id: number | string;
  start: Date | string;
  end: Date | string;
  tasks: Task[];
  currentDate?: Date | string;
  name?: string;
  startDate?: Date | string;
}

export interface Task {
  id: number;
   name: number | string;
  subTasks: SubTask[];
  treePath: string;
  parentId: number;
  resource?: string;
}
export interface SubTask {
  id: number;
  treePath?: any;
  parentId: number;
  name: string;
  resource: string;
  'start': Date | string;
  'end': Date | string;
  'percentComplete': number;
  'status': string;
}

export interface OptionsConfig {
  showProgress?: boolean;
  locale?: string;
  showTooltip?: boolean;
  typeTooltip?: boolean | string;
  showCurrentDay?: boolean;
  color?: {[key: string]: [string, string]};
  activity: Activity;
  body: {[key: string]: string};

}

export interface Activity {
  headerCol: [{
    [key: string]: string,
    width?: string;
  }];
  width: string;
}

