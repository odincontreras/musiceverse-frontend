import formChangeHandler from "helpers/formChangeHandler";
import { useRef } from "react";
import styles from "./DeleteUserForm.module.scss";
import { submitHandler } from "./DeleteUserFormLogic";

const DeleteUserForm = ({
	email,
	token,
	dispatch,
	router,
	toast,
}) => {
	const formInputs = useRef();

	return (
		<section className="all-space xxs-f-center-xy">
			<form
				className={`form ${styles.custom_form}`}
				onChange={(e) => formChangeHandler(e, formInputs)}
				onSubmit={(e) =>
					submitHandler(
						e,
						formInputs,
						email,
						token,
						router,
						toast,
						dispatch,
					)
				}
			>
				<h3 className="t3 c-white text-center">Delete account</h3>

				<p className="body c-white text-center xxs-mt-15">
					A token had been sent to your email, please copy that token to proceed
					to delete your account.
				</p>

				<label className="body" htmlFor="confirmationToken">
					Token:
				</label>
				<input type="text" name="confirmationToken" />

				<div className="xxs-f-main-center">
					<button className="button">Delete account</button>
				</div>
			</form>
		</section>
	);
};

export default DeleteUserForm;
