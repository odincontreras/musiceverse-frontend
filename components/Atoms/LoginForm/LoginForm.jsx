import styles from "./LoginForm.module.scss";
import { changeHandler, submitHandler } from "./LoginFormLogic";
import { useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/reducers/user";
import { useToast } from "@chakra-ui/react";
import Link from "next/link";

const LoginForm = () => {
	const router = useRouter();
	const formInputs = useRef({});
	const dispatch = useDispatch();
	const toast = useToast();

	return (
		<form
			className={`form`}
			onChange={(e) => changeHandler(e, formInputs)}
			onSubmit={(e) =>
				submitHandler(
					e,
					formInputs,
					dispatch,
					setUser,
					router,
					toast
				)
			}
		>
			<h3 className="t3 c-white text-center">Log in to Musicverse</h3>

			<label htmlFor="email" className="body c-white">
				Email:
			</label>
			<input type="email" name="email" />
			<label htmlFor="password" className="body c-white">
				Password:
			</label>
			<input type="password" name="password" minLength={6} />

			<div className="xxs-mt-25 all-width m-f-main-center wrap">
				<div className={styles.grid_container}>
					<p className="body c-white xxs-mr-10">Do you forgot your password?</p>
					<Link href="/auth/password-recovery">
						<a>Retrieve it here</a>
					</Link>
					<p className="body c-white xxs-mr-10">
						Do you need a new verification token?
					</p>
					<Link href="/auth/verify-account/resend-token">
						<a>Get it here</a>
					</Link>
				</div>
			</div>

			<button type="submit" className="button">
				Log in
			</button>
		</form>
	);
};

export default LoginForm;
