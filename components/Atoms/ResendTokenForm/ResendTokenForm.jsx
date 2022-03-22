import { useRef } from "react";
import { useToast } from "@chakra-ui/react";
import { changeHandler, submitHandler } from "./ResendTokenFormLogic";

const ResendTokenForm = ({ setUserEmail }) => {
	const formInputs = useRef({});
	const toast = useToast();

	return (
		<form
			className={`form`}
			onChange={(e) => changeHandler(e, formInputs)}
			onSubmit={(e) => submitHandler(e, formInputs, toast, setUserEmail)}
		>
			<label htmlFor="email" className="body c-white">
				Email:
			</label>
			<input type="email" name="email" />
			<label htmlFor="password" className="body c-white">
				Password:
			</label>
			<input type="password" name="password" minLength={6} />

			<button type="submit" className="button">
				Resend token
			</button>
		</form>
	);
};

export default ResendTokenForm;
