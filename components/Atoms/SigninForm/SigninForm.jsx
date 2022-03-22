import { useRef } from "react";
import { useToast } from "@chakra-ui/react";
import { changeHandler, submitHandler } from "./SigninFormLogic";

const SinginForm = ({ setUserEmail }) => {
	const formInputs = useRef({});
	const toast = useToast();

	return (
		<form
			className={`form`}
			onChange={(e) => changeHandler(e, formInputs)}
			onSubmit={(e) => submitHandler(e, formInputs, toast, setUserEmail)}
		>
			<h3 className="t3 c-white text-center">Sign in to Musicverse</h3>

			<label htmlFor="username" className="body c-white">
				Username:
			</label>
			<input type="text" name="username" />
			<label htmlFor="email" className="body c-white">
				Email:
			</label>
			<input type="email" name="email" />
			<label htmlFor="password" className="body c-white">
				Password:
			</label>
			<input type="password" name="password" minLength={6} />
			<label htmlFor="confirm_password" className="body c-white">
				Confirm Password:
			</label>
			<input type="password" name="confirm_password" minLength={6} />

			<button className="button" type="submit">
				Sign in
			</button>
		</form>
	);
};

export default SinginForm;
