import { TASKS_TO_BE_DONE, TASKS_COMPLETED } from '../Constants/Dictionary';
import { AppUrls } from '../Types/appTypes';
export const PagesArray = [
  {label:"Logo"},
  {label: TASKS_TO_BE_DONE, to: AppUrls.TASKS_TO_BE_DONE},
  {label: TASKS_COMPLETED, to: AppUrls.TASKS_COMPLETED},

]