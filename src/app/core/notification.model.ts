export enum NotificationTypeEnum {
  'error' = 'error',
  'success' = 'success',
  'warning' = 'warning'
}

export interface NotificationData {
  message: string;
  type: NotificationTypeEnum;
}
