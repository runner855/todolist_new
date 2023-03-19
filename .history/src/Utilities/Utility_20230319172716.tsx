import { TASKS_TO_BE_DONE, TASKS_COMPLETED } from '../Constants/Dictionary';
import { AppUrls } from '../Types/appTypes';
import { LOGO } from '../../.history/src/Constants/Dictionary_20230319172700';
export const PagesArray = [
  {label:LOGO},
  {label: TASKS_TO_BE_DONE, to: AppUrls.TASKS_TO_BE_DONE},
  {label: TASKS_COMPLETED, to: AppUrls.TASKS_COMPLETED},

]