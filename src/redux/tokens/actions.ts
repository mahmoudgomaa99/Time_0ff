import { createAction } from '@reduxjs/toolkit';

export const doSetToken = createAction<any>('set_checkup');
export const doSetDeviceToken = createAction<any>('set_device_token');
