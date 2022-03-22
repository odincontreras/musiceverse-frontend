import { useRef } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { changeHandler, submitHandler } from "./NewPasswodFormLogic";
import { useDispatch } from "react-redux";

const NewPasswodForm = ({ token }) => {
	const router = useRouter();
	const formInputs = useRef({});
	const toast = useToast();
	const dispatch = useDispatch();

	return (
		<form
			className="form"
			onChange={(e) => changeHandler(e, formInputs)}
			onSubmit={(e) =>
				submitHandler(
					e,
					formInputs,
					token,
					router,
					toast,
					dispatch
				)
			}
		>
			<h3 className="t3 text-center">Password change</h3>

			<label htmlFor="newPassword" className="body c-white">
				Password:
			</label>
			<input type="password" name="newPassword" minLength={6} />

			<label htmlFor="confirmPassword" className="body c-white">
				Confirm Password:
			</label>
			<input type="password" name="confirmPassword" minLength={6} />
			<button className="button" type="submit">
				Confirm change
			</button>
		</form>
	);
};

export default NewPasswodForm;
