import { ExamType } from '../infrastructure/enums/exam-type';
import { ExamStatus } from '../infrastructure/enums/exam-status';

export interface Exam {
  id: number;
  type: ExamType[];
  status: ExamStatus[];
  description: string;
  remark_id: number;
  created_at: Date;
}
