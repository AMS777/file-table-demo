export enum FileStatus {
  Available = 'available',
  Scheduled = 'scheduled',
}

export interface File {
  readonly name: string;
  readonly device: string;
  readonly path: string;
  readonly status: string;
}
