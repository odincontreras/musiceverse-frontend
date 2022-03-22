import formChangeHandler from "helpers/formChangeHandler";
import { useRef, useState } from "react";
import SucceededNotification from "../SucceededNotification/SucceededNotification";
import submitHandler from "./ChangeEmailFormLogic";

const ChangeEmailForm = ({ token, toast }) => {
	const formInputs = useRef();
	const [newEmail, setNewEmail] = useState();

	return (
		<section className="all-space xxs-f-center-xy">
			{!newEmail ? (
				<form
					className="form"
					onChange={(e) => formChangeHandler(e, formInputs)}
					onSubmit={(e) =>
						submitHandler(e, formInputs, token, setNewEmail, toast)
					}
				>
					<h3 className="t3 c-white text-center">Email change</h3>

					<label htmlFor="newEmail" className="body c-white">
						New email:
					</label>
					<input type="email" name="newEmail" minLength={6} />

					<button className="button" type="submit">
						Confirm email
					</button>
				</form>
			) : (
				<SucceededNotification sectionChangeEmail userEmail={newEmail} />
			)}
		</section>
	);
};

export default ChangeEmailForm;
