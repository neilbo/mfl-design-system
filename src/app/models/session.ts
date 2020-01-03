export interface Session {
    firstName: string, rollName: string, status: SessionStatus
}

export enum SessionStatus  {
    available = 'available', bookedCanCancel = 'bookedCanCancel', bookedCanMarkAbsent = 'bookedCanMarkAbsent', absent = 'absent'
}

export default function composeStatusLabel(session: Session): string {
    switch (session.status) {
      case "available":
        return "available";
      case "bookedCanCancel":
        return "booked";
      case "bookedCanMarkAbsent":
        return "booked";
      case "absent":
        return "absent";
      default:
        return undefined;
    }
  }