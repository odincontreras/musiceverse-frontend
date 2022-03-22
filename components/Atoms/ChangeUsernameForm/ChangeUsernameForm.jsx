import formChangeHandler from "helpers/formChangeHandler";
import { useRef } from "react";
import { submitHandler } from "./ChangeUsernameFormLogic";

const ChangeUsernameForm = ({ token, closeModal, dispatch, toast }) => {
	const formInputs = useRef();

	return (
		<section
			className="all-space xxs-f-center-xy"
			onChange={(e) => formChangeHandler(e, formInputs)}
			onSubmit={(e) =>
				submitHandler(e, formInputs, token, dispatch, closeModal, toast)
			}
		>
			<form className="form">
				<h3 className="t3 c-white text-center">Username Change</h3>

				<label htmlFor="newUsername" className="body c-white">
					New username:
				</label>
				<input type="text" name="newUsername" minLength={6} />

				<button className="button" type="submit">
					Confirm
				</button>
			</form>
		</section>
	);
};

export default ChangeUsernameForm;
