import { Alert, AlertProps, Snackbar } from "@mui/material";
import React, { forwardRef } from "react";
import { removeActiveNotification } from "../../../store/notifications/notificationSlice";
import { useAppDispatch } from "../../../store/hooks";
import { useAppSelector } from "../../../store/hooks";
import { activeNotification } from "../../../store/notifications/notificationSlice";
import { useTranslation } from "next-i18next";

//Revisit this - we want notifications to 'stack'
export const Notification = () => {
	const currentNotification = useAppSelector(activeNotification);
	const dispatch = useAppDispatch();
	const { t } = useTranslation("Notifications");

	const onClose = (e: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}
		dispatch(removeActiveNotification());
	};

	let notification = <></>;

	if (currentNotification) {
		notification = (
			<Snackbar open={true} autoHideDuration={3000} onClose={onClose}>
				<SnackbarAlert onClose={onClose} severity={currentNotification.type}>
					{t(currentNotification.i18n)}
				</SnackbarAlert>
			</Snackbar>
		);
	}
	return notification;
};

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
	function SnackbarAlert(props, ref) {
		return <Alert elevation={6} ref={ref} {...props} />;
	}
);
