import { Day } from '../models/day';
import * as moment from 'moment';

const today = moment();

export const DAYS: Day[] = [
  {id: 0, date: moment(today)},
  {id: 1, date: moment(today).add(1, 'days')},
  {id: 2, date: moment(today).add(2, 'days')},
  {id: 3, date: moment(today).add(3, 'days')},
  {id: 4, date: moment(today).add(4, 'days')},
  {id: 5, date: moment(today).add(5, 'days')},
  {id: 6, date: moment(today).add(6, 'days')},
  {id: 7, date: moment(today).add(7, 'days')}
];
