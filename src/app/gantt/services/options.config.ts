export class OptionsConfig {
  public showProgress = false;
  public locale = 'en';
  public showTooltip = false;
  public typeTooltip: boolean | string = false;
  public showCurrentDay = false;
  public color = {
  pending: [ '#9E9E9E', '#7e7e7e'],
  completed: ['#00BFA5', '#71bf90' ],
  error: ['#ef3633', '#EF5350'],
  progress: ['#32aaf5', '#3c8df5']
};
}
