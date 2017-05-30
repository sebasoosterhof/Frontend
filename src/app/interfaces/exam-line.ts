import { CandidateStatus } from '../infrastructure/enums/candidate-status';

export class ExamLine {
  id: number;
  examcandidate_id: number;
  exam_id: number;
  cohort_id: number;
  remark_id: number;
  status: CandidateStatus[];
  created_at: Date;
}
