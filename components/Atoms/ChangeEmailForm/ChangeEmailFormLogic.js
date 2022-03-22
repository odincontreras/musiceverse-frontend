import { updateUser } from "store/reducers/user";
import nprogress from "nprogress";

export default async function submitHandler(
	e,
	formInputs,
	token,
	setNewEmail,
	toast
) {
	e.preventDefault();

	const newEmail = formInputs.current.newEmail;

	nprogress.start();

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/users/change-email`,
		{
			method: "PATCH",
			headers: {
				"content-type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ newEmail }),
		}
	);

	const data = await response.json();

	nprogress.done();

	if (response.ok) {
		return setNewEmail(newEmail);
	}

	return toast({
		title: data.message || "Error validatin new email, please try again!",
		status: "error",
		position: "top-right",
		isClosable: true,
	});
}
