// Common Types
export type Branch = {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  adminId: string;
}

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT' | 'STAFF';
  branchId: string;
}

export type Student = {
  id: string;
  userId: string;
  grade: string;
  section: string;
  admissionNumber: string;
  parentId: string;
  branchId: string;
}

export type Staff = {
  id: string;
  userId: string;
  designation: string;
  department: string;
  branchId: string;
}