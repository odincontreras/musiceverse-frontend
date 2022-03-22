import { useRef } from "react";
import { useToast } from "@chakra-ui/react";
import { changeHandler, submitHandler } from "./EmailFormPasswordRecoveryLogic";

const EmailFormPasswordRecovery = ({ setUserEmail }) => {
	const formInputs = useRef({});
	const toast = useToast();

	return (
		<form
			className={`form`}
			onChange={(e) => changeHandler(e, formInputs)}
			onSubmit={(e) => submitHandler(e, formInputs, toast, setUserEmail)}
		>
			<h3 className="t3 c-white xxs-mb-30 text-center">
				Enter your email address and we will send you an email so you can
				recover your password
			</h3>

			<label htmlFor="email" className="body c-white">
				Email:
			</label>
			<input type="email" name="email" />

			<button type="submit" className="button">
				Recover password
			</button>
		</form>
	);
};

export default EmailFormPasswordRecovery;
